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
    console.log(number["name"]);

    let arr = [ 1, 'col', [1, 4, 4, 2]];

    console.log(arr[2][1]);

    //=== confirm ===
    // const res = confirm("you are happy?");
    // console.log(res); 

    //=== "+" before prompt change typeof 'string' on 'number' ===
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
    
    //=== `` change on "+"===
    // const user = 'ivan';
    // console.log(`https://someurl.com/${user}/5`); // `${user}`  ``
    // console.log(`hello ${user}`); //  `` == "+"  don't forget

    //===  difference increment on decrement ===
    // let inc = 10,
    //     dec  = 10;
    // console.log(--dec); //output 9
    // console.log(dec--); //output 10 because out 'dec' before 'dec' stay "9"
    // console.log(++inc); //output 11
    // console.log(inc++); //output 10 because out 'dec' before 'dec' stay "11"

    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table  table operation
    // console.log(2*4 == '8'); // true 
    // console.log(2*4 === '8'); // false 

    let bb = "banana";
    let bb = "banana";
});
