export const getElement = selector => document.querySelector(selector);
export const getElements = selector => document.querySelectorAll(selector);

export const NAVIGATION = getElement('nav');
export const POSTS = getElement('section');
export const FOOTER = getElement('footer');
export const DIALOG_FORM = getElement('.form');
export const DIALOG_DETAILS = getElement('.details');