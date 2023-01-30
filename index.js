const NotesModel = require('./notesModel')


const note = new NotesModel()
note.addNote('This is a note for Nadia, I have fun pairing with you today!')
console.log(note.getNotes())

console.log('The notes app is running!!!!')
