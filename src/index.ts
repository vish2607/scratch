import { Constants } from "./scripts/Constants";

document.addEventListener("DOMContentLoaded", () => {
    const [query, create] = [document.querySelector.bind(document), document.createElement.bind(document)];
    let firstDiv: HTMLDivElement =
        query("div:first-child") ||
        query("body").appendChild(create("div"));
    let heading: HTMLHeadingElement = create('h1');
    heading.innerHTML = Constants?.initValue;
    firstDiv.appendChild(heading);
});

