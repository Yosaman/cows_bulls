'use strict'
var n,
    number,
    arr;

class Game {
    
    constructor(value) {
      this.value = value;      
    }
    
    randomNumber() {   
        var numeral,
            i=0;
        arr = [];
        number = '';
        for (var q=0; q<10; q++){
            arr.push(q);
        }
        while (i<this.value){    
        numeral = Math.floor(Math.random()*arr.length);
        number += arr[numeral];    
        arr.splice(numeral, 1);
        i++;
        }
        console.log(number);
        console.log(arr);       
    }
    
    cows_bulls() {
        var cows = 0,
            bulls = 0;
        
        for (var i=0; i<this.value; i++) {
            var id = '#n' + i,
                val = $(id).val(),
                num_arr = [];
           
            if (val == number[i]){ bulls++;}
            else if (number.indexOf(val) != -1) {cows++;}
          
          console.log('val = ' + val + ', number[i] = ' + number[i]);
        }
        $('#bulls_counter').text(bulls);
        $('#cows_counter').text(cows);
    }
    
    create_input() {
        $("input.num").remove();
        for (var j=0; j < this.value; j++) {
          $('#all_num').append('<input type="text" id="n' + j +'" class="num" placeholder="' + (j+1) +'" maxlength="1">');  
        }
    }
}

$('document').ready(function(){
    var new_game;
    $('#sel').change(function(){        
        $('#bulls_counter').text(0);
        $('#cows_counter').text(0);
        
        n = $('#sel').val();
        new_game = new Game(n);
        new_game.create_input();
        new_game.randomNumber();
    }); //  END change
    
    $('#check').click(function(){
        new_game.cows_bulls();
    }); //  END click
}); //  END ready