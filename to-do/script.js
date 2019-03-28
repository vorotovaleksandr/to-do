var bgcolorlist = ['red', 'pinck', 'blue', 'lightBlue', 'yellow'];
var randId =[1,2,3,4,5,6,7,8,9];
var cbox = ('<input type = "checkbox" id="cb"/>');
    // $(function(){
    //     // $('#Add').click(
    //     //     function(){
    //     //         var toAdd = $('input[name=text]').val();
    //     //         $('ol').append('<li>'+cbox+toAdd+'</li');
    //     //         $('li').addClass('newBlock');
                
    //     //     }
    //     // )
    // });

    var items = []
        //get title from input
        //add unique id
        //color
        //отрисовать айтемы
    $('#Add').click(
        function(e){
            var rand = Math.floor(Math.random() * bgcolorlist.length);
            var toAdd = $('input[name=text]').val();
            var randI = Math.floor(Math.random() * randId.length);
            
            $('li').last().addClass('newBlock');
            $('li').last().addClass(bgcolorlist[rand]);

            items.push({
                'title' : toAdd,
                'id' : randI,
                'checked' : false,
                'color' : bgcolorlist[rand]
            })
            
            items.map((item) => {
            $('ol').append('<li>'+cbox+item.title+'</li>');
            })
                console.log('newItems', items)
            })
            $('cbox').click(function(){
                if(cbox)'checked'(true)
                $('li').last().addClass(color)
            });

            
    $('.change-color').on("click", function(e) {
                var id = $(this).attr("data-id");
            console.log('id', $(e.currentTarget).attr('id'))   
             $('li').addClass(id);
                items.push({
             'color' : id,
            })
            })
    $('#red').on("click" , function() {
                items.map((checkbox) => {

             $('input:checkbox:checked').each(function() {
                cbox.push($(items).val());
            });
              
             color.push({
             'color' : id        
            })
            })
    })