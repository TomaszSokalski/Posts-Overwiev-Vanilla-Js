export const getElement = selector => document.querySelector(selector);
export const getElements = selector => document.querySelectorAll(selector);

export const NAVIGATION = getElement('nav');
export const POSTS = getElement('section');
export const FOOTER = getElement('footer');