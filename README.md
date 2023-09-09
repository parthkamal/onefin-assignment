# Onefin Assignment - Parth Kamal 


the app can be found here [view](https://onefin-assignment.vercel.app/ "one-fin assignment app here")

## Introduction

Welcome to the React Frontend Assignment! This assignment is an opportunity to showcase your skills in creating a beautiful and functional mobile web interface using React. You have the freedom to choose styling libraries like Material-UI or Bootstrap to enhance the project's aesthetics.

### Assignment Details

To submit your assignment, follow these guidelines:

1. Create a GitHub repository for your project and push your code to it.
2. Share the link to your repository with us.
3. Optionally, you can host your assignment on platforms like Heroku, AWS, or GCP.

You have three days from the time you receive the assignment to complete it. Your project will be evaluated based on the following criteria:

- **Functionality:** Your project should meet all the specified requirements.
- **Design:** Put your creativity into it! Use CSS animations, transitions, and follow best design practices.
- **Coding Best Practices:** Ensure that your code follows industry best practices.
- **Form Validation:** Implement comprehensive form validation with clear error messages.
- **Theme Switching:** Support switching between light and dark themes, persisting the chosen theme even after a page reload.

### Project Details

Your task is to create a visually appealing project that supports user login via a backend REST API. The project should consist of two pages:

### 1. Login Page

Design a login page where users can enter their username and password. This page will call the login API to obtain an access token.

**API Endpoint:**


POST https://demo.credy.in/api/v1/usermodule/login/



**Sample Request:**

```
{
 'username': 'testuser',
 'password': 'v^4!C%CQ94f0'
}
```



**Sample Success Response:**

```
{
    'is_success': False,
    'error': {
        'message': 'Invalid login credentials',
        'code': 'invalid_login_credentials'
    }
}
```


Features to Implement:

1.    Display error messages if the login API fails.
2.   Prevent form submission without filling in both username and password.
3.   Disable the login button while the API call is in progress and re-enable it upon response.
4. Store the token in local storage upon successful login.
5.    Redirect to the movies page after a successful login.
6.   Implement "Enter" key to submit the form.


### 2. Movie page 

Create a paginated movie list page that retrieves and displays movies from an authenticated API. Each movie card should contain an avatar image, title, partial description, and genres.

**API Endpoint:**


***Add header:***

```
{
    "Authorization: ‘Token <token obtained in login API>’
}
 
```




GET https://demo.credy.in/api/v1/maya/movies/

```
{
    “count”: <total number of movies>,
    “next”: <link for next page, if present>,
    “previous”: <link for previous page>,
    “data”: [
        {
            “title”: <title of the movie>,
            “description”: <a description of the movie>,
            “genres”: <a comma separated list of genres, if present>,
		 “uuid”: <a unique uuid for the movie>
        },
        
    ]
}

```



Features to Implement:

1.    Display movie information in a card layout.
2.  Show a circular avatar image obtained from [UI-Avatars Api](https://www.ui-avatars.com/ "Visit ui avatar")

3.   Display the title and a partial description of each movie.
4.    List genres as a comma-separated list.
5.   Handle API failures gracefully with a refresh button.
6.   Implement infinite scroll or pagination for browsing movies.
7.   Clicking a movie card should open a modal with a square UI avatar, full title, description, and genres.
8.   Implement front-end search functionality using RxJS, triggered after 250ms and with a minimum of 3 entered characters.


