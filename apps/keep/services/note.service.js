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
    if (note.id) {
        console.log('note saved', note)
        return storageService.put(NOTES_KEY, note)
    } else {
        return storageService.post(NOTES_KEY, note)
    }
}


function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = _getNotes()
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}

function _getNotes() {
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
                url: 'http://some-img/me',
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
            info: {
                title: 'Note 3',
                txt: 'bla bla bla bla',
                todos: [
                    { txt: 'Driving license', doneAt: null },
                    { txt: 'Coding power', doneAt: 187111111 }
                ]
            }
        }
    ]
    return notes;
}

function getEmptyNote(txt, title) {
    const note =
    {
        createdAt: utilService.getCurrDate(),
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: 'white',
        },
        info: {
            title,
            txt,
        }
    }
    return note
}

function addNewNote(txt, title) {
    return storageService.query(NOTES_KEY).then((notes => {
        const newNote = getEmptyNote(txt, title)
        return storageService.post(NOTES_KEY, newNote)
    }))
}

function paintNote(noteId, color) {
    return storageService.query(NOTES_KEY).then((notes => {
        const idx = notes.findIndex(note => note.id === noteId)
        console.log('noteId,color', noteId, color)
        notes[idx].style.backgroundColor = color
        return storageService.put(NOTES_KEY, notes[idx])
    }))
}

