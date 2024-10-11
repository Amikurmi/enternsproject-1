// Select DOM elements
const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const notesList = document.getElementById('notes-list');

// Load saved notes from local storage and display them
document.addEventListener('DOMContentLoaded', loadNotes);

// Event listener for adding a new note
addNoteBtn.addEventListener('click', addNote);

// Function to add a new note
function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText === '') {
        alert('Please write something before adding a note.');
        return;
    }

    // Add note to the list
    const noteItem = createNoteElement(noteText);
    notesList.appendChild(noteItem);

    // Save note to local storage
    saveNoteToLocalStorage(noteText);

    // Clear the input field
    noteInput.value = '';
}

// Function to create a note list item
function createNoteElement(noteText) {
    const li = document.createElement('li');
    li.textContent = noteText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
        removeNoteFromLocalStorage(noteText);
    });

    li.appendChild(deleteBtn);
    return li;
}

// Function to save a note to local storage
function saveNoteToLocalStorage(note) {
    let notes = getNotesFromLocalStorage();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to load notes from local storage
function loadNotes() {
    const notes = getNotesFromLocalStorage();
    notes.forEach(note => {
        const noteItem = createNoteElement(note);
        notesList.appendChild(noteItem);
    });
}

// Function to get notes from local storage
function getNotesFromLocalStorage() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

// Function to remove a note from local storage
function removeNoteFromLocalStorage(noteText) {
    let notes = getNotesFromLocalStorage();
    notes = notes.filter(note => note !== noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
}
