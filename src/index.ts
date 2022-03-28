import { Constants } from "./scripts/Constants";

document.addEventListener("DOMContentLoaded", () => {
    const query = document.querySelector.bind(document);
    const create = document.createElement.bind(document);
    let firstDiv: HTMLDivElement =
        query("div:first-child") ||
        query("body").appendChild(create("div"));
    let heading: HTMLHeadingElement = create('h1');
    heading.innerHTML = Constants?.initValue;
    firstDiv.appendChild(heading);
});

