var bgcolorlist = ['red', 'pinck', 'blue', 'lightBlue', 'yellow'];
var idList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var cbox = ('<input class="checkbox" type="checkbox"/>');
var items = [];
let i = 0;

$('#Add').click(function (e) {
    var randB = Math.floor(Math.random() * bgcolorlist.length);
    var inputValue = $('input[name=text]').val();

    items.push({
        'title': inputValue,
        'id': i,
        'checked': false,
        'color': bgcolorlist[randB]
    });

    $('ol').empty();
    items.map((item) => {
        const checked = item.checked ? 'checked' : '';
        $('ol').append('<li id="' + item.id + '" class="' + item.color + '"><input id="checkId_' + item.id + '" ' + checked + ' class="checkbox" type="checkbox"/>' + item.title + '</li>');
    })

    i++;
});
$('.change-color').on("click", function (e) {
    // var id = $(this).attr("data-id");
    var currentColor = $(e.currentTarget).attr('id');
    items.map((item) => {
        if (item.checked) {
            
        }
    })
    console.log("inputValue", $('input.checkbox'))
    console.log("id", currentColor)
   })
   $(function() {
    $( "#checkId_1" ).on( "click", function() {
        if($("#checkId_1").is(":checked")) {console.log("Вы активировали переключатель"); }
       else {console.log("Вы деактивировали переключатель");}
    })
    });

// $('#red').on("click", function () {
//     console.log('ITEMS', items)
    // items.map((checkbox) => {

    //     $('input:checkbox:checked').each(function () {
    //         cbox.push($(items).val());
    //     });

    //     color.push({
    //         'color': id
    //     });
    // });
// });
