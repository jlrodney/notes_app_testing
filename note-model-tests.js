describe('Note model', function() {
  it ('should create a string', function() {
    var notey = new noteObject("hello", 0)
    instanceChecker.isTrue(notey.note === "hello")
  });

  it('should create a note which returns a string', function() {
    var notey = new noteObject("hello", 0)
    isString(notey.note)
  })

  it('should return a string when returnText is called', function() {
    var notey = new noteObject("hello", 0)
    instanceChecker.isTrue(notey.returnText() === "hello")
  })

  it('should have an id', function() {
    var notey = new noteObject("hello", 0)
    instanceChecker.isTrue(notey.id === 0)
  })
})






// function testNoteListArray() {
//   var notelist = new noteList
//   var noteobject = new noteObject("hello")
//   var noteObject1 = new noteObject("goodbye")
//
// }
