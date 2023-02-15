
const entry = {
    a: {
      b: {
        c: {
          dd: 'abcdd',
        },
      },
      d: {
        xx: 'adxx',
      },
      e: 'ae',
    },
  };

// {
//   'a.b.c.dd': 'abcdd',
//   'a.d.xx': 'adxx',
//   'a.e': 'ae',
// };
let result = {};


function convertObject(o) {
    for (let key in o) {
      if (typeof o[key] === 'object') {
        result[o[key]] = o[key] + '.' + convertObject(o[key]);
      } else {
        result[o[key]] = o[key];
      }
    }
    return result;
}

 console.log(convertObject(entry));
