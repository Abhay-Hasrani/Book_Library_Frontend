const BookUrls = {} 

BookUrls.BASE_URL = process.env.REACT_APP_BASE_URL //http://localhost:8000

//auth
BookUrls.SIGNUP_URL = BookUrls.BASE_URL + "/users/post-user"
BookUrls.LOGIN_URL = BookUrls.BASE_URL + "/auth/token"

//books
BookUrls.BOOKS_URL = BookUrls.BASE_URL + "/books"
BookUrls.POST_BOOK_URL = BookUrls.BOOKS_URL + "/post-book"
BookUrls.BOOK_URL = BookUrls.BASE_URL + "/books/" // (+ bookId) add book id parameter

//request
BookUrls.REQUESTS_URL  = BookUrls.BASE_URL + "/requests"
BookUrls.POST_REQUEST_URL  = BookUrls.REQUESTS_URL + "/post-request"
BookUrls.PUT_REQUEST_STATUS_URL  = BookUrls.REQUESTS_URL + "/put-request-status"


export default BookUrls;