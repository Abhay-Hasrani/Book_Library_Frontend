const BookUrls = {} 

BookUrls.BASE_URL = process.env.REACT_APP_BASE_URL //http://localhost:8000

//auth
BookUrls.SIGNUP_URL = BookUrls.BASE_URL + "/users/post-user"
BookUrls.LOGIN_URL = BookUrls.BASE_URL + "/auth/token"

export default BookUrls;