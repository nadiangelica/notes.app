class NotesModel {
  constructor() {
    this.notes = [];
  }

  addNote(task) {
    this.notes.push(task)
  }

  reset() {
    return this.notes = [];
  }

  getNotes() {
    return this.notes;
  }
}


module.exports = NotesModel;