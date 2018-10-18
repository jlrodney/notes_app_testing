describe('Single note view', function() {
  function MockNote() {}
  MockNote.prototype.returnText = function() {
    return 'Hello mockNote'
    console.log("hello mocknote single note view")
  }
  var mockNote = new MockNote();
   var singleNoteView = new SingleNoteView(mockNote);
   it('can instatiate single note view object', function() {
     var assert = new Assert()
    assert.isTrue(singleNoteView instanceof SingleNoteView)
  });
   it('returns a string of HTML', function() {
     var assert = new Assert()
    assert.isTrue(singleNoteView.noteString() === '<div>Hello mockNote</div>')
  })
})
