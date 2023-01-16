function worldRecord(input){
 
  let worldRecord= Number(input[0]);
  let distance= Number(input[1]);
  let time= Number(input[2]);

  let timeIvan=distance*time;
  let timeAdd=Math.floor(distance/15)*12.5;
  let timeTotalIvan=(timeIvan+timeAdd)


 //console.log(timeTotalIvan)

  if (timeTotalIvan<worldRecord){
      console.log(`Yes, he succeeded! The new world record is ${(timeTotalIvan).toFixed(2)} seconds.`);
  }

if (timeTotalIvan>=worldRecord){
  let result=timeTotalIvan-worldRecord
  console.log(`No, he failed! He was ${(result).toFixed(2)} seconds slower.`);
}

}


worldRecord(["55555.67","3017","5.03"]);
