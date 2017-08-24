$('.clear__button').on('click',function(){
        $('#order-form')[0].reset();
  });

var submitForm = function (e) {
    e.preventDefault();
    console.log(e);

    var form = $(e.target),
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


$('#order-form').validetta({

     display : 'inline',
     bubblePosition: 'top',
     bubbleGapLeft: 20, 
     bubbleGapBottom: 40,
     onValid : submitForm,
});

// if onValid(true) {
// $('#order-form').on('submit', (e)=>{e.preventDefault();});
// };