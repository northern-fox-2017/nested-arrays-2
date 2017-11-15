'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0] ],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19] ],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0] ]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format (nestedArray,arr = []) {
  // let arr = []
  // for(let i = 1; i < roster.length;i++){
  //   let rosterObj = {}
  //   for(let j = 0; j < roster[i].length;j++){
  //     rosterObj[roster[0][j]] = roster[i][j]
  //   }
  //   arr.push(rosterObj)
  // }
  // return arr
  let rosterObj = {}
  let i = 0
  while(i < roster[0].length){
    rosterObj[roster[0][i]] = roster[1][i]
    i++
  }
  console.log(nestedArray)
  arr.push(rosterObj)
  console.log(arr)
  var a = nestedArray.splice(1,1)
  console.log(a)
  console.log(nestedArray)
  if(roster.length == 1){
    return arr
  }
  else{
    return convert_roster_format(nestedArray,arr)
  }
}

let object_roster = convert_roster_format(roster)
console.log(object_roster)

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

// console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

module.exports = {
  convert_roster_format
}
