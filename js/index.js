// Your code goes here

// Selectors
const navBar = document.querySelector('.nav-link');
const bodyColor = document.querySelector('body');

// 1. Mouseover
navBar.addEventListener('mouseover', () => {
    navBar.style.backgroundColor = 'black';
    navBar.style.padding = '4px';
    navBar.style.color = 'white';
});

// 2. Keydown
bodyColor.addEventListener('keydown', () => {
    bodyColor.style.backgroundColor = '#E0B39E';
    bodyColor.style.transition = '0.4s'
});

// 3. Drag/Drop
