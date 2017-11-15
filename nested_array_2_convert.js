'use strict'

var roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray) {
  let arr = [], obj = {},
      row = roster.length,
      col = roster[0].length

  for (let i = 1; i < row; i++) {
    obj = {}
    for (let j = 0; j < col; j++) {
      obj[roster[0][j]] = roster[i][j];
    }
    arr.push(obj)
  }

  return arr;
}

// convert_roster_format(roster)

let object_roster = convert_roster_format(roster)
console.log(object_roster[2])
// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[roster[0].length])
// => { Number: 22,  Name: 'MK DiBoux ',  Position: 'Small Forward ',  'Points per Game': [ 11, 0, 23, 17, 0 ] }

console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

module.exports = {
  convert_roster_format
}
