import request from 'supertest'
import buildServer from '../server'
import { Pact } from '@pact-foundation/pact'
import path from 'path'

describe('GET /users', () => {
    const MOCK_BOOK_API_PORT = 3001
    const provider = new Pact({
        consumer: 'UserAPI',
        provider: 'BookAPI',
        port: MOCK_BOOK_API_PORT,
        log: path.resolve(process.cwd(), 'logs', 'pact.log'),
        dir: path.resolve(process.cwd(), 'pacts'),
        logLevel: 'INFO',
        spec: 2
    })
    const EXPECTED_BOOKS_RESPONSE = [
        { id: '1', name: 'Book 1' },
        { id: '2', name: 'Book 2' },
        { id: '3', name: 'Book 3' }
    ]

    let app = buildServer(`http://localhost:${MOCK_BOOK_API_PORT}`)

    before((done) => {
        provider.setup()
            .then(() => {
                return provider.addInteraction({
                    state: 'i have a list of books',
                    uponReceiving: 'a request for books',
                    withRequest: {
                        method: 'GET',
                        path: '/books',
                        query: {
                            ids: '1,2,3'
                        },
                        headers: { 'Accept': 'application/json' }
                    },
                    willRespondWith: {
                        status: 200,
                        headers: { 'Content-Type': 'application/json' },
                        body: EXPECTED_BOOKS_RESPONSE
                    }
                })
            })
            .then(() => done())
    })

    it('respond with json', (done) => {
        request(app)
            .get('/users/1')
            .set('Accept', 'application/json')
            .expect(function (res) {
                expect(res.body.id).to.equal('1')
                expect(res.body.name).to.equal('John Doe')
                expect(res.body.favoriteBooks).to.have.lengthOf(3)
            })
            .expect(200, done)
    })
    
    after(() => {
        provider.finalize()
    })
})