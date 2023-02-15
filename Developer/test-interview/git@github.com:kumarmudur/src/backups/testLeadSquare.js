
// abacbtaa - 4 

// LeadsSquare

function countNonRepeatWord(str) {
    let count;

    for (let i = 0; i < str.length; i++) {
      count = 0;
      for (let j = i + 1; j < str.length; j++) {
          if (str[i] !== str[j]) {
            count = count + 1;
          } else {
              break;
          }
      }
    }
    return count;
}


console.log(countNonRepeatWord('abacbtaa'));