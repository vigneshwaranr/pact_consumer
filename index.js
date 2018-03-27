import buildServer from './app/server'

let app = buildServer(process.env.BOOK_API_URL)
app.listen(process.env.USER_API_PORT, () => { console.log(`User API started on port ${process.env.USER_API_PORT}`) })