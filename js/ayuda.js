// generate a random Number
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return an String depending on the distances 
let getDistanceHint = distance => {
  if (distance < 30) {
    return "Demasiado cerca!!";
  } else if (distance < 40) {
    return "Muy cerca";
  } else if (distance < 60) {
    return "Cerca";
  } else if (distance < 100) {
    return "Te hacercas";
  } else if (distance < 180) {
    return "Lejos";
  } else if (distance < 360) {
    return "Sigues lejos";
  } else {
    return "Estas muy muy lejos";
  }
}
