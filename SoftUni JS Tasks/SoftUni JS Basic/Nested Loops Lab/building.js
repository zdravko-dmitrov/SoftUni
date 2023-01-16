function building(input) {
  let floors = Number(input[0]);
  let roomsPerFloor = Number(input[1]);
 
  for (let curFloor = floors; curFloor > 0; curFloor--) {
    let roomType;
 
    if (curFloor === floors) {
      roomType = "L";
    } else if (curFloor % 2 === 0) {
      roomType = "O";
    } else {
      roomType = "A";
    }
 
    let rooms = "";
    for (let roomIndex = 0; roomIndex < roomsPerFloor; roomIndex++) {
      rooms += `${roomType}${curFloor}${roomIndex} `;
    }
    console.log(rooms);
  }
}
building(["6", "4"]);
