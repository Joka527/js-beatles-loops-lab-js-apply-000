function theBeatlesPlay(musicians, instruments){
  let sentences=[];
  for(let i=0;musicians.length>i; i++){
    let sentence="";
    sentence+=musicians[i]+" plays "+instruments[i];
    sentences.push(sentence);
  }
  return sentences;
}

// function johnLennonFacts(arrayArgs){
//   let arrayWithEx=[];
//   for(let i=0; arrayArgs.length>i; i++){

//   }
//   return 
// }