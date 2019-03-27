var bgcolorlist = ['red', 'pinck', 'blue', 'lightBlue', 'yellow'];

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

            $('li').last().addClass('newBlock');
            $('li').last().addClass(bgcolorlist[rand]);

            items.push({
                'title' : toAdd,
                'id' : rand,
                'checked' : false,
                'color' : bgcolorlist[rand]
            })
            items.map((item) => {
                console.log('TITLES', item.title)
                $('ol').append('<li>'+cbox+item.title+'</li>');
            })
                console.log('rewrer', items)
        }
    )
    $('.change-color').on("click", function(e) {
        // var id = $(this).attr("data-id");
        console.log('id', $(e.currentTarget).attr('id'))   
        // $('li').addClass(id);
    })