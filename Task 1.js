let customNumber=+prompt('Введите значение');

if (typeof customNumber === 'number' && !isNaN(customNumber)) {
  if (customNumber%2===0){
  console.log('Число четное')}
  else if (customNumber%2!==0){
  console.log('Число нечетное')}
}

else {console.log('Упс кажется вы ошиблись')}