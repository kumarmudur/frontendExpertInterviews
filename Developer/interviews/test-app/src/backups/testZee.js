// Zee

var length = 7;
function pre() {
  console.log(this.length);
}

const object = {
  length: 8,
  method() {
    arguments[0]();
  }
};

object.method(pre, 1, 2);

function post() {

}





