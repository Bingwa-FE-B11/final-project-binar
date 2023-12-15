//  API Endpoint
export const API_ENDPOINT = {
  // USERS
  USER_LOGIN: '/users/login', // [POST] Login User
  USER_REGISTER: '/users/register', // [POST] Register User
  VERIFY_OTP: '/users/verify-otp', // [PUT] Verify OTP User
  RESEND_OTP: '/users/resend-otp', // [PUT] Resend OTP User
  FORGET_PASS: '/users/forget-password', // [POST] Forgot Password
  UPDATE_PASS: '/users/update-password', // [PUT] Update Password
  CHANGE_PASS: '/users/change-password', // [PUT] Change Password
  AUTH_USER: '/users/authenticate', // [GET] Get User by Authenticate

  // GOOGLE
  GOOGLE: '/users/google', // [GET] Login User With Google
  GOOGLE_CALLBACK: '/users/google/callback', // [GET] Google Callback

  // USER PROFILE
  UPDATE_PROFILE: '/user-profiles/update-profile', // [PUT] Edit User by Authenticate

  // CATEGORIES
  CREATE_CATEGORY: '/categories', // [POST] Create Category
  GET_ALL_CATEGORIES: '/categories', // [GET] Get All Categories
  UPDATE_CATEGORY: '/categories/{categoryId}', // [PUT] Update Category by ID
  DELETE_CATEGORY: '/categories/{categoryId}', // [DELETE] Delete Category by ID

  // COURSES
  CREATE_COURSE: '/courses', // [POST] Create Course
  GET_ALL_COURSES: '/courses', // [GET] Get All Courses
  UPDATE_COURSE: '/courses/{courseId}', // [PUT] Update Course by ID
  GET_COURSE: '/courses/{courseId}', // [GET] Get Course by ID
  DELETE_COURSE: '/courses/{courseId}', // [DELETE] Delete Course by ID

  // CHAPTERS
  CREATE_CHAPTER: '/chapters', // [POST] Create Chapter
  GET_ALL_CHAPTERS: '/chapters', // [GET] Get All Chapter
  GET_CHAPTER: '/chapters/{chapterId}', // [GET] Get Chapter by ID
  UPDATE_CHAPTER: '/chapters/{chapterId}', // [PUT] Update Chapter by ID
  DELETE_CHAPTER: '/chapters/{chapterId}', // [DELETE] Delete Chapter by ID
};
