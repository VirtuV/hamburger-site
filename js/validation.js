$('.clear__button').on('click',function(){
        $('#order-form')[0].reset();
  });

var submitForm = function (ev) {
    ev.preventDefault();
    console.log('in form');

    var form = $(ev.target),
    url = form.attr('action'),
    data = form.serialize();

var request = $.ajax({
    type: 'POST',
    data: data,
    url: url,
    dataType: 'HTML'
});

request.done(function(){
    alert('Thank you!');
});

request.fail(function(jqXHR, textStatus) {
    alert('Request failed:' + textStatus);
});

};


// $('#order-form').validetta({

//      display : 'inline',
//      bubblePosition: 'top',
//      bubbleGapLeft: 20, 
//      bubbleGapBottom: 40,
//      onValid : function(){
//          $('#order-form').trigger(submitForm);
//      },
// });

// if onValid(true) {
$('#order-form').on('submit', submitForm);
// };