const NotesModel = require('./notesModel')


describe('NotesModel', () => {
  it('returns an empty array when the method getNotes is called', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })

  it('returns the added task when addNote is called', () => {
    const model =  new NotesModel();
    model.addNote('Buy milk')
    expect(model.getNotes()).toEqual(['Buy milk']);
  })

  it('returns 2 notes when we call the addNotes method twice', () => {
    const model =  new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the Gym');
    expect(model.getNotes()).toEqual(['Buy milk','Go to the Gym']);
  })

  it('returns an empty array when the reset method is called',() => {
    const model =  new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the Gym');
    model.reset();
    expect(model.getNotes()).toEqual([])
  })

})