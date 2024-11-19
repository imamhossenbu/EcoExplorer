# Eco-Adventure Experiences

## Project Overview

Eco-Adventure Experiences is a blog website designed to showcase various eco-friendly travel adventures, including mountain treks, ocean dives, wildlife safaris, and more. The website allows users to browse, explore, and consult experts about eco-adventure experiences. Users can also create a profile, login, and register to enhance engagement with the content.

## Live URL

[Eco-Adventure Experiences](https://ecoexplorer-b10-09.netlify.app/)

## Purpose

The purpose of this project is to create an informative and interactive platform where users can explore eco-friendly travel adventures. The website is designed with a winter-themed, division-focused layout, providing users with an engaging experience. It includes features such as user registration, authentication, and dynamic content display using JSON data.

## Key Features

- **User Authentication**: Login, registration, and Google authentication to access private routes.
- **Dynamic Content**: Showcasing various eco-adventure experiences with images, descriptions, and eco-friendly features.
- **Adventure Details**: A detailed page for each adventure, including an expert consultation feature.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop.
- **User Profiles**: Users can view and update their profile information.
- **Password Validation**: Secure password validation during registration.
- **Error Handling**: 404 page with a navigation option to return to the homepage.
- **Social Login**: Google authentication for quick and easy registration or login.
- **Environment Variables**: Firebase configuration is securely handled using environment variables.
- **Dynamic Title**: Each page has a unique title based on its content.

## Tech Stack

### Frontend

- **React.js**: The core library for building the user interface. React.js allows for efficient rendering and state management for dynamic components such as user authentication and adventure details.
- **CSS**: Used for styling the website, including layout, responsiveness, and visual enhancements. Custom CSS was implemented to ensure the site is fully responsive on mobile, tablet, and desktop devices.
- **AOS (Animate On Scroll)**: Used for adding scroll-triggered animations to elements on the page, creating a smooth and engaging user experience.
- **Animate.css**: A CSS library for adding various pre-built animations to elements like buttons, modals, and text, improving the overall interactivity and user engagement.
- **React Router**: Enables the implementation of client-side routing, allowing users to navigate between different pages such as the home page, adventure details, login, and profile sections without page reloads.

### Backend

- **Firebase Authentication**: Used for secure user authentication, enabling users to log in, register, and manage their profiles. Firebase provides a simple and scalable solution for handling user data and authentication via email/password or Google login.
  
### Deployment

- **Netlify**: Used for hosting the website. Netlify offers easy deployment from GitHub and provides continuous integration, making it easy to update the live site with each change pushed to the repository.

### Packages and Libraries

- **Swiper**: A modern mobile touch slider used to create the interactive banner on the home page, showcasing different eco-adventure experiences with smooth transitions.
- **React Toastify**: Used for displaying toast notifications to alert users of errors, such as login failures or unsuccessful registrations.
- **Firebase**: Provides the backend services for user authentication and profile management.
- **React-Router-Dom**: A routing library that enables navigation between different views of the application, ensuring a single-page application experience.

### Other Technologies

- **Environment Variables**: Firebase configuration keys are securely stored and accessed through environment variables, ensuring sensitive information is not exposed in the codebase.
- **Google Meet**: Used for the "Talk with Expert" feature, allowing users to consult with adventure experts based on availability.

## NPM Packages Used

- `react-router-dom`: For routing between pages.
- `firebase`: For user authentication and profile management.
- `swiper`: For creating the banner image slider.
- `aos`: For scroll animations.
- `animate.css`: For various animations on the page.
- `react-toastify`: For showing toast messages on errors.