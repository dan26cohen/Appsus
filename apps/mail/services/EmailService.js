import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services//util.service.js'
const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' }

const EMAIL_KEY = 'emailDB'


export const EmailService = {
    query,
    // get,
    // remove,
    // save,
    // getEmptyBook,
    // addReview,
    // addGoogleBook

}

const gEmail = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'hello',
        body: 'Would love tasasasasmes',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e103',
        subject: 'love you',
        body: 'Woasdasdtimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    
]

_createEmails()

function query(filterBy = {}) {
    return storageService.query(EMAIL_KEY)
    .then(emails => {
        return emails
    })
}

function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
       
}



function _createEmails() {
    
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {
        emails = gEmail
        utilService.saveToStorage(EMAIL_KEY, emails)
    }
}