'use strict'

import { noteService } from '../services/note.service.js'
import NoteFilter from '../cmps/NoteFilter.js'
import NoteList from '../cmps/NoteList.js'
import AddNote from '../cmps/AddNote.js'

export default {
    template: `
    <section class="notes-index">
        <AddNote :notes="notes" @setNoteType=setNoteType @addNote=addNote />
        <NoteList :notes="notes" :pinnedNotes="pinnedNotes" @update="updateNote" @duplicate="duplicateNote"
         @unpin="unpinNote"
         @remove="removeNote" @paint="paint"/>
    </section>`,

    data() {
        return {
            noteType: 'NoteTxt',
            notes: [],
            pinnedNotes: [],
        }
    },
    methods: {
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                    console.log('note removed')
                })
                .catch(err => {
                    console.log('error')
                })
        },
        updateNote(noteId) {
            const idx = this.notes.findIndex(note => note.id === noteId)
            noteService.save(this.notes[idx])
                .then(() => {
                    console.log('note saved')
                })
                .catch(err => {
                    console.log('note not saved')
                })
        },
        duplicateNote(noteId) {
            const idx = this.notes.findIndex(note => note.id === noteId)
            const newNote = JSON.parse(JSON.stringify(this.notes[idx]));
            newNote.id = ''
            console.log('newNote', newNote)
            this.notes.push(newNote)
            noteService.save(newNote)
        },
        paint() {
            noteService.query()
                .then(notes => {
                    this.pinnedNotes = notes.filter(note => note.info.isPinned)
                    this.notes = notes.filter(note => !note.info.isPinned)
                })
        },
        setNoteType(type) {
            console.log('type', type)
            this.noteType = type
        },
        addNote(newNote) {
            console.log('this.notes,this.pinnedNotes', this.notes, this.pinnedNotes)
            this.notes.push(newNote)
        },
        unpinNote(note) {
            console.log('IS REALLY NOTE', note)
            note.info.isPinned = false
            const idx = this.pinnedNotes.findIndex(pinnedNote => note.id === pinnedNote.id)
            this.notes.push(this.pinnedNotes.splice(idx, 1))
            console.log('this.notes update:', this.notes)
            noteService.save(note)
        },
        // pinNote(pinNote) {
        //     pinNote.info.isPinned = false
        //     noteService.save(pinNote)
        //         .then(() => {
        //             const idx = this.notes.findIndex(note => note.id === pinNote.id)
        //             this.pinnedNotes.unshift(this.notes.splice(idx, 1))
        //         })
        // }
    },

    computed: {
    },

    created() {
        noteService.query()
            .then(notes => {
                console.log('notes', notes)
                this.pinnedNotes = notes.filter(note => note.info.isPinned)
                this.notes = notes.filter(note => !note.info.isPinned)
            })
    },
    components: {
        NoteFilter,
        NoteList,
        AddNote,
    },
    emits: [],
}