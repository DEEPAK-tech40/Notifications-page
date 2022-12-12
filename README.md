# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

![desktop-preview](https://user-images.githubusercontent.com/94350356/207114889-23451a12-91df-4696-8a82-b196c2230d00.jpg)


### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Desktop-view:

![active-states](https://user-images.githubusercontent.com/94350356/207114925-ba1bbb3d-4e71-4725-a87c-031cf8eb1132.jpg)

Mobile-view:

![mobile-design](https://user-images.githubusercontent.com/94350356/207114975-f44863eb-a47b-4142-af05-af2a8b370520.jpg)


### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/notifications-page-6w0CTFAYMc)
- Live Site URL: [Live Site](https://deepaktech40-notifications-page.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This project was really helpful for practising DOM manipulation using JS.

```js
readBtn.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    const notifyEl = document.querySelector(`.ur${i}`);
    checkAndUpdate(notifyEl, i);
  }
});

for (let i = 0; i < 3; i++) {
  const notifyEl = document.querySelector(`.ur${i}`);
  notifyEl.addEventListener("click", () => {
    checkAndUpdate(notifyEl, i);
  });
}
```

## Author

- Frontend Mentor - [@DEEPAK-tech40](https://www.frontendmentor.io/profile/DEEPAK-tech40)
