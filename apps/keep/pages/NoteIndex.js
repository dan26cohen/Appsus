'use strict'

import { noteService } from '../services/note.service.js'
import NoteList from '../cmps/NoteList.js'
import AddNote from '../cmps/AddNote.js'
import NoteFilter from '../cmps/NoteFilter.js'

export default {
    template: `
    <section class="notes-index">
        <NoteFilter @filter="setFilterBy"/>
        <AddNote :notes="notes" @setNoteType=setNoteType @addNote=addNote />
        <NoteList :notes="filteredNotes" :pinnedNotes="pinnedNotes"
         @update="updateNote" @duplicate="duplicateNote"
         @pin="pinNote" @unpin="unpinNote" 
         @remove="removeNote" @paint="paint"/>
    </section>`,

    data() {
        return {
            noteType: 'NoteTxt',
            notes: [],
            pinnedNotes: [],
            filterBy: { type: 'All' },
        }
    },
    methods: {
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    if (idx !== -1) this.notes.splice(idx, 1)
                    else {
                        const idx = this.pinnedNotes.findIndex(note => note.id === noteId)
                        this.pinnedNotes.splice(idx, 1)
                    }
                    console.log('note removed')
                })
                .catch(err => {
                    console.log('error')
                })
        },
        updateNote(noteId) {
            let idx = this.notes.findIndex(note => note.id === noteId)
            if (idx !== -1) noteService.save(this.notes[idx])
            else {
                idx = this.pinnedNotes.findIndex(pinnedNote => pinnedNote.id === noteId)
                noteService.save(this.pinnedNotes[idx])
            }
        },
        duplicateNote(noteId) {
            let idx = this.notes.findIndex(note => note.id === noteId)
            let newNote
            if (idx !== -1) {
                newNote = JSON.parse(JSON.stringify(this.notes[idx]));
                this.notes.push(newNote)
            } else {
                idx = this.pinnedNotes.findIndex(note => note.id === noteId)
                newNote = JSON.parse(JSON.stringify(this.pinnedNotes[idx]));
                this.pinnedNotes.push(newNote)

            }
            newNote.id = ''
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
            this.notes.push(this.pinnedNotes.splice(idx, 1)[0])
            noteService.save(note)
        },
        pinNote(note) {
            console.log('IS REALLY NOTE', note)
            note.info.isPinned = true
            const idx = this.notes.findIndex(regularNote => note.id === regularNote.id)
            this.pinnedNotes.push(this.notes.splice(idx, 1)[0])
            console.log('this.pinnedNotes', this.pinnedNotes)
            noteService.save(note)
        },
        setFilterBy(filterBy) {
            console.log('filterBy', filterBy)
            this.filterBy = filterBy
            console.log('this.filterBy', this.filterBy)
        },

    },

    computed: {
        filteredNotes() {
            const regex = new RegExp(this.filterBy.title, 'i')
            if (this.filterBy.type === 'All') {
                console.log('example')
                return this.notes
            }
            else return this.notes.filter(note => regex.test(note.info.title) && note.type === this.filterBy.type)
        }
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