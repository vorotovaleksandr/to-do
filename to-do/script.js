var bgcolorlist = ['#ee6a68', '#f279a2', '#5eb3f6', '#67d7e5', '#ffe083' ];
$(function(){
    $('#Add').click(function(){
        var text = $('#text').val();
            $('h1').addClass('toDo').css({
                background: bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]
            });
            $('h1').text(text)
            return;
        }); 
    });
