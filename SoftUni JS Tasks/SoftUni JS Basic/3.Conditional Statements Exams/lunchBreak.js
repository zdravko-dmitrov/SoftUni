function lunchBreak(input)
{
  let movieName = input[0];
  let epizodeDuration = Number(input[1]);
  let breakDuration = Number(input[2]);

  let lunchTime = (1 / 8) * breakDuration;
  let freeTime = (1 / 4) * breakDuration;

  let busyTime = lunchTime + freeTime;
  let timeLeft = breakDuration - busyTime;

  if(timeLeft >= epizodeDuration)
  {
    let timeAfterMovie = timeLeft - epizodeDuration;
    console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeAfterMovie)} minutes free time.`)
  }
else
{
  let timeNeeded = epizodeDuration - timeLeft;
  console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
}

}
lunchBreak(["Game of Thrones","48","60"])
