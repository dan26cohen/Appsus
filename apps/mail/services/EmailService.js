import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services//util.service.js'
const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' }

const EMAIL_KEY = 'emailDB'


export const EmailService = {
    query,
    get,
    save,
    // remove,
    // save,
    // getEmptyBook,
    // addReview,
    // addGoogleBook

}

const gEmail = [
    {
        id: 'e101',
        subject: 'ebay',
        body: 'Would you want to buy this item now? 120303',
        isRead: false,
        sentAt: 1551183930594,
        removedAt: null,
        from: 'ebay',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'hello',
        body: 'Would love tasasasasmes',
        isRead: false,
        sentAt: 1521333230594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e103',
        subject: 'FINAL SALE UP TO 70% OFF',
        body: 'Switch to LloydsDirect for free prescription delivery or collection at no extra cost to the NHS. Plus, order, track and get reminders for your ',
        isRead: false,
        sentAt: 1551433230594,
        removedAt: null,
        from: 'amazon',
        to: 'user@appsus.com'
    },
    {
        id: 'e104',
        subject: 'כרטיסים למשחק',
        body: 'אני מצרפת לך כרטיסים למשחק כדורגל תבוא מוכן!',
        isRead: false,
        sentAt: 1521433130594,
        removedAt: null,
        from: 'אמא',
        to: 'user@appsus.com'
    },
    {
        id: 'e105',
        subject: 'You have 1 notifications you may not have seen',
        body: 'lianlevi52, see star_baby, taliaguetas and more in your feed',
        isRead: false,
        sentAt: 1551433230594,
        removedAt: null,
        from: 'amazon',
        to: 'instagram'
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
    console.log(emailId);
    return storageService.get(EMAIL_KEY, emailId)
       
}



function _createEmails() {
    
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {
        emails = gEmail
        utilService.saveToStorage(EMAIL_KEY, emails)
    }
}

function save(email) {
    console.log(email);
    if (email.id) {
        return storageService.put(EMAIL_KEY, email)
    } else {
        return storageService.post(EMAIL_KEY, email)
    }
}
