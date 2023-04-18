function foreignLanguages(index){
  if(index == 'USA' || index == 'England'){
    console.log('English');
  }
  else if(index == 'Spain' || index == 'Argentina' || index == 'Mexico'){
    console.log('Spanish');
  }
  else{
    console.log('unknown');
  }

}
foreignLanguages('Germany');