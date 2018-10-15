function testNoteString() {
  var noteobject = new noteObject("hello");
  stringChecker.isTrue(noteobject.note === "hello" );
};
testNoteString();

function testNoteisString() {
  var noteobject = new noteObject("hello");
  isString(noteobject.note);
};

testNoteisString();


function testNoteListisArray() {
  var noteobject = new noteObject("hello")
  var noteobject1 = new noteObject("goodbye")
  var notelist = new noteList()
  isArray(notelist.list)
}

testNoteListisArray();

// function testNoteListArray() {
//   var notelist = new noteList
//   var noteobject = new noteObject("hello")
//   var noteObject1 = new noteObject("goodbye")
//
// }
