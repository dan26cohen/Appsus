import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTES_KEY = 'notesDB'

export const noteService = {
    query,
    query,
    get,
    remove,
    save,
    addNewNote,
    getEmptyNote,
    paintNote,
    getNoteById,
}
_createNotes()

function query(filterBy = {}) {
    return storageService.query(NOTES_KEY).then((notes) => {
        // if (filterBy.txt) {
        //     const regex = new RegExp(filterBy.txt, 'i')
        //     notes = notes.filter((notes) => regex.test(notes.title))
        // }
        // if (filterBy.maxPrice) {
        //     notes = notes.filter((notes) => notes.listPrice.amount <= filterBy.maxPrice)
        // }
        return notes
    })
}

function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function save(note) {
    debugger
    if (note.id) {
        return storageService.put(NOTES_KEY, note)
    } else {
        return storageService.post(NOTES_KEY, note)
    }
}


function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = _getDemoData()
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}



function getEmptyNote() {
    const note =
    {
        createdAt: utilService.getCurrDate(),
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: 'white',
        },
        info: {
            title: 'Title',
            txt: 'Txt',
            todos: [{ txt: 'Driving license', doneAt: null }],
            url: '',
        }
    }
    return note
}

function addNewNote(newNote) {
    return storageService.query(NOTES_KEY).then((notes => {
        const noteCopy = JSON.parse(JSON.stringify(newNote));
        return save(noteCopy)
    }))
}

function paintNote(noteId, color) {
    return storageService.query(NOTES_KEY).then((notes => {
        const idx = notes.findIndex(note => note.id === noteId)
        console.log('color service', color)
        notes[idx].style.backgroundColor = color
        const newNote = JSON.parse(JSON.stringify(notes[idx]));
        console.log('newNote', newNote)
        return save(newNote)
    }))
}

function getNoteById(noteId) {
    return storageService.query(NOTES_KEY).then((notes => {
        console.log('notes', notes)
        const idx = notes.findIndex(note => note.id === noteId)
        if (idx === -1) return
        return notes[idx]
    }))
}

function _getDemoData() {
    const notes = [
        {
            id: 'n101',
            createdAt: 1112222,
            type: 'NoteTxt',
            isPinned: true,
            style: {
                backgroundColor: 'yellow'
            },
            info: {
                title: 'Note 1',
                txt: 'Fullstack Me Baby!'
            }
        },
        {
            id: 'n102',
            type: 'NoteImg',
            isPinned: false,
            info: {
                title: 'Note 2',
                url: '../../../img/1.png',
                txt: 'bla bla bla bla',
            },
            style: {
                backgroundColor: 'green'
            }
        },
        {
            id: 'n103',
            type: 'NoteTodos',
            isPinned: false,
            style: {
                backgroundColor: 'gray'
            },
            info: {
                title: 'Note 3',
                txt: 'bla bla bla bla',
                todos: [
                    { txt: 'Finish Sprint 1', doneAt: 187111111 },
                    { txt: 'Finish Sprint 2', doneAt: 187111111 },
                    { txt: 'Finish Sprint 3', doneAt: null },
                    { txt: 'Finish Sprint 4', doneAt: null },
                ]
            },
        },
        {
            id: 'n104',
            type: 'NoteTodos',
            isPinned: false,
            style: {
                backgroundColor: 'white'
            },
            info: {
                title: 'Note 7',
                txt: utilService.makeLorem(30),
                todos: [
                    { txt: 'Driving license', doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                ]
            },
        },
        {
            id: 'n105',
            type: 'NoteTxt',
            isPinned: false,
            style: {
                backgroundColor: 'lightgreen'
            },
            info: {
                title: 'Note 5',
                txt: utilService.makeLorem(50),
            },
        },
        {
            id: 'n106',
            type: 'NoteTodos',
            isPinned: false,
            style: {
                backgroundColor: 'lightseagreen'
            },
            info: {
                title: 'To Do List 3',
                todos: [
                    { txt: 'Driving license', doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                ]
            },
        },
        {
            id: 'n1011',
            type: 'NoteTxt',
            isPinned: false,
            style: {
                backgroundColor: 'white'
            },
            info: {
                title: 'Untitled',
                txt: utilService.makeLorem(30),
            },
        },
        {
            id: 'n1052',
            type: 'NoteTxt',
            isPinned: false,
            style: {
                backgroundColor: 'lightseagreen'
            },
            info: {
                title: 'Note 10',
                txt: utilService.makeLorem(30),
            },
        },
        {
            id: 'n203495',
            type: 'NoteTxt',
            isPinned: false,
            style: {
                backgroundColor: 'lightcyan'
            },
            info: {
                title: 'Note 4',
                txt: utilService.makeLorem(50),
            },
        },
        {
            id: 'n10422',
            type: 'NoteTodos',
            isPinned: false,
            style: {
                backgroundColor: 'lightcoral'
            },
            info: {
                title: 'To Do List 2',
                txt: utilService.makeLorem(30),
                todos: [
                    { txt: 'Driving license', doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                ]
            },
        },
        {
            id: 'n10111',
            type: 'NoteTodos',
            isPinned: false,
            style: {
                backgroundColor: 'lightpurple'
            },
            info: {
                title: 'To Do List 3',
                txt: utilService.makeLorem(10),
                todos: [
                    { txt: 'Driving license', doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                    { txt: utilService.makeLorem(3), doneAt: null },
                ]
            },
        },


    ]
    return notes;
}