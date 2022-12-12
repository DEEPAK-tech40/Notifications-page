# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This project was really helpfull for practising DOM manipulation usin JS.

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
