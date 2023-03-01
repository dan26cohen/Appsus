import { utilService } from './util.service'
import { storageService } from './async-storage.service'

const NOTES_KEY = 'notesDB'

export const noteService = {

}
_createNotes()

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

function getEmptyNote() {
    const note =
    {
        id: utilService.makeId(4),
        createdAt: ,
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            txt: 'Fullstack Me Baby!'
        }
    }
    return note
}