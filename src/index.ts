import { Constants } from './scripts/Constants';

document.addEventListener('DOMContentLoaded', () => {
    let firstDiv: HTMLDivElement = document.querySelector('div:first-child');
    firstDiv.innerHTML = Constants?.initValue;
});