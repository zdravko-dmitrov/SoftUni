function timeToWalk(steps, stepsInMeters, speed){
  const distanceMeters = steps * stepsInMeters;
  const speedMeterSec = speed / 3.6;
  const time = distanceMeters / speedMeterSec;
  const rest = Math.floor(distanceMeters / 500);

const timeMin = Math.floor(time / 60);
const timeSec = Math.round(time - timeMin * 60);
const timeHr = Math.floor(time / 3600);

  const hh = timeHr < 10 ? '0' : "" ;
  const mm = timeMin + rest< 10 ? '0' : "";
  const ss = timeSec < 10 ? '0' : "";
  const output = `${hh + timeHr}:${Number(mm) + timeMin + rest}:${ss + timeSec}`
  console.log(output);

}

timeToWalk(4000, 0.60, 5);
//00:32:48