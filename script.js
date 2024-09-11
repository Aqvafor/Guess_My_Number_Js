'use strict';

/*
//Selecting and Manipulating Elements 
// Вначале отобразится текст элемента под классом message
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent); // Теперь отобразится изменненый выше текст 
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 5; // Для инпута используем свойство значение value property
console.log(document.querySelector('.guess').value);
*/



/*
//Handing Click Events
// Event - это когда , чтото происходит на странице, клик наведение нажатие клавиши и т.д.
// У элемента ниде два класса btn click но нам нужен имеено click(ну могло быть любое название но ттут стоит click ) и через него привяжем событие 

// Во второй параметр addEventListener('click', ) мы передаем функция, котора будет выполняться при клике 
// Эта функция будет вызвана только тогда когда произойдет клик
document.querySelector('.check').addEventListener('click', function(){
  // console.log(document.querySelector('.guess').value);
  // Вначале мы пишем число в инпут, затем нажимаем чек и в консоле высветится значение которое мы вписали в инпут
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess); // В инпутах мы всегда получаем string. Поэтому мы преобразуем в число знчение guees

//  Разработка первого сценария когда инпут пустой
if(!guess){ // Если буде 0 или просто щеклнем по кнопке когда инпут будет пустым, то ложь также отображается числом 0 number
  document.querySelector('.message').textContent = 'No number!';
}
}) ;

//Выш мы написали функцию выражения , одинакового формата
const x = function(){
  console.log(23);  
}
*/




/*
// Implementing the Game Logic

// Определяем секртоное число за кликом, так как если его обхъявить там, то при каждом клике оно будет меняться, а нам это н нужно

//Нам нужно число от 0 до 20. Пишем до 20 так как 20*0.99 будет 19, так как отбросится числа после точки  А единицу надо прибавлять так как 0 *0.9 = 0, поэтому и прибавляем единицу 
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc отбросывает числа за точкой
//Отобразим секретно число для нас, чтобы убедиться что все работает правильно
let score = 20; // Значение дом элемента лучше хранить в переменной, так как мы ее сможем легко изменять
// document.querySelector('.number').textContent = secretNumber;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    
    //При выиграше поменяется цвет фона
    document.querySelector('body').style.backgroundColor = '#60b347';
    // И шрифт станет жирнее( я сделал через fontWeight = 'bold') он просто шире его сделал. А ну так надо было изменить ширину контейнера числа
    document.querySelector('.number').style.width = '30rem';
    
        if (score>highscore){
          highscore = score; // Нужно приравнять тут, так как если просто пиать что текст контен равняется, очкам а они всегда обновляются при каждой новой игре поэтому нам это не подойдет
          document.querySelector('.highscore').textContent = highscore;
        }
  } else if (guess > secretNumber) {
    //Прописываем сценарий когда число очков дойдет до 0, ИГра должна быть проиграна
    if (score > 1) { // когда станет 1, то выведется еще ормальноее сообщение. а затем о проигрыше
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
      //Хотя не очень, у него будет прописываться переменная здесь, а у меня через html так что в реальности у него лучше У МЕНЯ НАПИСАНО ЛУЧШЕ Я написал уменьшение очков через дом, он через переменную score
      // document.querySelector('.score').textContent--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }


  } else if (guess < secretNumber) {
    //Прописываем сценарий когда число очков дойдет до 0, ИГра должна быть проиграна
    if (score > 1) { // когда станет 1, то выведется еще ормальноее сообщение. а затем о проигрыше
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

});


////////////////////////
//Coding challenge #1
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  //Score Прописать надо еще, так как прошлое значени попытки остенется, а логика уже будет работать и потом станет меньше попытак
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
})
*/




//Refactoring our code: tthe dry prnciple 

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Создадим функци которая будет менять текстовой контент в элементе класса мэсэдж
// Также написание таких функций упростит понимание кода и повысит его читаемость 
// То есть например displayMessage('Correct Number!'); нам понятно что выводится сообщение 'Correct Number!'
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
} 
const displayScore = function(score){
  document.querySelector('.score').textContent = score;
} 
const displayNumber = function(number){
  document.querySelector('.number').textContent = number;
} 

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!')
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
displayNumber(secretNumber);
    // document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
// Тут не применяем функцию так как, ниже меняется стиль а не цифровое значение 
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Перепишем блок с выше или ниже очками, то есть некоректными, с помощью ернароного условия будет означать число больше или меньше
  }else if (guess !== secretNumber) {
      if (score > 1) {
        // Тернарный оператор работает снизу, так как он возвращает значение 
        // Также здесь можно использовать функцию
displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
        score--;
        displayScore(score);
        // document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game');
        displayScore(0);
        //document.querySelector('.score').textContent = 0;
      }

      }
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When guess is to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
})