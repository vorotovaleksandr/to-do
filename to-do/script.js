var bgcolorlist = ['#ee6a68', '#f279a2', '#5eb3f6', '#67d7e5', '#ffe083' ];
var cb = $('<input type = "checkbox"/>')
$(function(){

   
       $('#Add').click(function(){
        var text = $('#text').val();
        $('#cb').addClass('cbox');
        $('#min').addClass('newBlock');
        $('p').css({
            background: bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]
            });
                 $('#cb').append(cb)
                 $('#min').append(text)
             return;
        }) 
    });
}
    else{
            $('#Add').click(function(){
            var text = $('#text').val();
            $('#cb').addClass('cbox');
            $('#min').addClass('newBlock');
            $('#red').click(function(){
            $('P').addClass ('#red')
            $('#cb').append(cb)
            $('#min').append(text)
                 return;
            }); 
        });
    }