const bgcolorlist = ['red', 'pinck', 'blue', 'lightBlue', 'yellow'];
const items = [];
let checkedChecks = [];
let i = 0;

$('#Add').click(function () {
    const randB = Math.floor(Math.random() * bgcolorlist.length);
    const inputValue = $('input[name=text]').val();
    if(inputValue !=0)
    {items.push({
        'title': inputValue,
        'id': i,
        'color': bgcolorlist[randB]
    });
    $('ol').empty();
    test();
    i++
    $(function () {
        $(".checkbox").on("click", function (e) {

            const currentId = $(e.currentTarget).attr('id').replace('checkId_', '');

            if ($(this).is(":checked")) {
                $('.change-color').on("click", function (a) {
                    const currentColor = $(a.currentTarget).attr('id');
                    items.map((item) => {
                        if (item.id == currentId) {
                            item.color = currentColor
                        }
                    })
                    { $('.checkbox:checked').parent().removeClass().addClass(currentColor); };
                })
            };
        });

$("#text").val('');
    });
    ;}else {alert("Input field is empty")}
})
const test = () => {
    items.map((item) => {
        $('ol').append('<li id="' + item.id + '" class="' + item.color + '" >' + '<input type="checkbox" class="checkbox" id="checkId_' + item.id + '"/>' + item.title + '</li>');
    });
}
