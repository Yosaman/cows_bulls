 var i=0,
     n,
     numeral,
     arr=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
     number = '';
    
    function randomNumber(b) {
    while (i<b){
    numeral = Math.floor(Math.random()*arr.length);
    number += arr[numeral];    
    arr.splice(numeral, 1);
    i++;
    }
    console.log(number);
    console.log(arr);    
    }


$('document').ready(function(){
    
    $('#sel').change(function(){
    $("input.num").remove()
    n = $('#sel').val();    
    for (var j=0; j < n; j++) {
      $('#all_num').append('<input type="text" id="n' + j +'" class="num" placeholder="' + (j+1) +'" maxlength="1">');  
    }
    randomNumber(n);
    $('#sel').attr('disabled', 'true');
    }); // end change sel
    
    
    $('#check').click(function(){
        var cows = 0,
            bulls = 0;
        
        for (var i=0; i<n; i++) {
            var id = '#n' + i,
                val = $(id).val(),
                num_arr = [];
           
            if (val == number[i]){ bulls++;}
            else if (arr.indexOf(val) != -1) {}
            else {cows++;}
          
          console.log('val = ' + val + ', number[i] = ' + number[i]);
        }
        $('#bulls_counter').text(bulls);
        $('#cows_counter').text(cows);
        console.log('bulls = ' + bulls + ', cows = ' + cows);
      
      if ($('#bulls_counter').text() == n) {$('#new_game').css('display', 'block');}
      else {$('#new_game').css('display', 'none');}
    }); // end click check
  
  
   $('#new_game').click(function(){
     location.reload();
   }); // end click new_game
  
}); // end ready
