import { Constants } from "./scripts/Constants";
import { someName } from "./scripts/index.js";

document.addEventListener('DOMContentLoaded', () => {
    let firstDiv: HTMLDivElement = document.querySelector('div:first-child');
    firstDiv.innerHTML = Constants?.initValue;
});

let s = new someName();
s.callMe("karan", "vishal");
