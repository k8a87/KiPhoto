'use strict';

const navItem = document.querySelectorAll('.nav__item');
const navContainer = document.querySelector('.nav__list');
const gallery = document.querySelector('.gallery');
const faces = document.querySelector('.gallery__faces');
const places = document.querySelector('.gallery__places');

navContainer.addEventListener('click', function (e) {
  e.preventDefault;
  const clicked = e.target;
  console.log(clicked);
  if (e.target.classList.contains('places')) {
    faces.classList.add('hidden');
    places.classList.remove('hidden');
  }
  if (e.target.classList.contains('faces')) {
    places.classList.add('hidden');
    faces.classList.remove('hidden');
  }
});
