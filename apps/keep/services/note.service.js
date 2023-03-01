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
                backgroundColor: '#00d'
            },
            info: {
                txt: 'Fullstack Me Baby!'
            }
        },
        {
            id: 'n102',
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'http://some-img/me',
                title: 'Bobi and Me'
            },
            style: {
                backgroundColor: '#00d'
            }
        },
        {
            id: 'n103',
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Get my stuff together',
                todos: [
                    { txt: 'Driving license', doneAt: null },
                    { txt: 'Coding power', doneAt: 187111111 }
                ]
            }
        }
    ]
    return notes;
}

function _getEmptyNote() {
    const note =
    {
        createdAt: utilService.getCurrDate(),
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: 'gray'
        },
        info: {
            txt: utilService.makeLorem(10),
        }
    }
    return note
}

function addNewNote() {
    return storageService.query(NOTES_KEY).then((notes => {
        const newNote = _getEmptyNote()
        return storageService.post(NOTES_KEY, newNote)
    }))
}