/*
Just some notes to understand the logic needed for border processing
*/


if (vectorShape){
  if (fill && border){

  }
  if (!fill && border){
  var channel = channel(border);
    if (channel != 'mixed'){
      convertToOutlines();
      addToBatch(channel);
    }
  }
  if (fill && !border){

  }
} else [
  alert('Not Vector shape!')
]
