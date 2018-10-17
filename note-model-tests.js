(function(exports){
  function testNoteString() {
    var noteobject = new noteObject("hello");
    stringChecker.isTrue(noteobject.note === "hello" );
  };

  function testNoteisString() {
    var noteobject = new noteObject("hello");
    isString(noteobject.note);
  };

  function testreturnText() {
    var noteobject = new noteObject("hello");
    stringChecker.isTrue(noteobject.returnText() === "hello");
  };

  testNoteisString();
  testreturnText();
  testNoteString();
})(this);





// function testNoteListArray() {
//   var notelist = new noteList
//   var noteobject = new noteObject("hello")
//   var noteObject1 = new noteObject("goodbye")
//
// }
