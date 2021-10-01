import { Person } from './person.js';

let p = new Person('Bo', 'Ede');

/**
 * @type {HTMLElement}
 */
const el = document.querySelector('#message');
el.innerText = p.greet();
