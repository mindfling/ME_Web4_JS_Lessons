'use strict';

/* Module03 Lesson07 1st task */
/* task 1 */

const firstName = prompt("Напишите ваше имя?");


function ask() {
  
  const userName = prompt("Напишите ваше имя?");
  const userAge = +prompt("Введите ваш возраст?");

  if (userAge < 20) {
    // userAge < 20
    alert('Привет, Максим');

    //return ;
  } else if (userAge < 45) {
    // 20 <= userAge < 45
    alert('Здравствуй, Максим');
    //return;
  } else {
    // userAge => 45
    alert('Здравствуйте, Максим');
    //return;
  }
}

//запуск
