import rp from 'request-promise-native'

export default class BookService {
    constructor(bookServiceUrl) {
        this.bookServiceUrl = bookServiceUrl
    }

    async getBooks(...ids)  {
        return await rp({
            url: this.bookServiceUrl + '/books',
            qs: { ids: ids.join(',') },
            json: true
        })
    }
}