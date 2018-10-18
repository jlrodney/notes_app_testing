// (function(exports) {
//   class Mock {
//     constructor( methods =[]) {
//       this.list = {}
//       for (var i = 0; i < methods.length; i++) {
//         this.list[methods[i][0]] = methods[i][1];
//       }
//       return this.list;
//     }
//   }
//   exports.Mock = Mock;
// })(this)

const double = (object) => {
  function TheDouble() {

  }

  for (var i = 0; i < Object.keys(object).length; i++){
    TheDouble.prototype[Object.keys(object)[i]] = function (){
      return TheDouble.prototype[Object.values(object)[i]];
    }
  }

  return TheDouble();
}
