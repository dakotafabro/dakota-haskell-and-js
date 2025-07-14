import { greet } from "./lib/greet.js";

//* Things to remember
// use const & Object.freeze() for immutability
// keep functions pure (no side effects)
// think of how to test functions while implementing
// okay and expected to use docs and online resources
// ?? Appropriate uses for AI during this exercise?
// assign types in var names and initial values
// use functions to return an object (avoid classes)
// lean on higher order functions - map(), reduce(), filter()
// abstraction when necessary
// handle null values
// demonstrate & verbalize thought process
// */

//* TODO
// 60 floors
// call btn
// internal floor numbers
// if elevator reaches floors 1 or 60, direction flips
// floor order: obj
//
// */

const FLOORS = Array(60);

const callElevator = (floorNum) => {
  FLOORS[floorNum] = true;
};

const moveElevator = (elevatorObj) => {
  if (elevatorObj.currentFloor === 59 && elevatorObj.directionStr === "up") {
    elevatorObj.directionStr = "down";
    FLOORS[elevatorObj.currentFloor] = false;
    FLOORS.reverse();
  }

  if (elevatorObj.currentFloor === 0 && elevatorObj.directionStr === "down") {
    elevatorObj.directionStr = "up";
    FLOORS[elevatorObj.currentFloor] = false;
    FLOORS.reverse();
  }

  // how the elevator stops
  FLOORS.map((floor, index) => {
    if (elevatorObj.currentFloor === index) {
      elevatorObj.isMoving = false;
      FLOORS[elevatorObj.currentFloor] = false;
    } else {
      // continue on to next floor (next item that is true in FLOORS)
      // need a way to move to the next "true" index
    }
  });

  // TODO: logic for checking if elevator is moving and someone calls elevator

  return elevatorObj.currentFloor;
};

const ELEVATOR = (directionStr, currentFloorNum, isMovingBool) => {
  return {
    direction: directionStr,
    currentFloor: currentFloorNum,
    isMoving: isMovingBool,
  };
};

const elevator1 = ELEVATOR("up", 0, true);
console.log("before", elevator1);

callElevator(4);
moveElevator(elevator1);

console.log(elevator1);
