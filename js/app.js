$(function(){

    // 'use strict'; //  Работаем в новом режиме старые браузеры могут не поддерживать

    // slider https://kenwheeler.github.io/slick/
    let slider = $('#testSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        fade: true,
        arrows: false,
        dots: true
    });
    var b = '... Read More';
    var string = document.getElementById('test').innerHTML;
    var tt=string.substring(190, string.length - 255 );
    document.getElementById('test').innerHTML = tt + b;
    console.log(2);
    
    const  number = {
        b: 10,
        a: 10,
        name : 'Adam',
        married : false
    };
    number.a = 20;
    console.log(number.name);
    //console.log(number["name"]);

    let arr = [ 1, 'col', [1, 4, 4, 2]];

    console.log(arr[2][1]);

    //=== CONFIRM ===
    // const res = confirm("you are happy?");
    // console.log(res); 

    //=== "+" before PROMPT change typeof 'string' on 'number' ===
    // const age = +prompt('you old 18?', '');
    // console.log(typeof (age)); // output type
    // console.log(age +10); // output number

    //=== document.write ===  old 
    // let answers =[]; //empty mass
    // answers[0] = prompt('what you name');
    // answers[1] = prompt('what you age');
    // answers[2] = prompt('what you female');
    // document.write(answers);
    // console.log(answers);
    
    //=== `` change on "+"=== чтобы не писать всгда плюсы ставим ``
    // const user = 'ivan';
    // console.log(`https://someurl.com/${user}/5`); // `${user}`  ``
    // console.log(`hello ${user}`); //  `` == "+"  don't forget

    //===  difference increment on decrement === не работает как в уроке хз почему
    // let inc = 10,
    //     dec  = 10;
    // console.log(--dec); //output 9
    // console.log(dec--); //output 10 because out 'dec' before 'dec' stay "9"
    // console.log(++inc); //output 11
    // console.log(inc++); //output 10 because out 'dec' before 'dec' stay "11"

    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table 
    // console.log(2*4 == '8'); // true 
    // console.log(2*4 === '8'); // false 

    
    // 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
    // 'Сколько фильмов вы уже посмотрели?'
    // 2) Создать объект personalMovieDB и в него поместить такие свойства:
    //     - count - сюда передается ответ на первый вопрос
    //     - movies - в это свойство поместить пустой объект {} //последовательность не важна
    //     - genres - сюда поместить пустой массив [] //последовательность важна
    //     - privat - в это свойство поместить boolean(логическое) значение false
    // 3) Задайте пользователю по два раза вопросы:
    //     - 'Один из последних просмотренных фильмов?'
    //     - 'На сколько оцените его?'
    // Ответы стоит поместить в отдельные переменные
    // Записать ответы в объект movies в формате: 
    //     movies: {
    //         'logan': '8.1'
    //     }

    //1)   let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    //2)   let personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     genres: [],
    //     privat : false };
    //3)   let film = prompt('Один из последних просмотренных фильмов?', ''),
    //     ratingFilm = prompt('На сколько оцените его?', ''),
    //     film2 = prompt('Один из последних просмотренных фильмов?', ''),
    //     ratingFilm2 = prompt('На сколько оцените его?', '');

    //     personalMovieDB.movies[film] = ratingFilm;
    //     personalMovieDB.movies[film2] = ratingFilm2;
    //     console.log(personalMovieDB.movies);

    // if, else if, else, если написано (num=50) это не знак равнства, а присвоение значения num 50,
    // сравнение (num==50) (num === 50) 
    // '===' и '!==' — проверяет одно значение идентично или не идентично другому. && — И || — ИЛИ

    //=== SWITCH ====    
    // let numba = +prompt('numba','');
    // switch(numba){
    //     case 1: console.log('how do you ?');
    //     break;
    //     default: console.log('default');
    //     break;}

    //=== DO WHILE ==== while(i<=55){console.log(num);num++;}
    // let num = 50;    
    // do{    console.log(num);
    //         num++;}
    // while(num <=55);

    // === FOR, BREAK, CONTINUE === CONTINUE уберет из списка 7, BREAK прекращает весь цикл на 6
    // for (let i=1 ; i<=11; i++){
    //     if(i==6){  break;  || continue; }
    //     console.log(i);  } 

    // 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
    // 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
    // отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
    // возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
//str.LENGTH - и получить её ДЛИНА
    // 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
    // "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
    // "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
    // 4) Потренироваться и переписать цикл еще двумя способами

    // 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
    // false - выводит в консоль главный объект программы    
    // 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
    // "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
    // genres

    let numberOfFilms ;
    function test(){
        numberOfFilms = +prompt('how many you show films', '');
        while(numberOfFilms == null || numberOfFilms == '' || numberOfFilms == isNaN){
            numberOfFilms = +prompt('how many you show films', '');
    }   }
    test();

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        genres: [],
        privat : false
     }; 
    
    function rememberMyFilms(){
        for (let i = 0; i < 2; i++){
            const a = prompt('film name',''),
                  b = prompt('rating','');   
                  
            if (a.length != '' && b.length != '' && a.length != null && b.length != null ){
                personalMovieDB.movies[a] = b; 
                console.log('done');
                
            }else{
                const res = confirm("error name or rating");
                console.log(res); 
                i--;
            }               
        } }
    //  rememberMyFilms();

    function detectPersonalLevel(){
        if (personalMovieDB.count < 10){
            console.log('1');
        }else if(10 < personalMovieDB.count < 30){
            console.log('2');
        }else{
            console.log('3');
        }   }
    //  detectPersonalLevel();
     
    function showMyDB(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }   }
    showMyDB(personalMovieDB.privat);

    function writeYourGenres(){
        for(let i = 0; i <= 2; i++){
            let genre = prompt(`"Ваш любимый жанр под номером ${i+1}`); // i=0 start i=0, could name number =1;
            personalMovieDB.genres[i] = genre; 
        }
    }
    writeYourGenres();

    // ==RETURN===
    // function calc(a, b){
    //     return(a * b);
    //     console.log('не выполнится НИКОГДА после return'); }
    // console.log(calc(10, 20)); console.log(calc(1, 5));

    // способ вызвать функцию  
    // let calc = function(a, b){
    //     console.log (a * b); }
    // calc (5, 1);

    //====SLICE MATH.ROUND PARSEINT===  вывод только с определеного до определенного элемента 
    // let text = 'hello world';
    // console.log(text.slice(5, 11));=======================SLICE
    // let num = 12.2;
    // console.log(Math.round(num));=====================MATH.ROUND
    // let num = '12.2px';
    // console.log(parseInt(num));====PARSEINT, FLOAT с точкой 12.2 

    


    
    
});
