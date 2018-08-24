$(document).ready(function(){

$('input[type=submit]').prop('disabled', true);

//Creating a div and adding to the body

    $('<div></div>').appendTo('body');

// Adding Event listener to Alert Text

$('#textField').keyup(function(){
    if ($('#textField').val() == "") {
        $('input[type=submit]').prop('disabled', true);

    } else{
        $('input[type=submit]').prop('disabled', false);
    }
})

//Appending text to the DIV 

$('#btnSubmit').click(function(){

    let item = '<h2>' + $('#textField').val() + '</h2>';
    $('div').append(item);

})















})