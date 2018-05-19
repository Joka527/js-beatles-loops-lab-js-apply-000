function theBeatlesPlay(musicians, instruments){
  let sentences=[];
  for(let i=0;musicians.length>i; i++){
    let sentence="";
    sentence+=musicians[i]+"plays";
    for(let i=0;instruments.length>i; i++){
       sentence+=instruments[i];
    }
    
    sentences.push(sentence);
  }
  return sentences;
}