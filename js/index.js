// Your code goes here

// Selectors
const navBar = document.querySelector('.nav-link');
const bodyColor = document.querySelector('body');
const bannerPhoto = document.querySelector('.intro img');
const letsGoPhoto = document.querySelector('.content-section img')
const adventurePhoto = document.querySelector('.inverse-content .img-content');

// Form Created
const navBox = document.querySelector('.nav-container')
const form = document.createElement('form');
navBox.appendChild(form)

const formBox = document.querySelector('form');
const inputBox = document.createElement('input');
formBox.appendChild(inputBox)

const inputSelector = document.querySelector('input')

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

// 4. Scroll
window.addEventListener('scroll', () => {
    letsGoPhoto.style.transform = 'scale(1.4)';
});

// 4. Drag/Drop
bannerPhoto.addEventListener('drag', (event) => {
    bannerPhoto.style.opacity = '0.5';
});

// 5. Load
window.addEventListener('load', () =>{
    alert('Welcome to our page! Enjoy your stay.')
});

// 6. Focus
inputSelector.addEventListener('focus', () => {
    inputSelector.style.backgroundColor = 'pink';
});