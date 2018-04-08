export default createThing;

function createThing(...args): createThing.Thing {
  return "Hello World"
}

namespace createThing {
  export interface Thing {

  }
}