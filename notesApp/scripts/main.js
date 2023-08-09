import App from "./app.js";
// import NotesAPI from "./notesApi.js";

const root = document.getElementById("app");
const app = new App(root);

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = Array.from(popoverTriggerList).map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
