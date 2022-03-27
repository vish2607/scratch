import { Constants } from "./scripts/Constants";

document.addEventListener("DOMContentLoaded", () => {
    const query = document.querySelector.bind(document);
    let firstDiv: HTMLDivElement =
        query("div:first-child") ||
        query("body").appendChild(document.createElement("div"));
    firstDiv.innerHTML = Constants?.initValue;
});

