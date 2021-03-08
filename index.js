// add solution here
function theBeatlesPlay(musicians, instruments){
var array = [];
for(var i = 0; i < musicians.lenth; i++){
  array.push(musicians[i] + "plays" + instruments[i]);
}
return array;
}