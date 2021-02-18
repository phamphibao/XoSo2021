$(document).ready(function () {
    console.log('alo alo Bạn ơi!!');
    var name = 'Giải Bảy';
    $('#prize').html(name);

    $('#form_number').submit(function (e) {
        e.preventDefault();
        var max = 9000;
        var min  = 1000;
        var result = Math.floor((Math.random() * max) + min);
            // localStorage.setItem(result, result);
        var item = localStorage.getItem(result) 
        if(item === null){
            localStorage.setItem(result, result);
        }else{
            console.log('da ton tai, va xoa item ' + result);
            localStorage.removeItem(result);
        }
        var number = localStorage.getItem(result)
        if(number != null){
            $("#result").append('<b style="font-size:70px" class="ml-5">' + number + "</b> ");
        }
        
        // localStorage.clear();
    });

   
});