$( document ).ready(function() {
    $(".js-form").submit(function(){
        var form = $(this);
        var error = false;
        form.find('.js-input').each( function(){
            emailRegEx = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
            if ($(this).val() == '') {
                $(this).addClass('error');
                error = true;
            }
        });
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: 'action.php',
                dataType: 'text',
                data: data,
                beforeSend: function(data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data){ 
				$('.js-form').css({'display':'none'}); 
				$('.after-form').css({'display':'block'}) 
				},
                error: function (xhr, ajaxOptions, thrownError) {
                    //console.log(xhr.status);
                    //console.log(thrownError);
                },
                complete: function(data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }

            });
        }
        return false;
    });
    var thumb=document.getElementsByClassName("sing-up")[0];
    thumb.onmouseover=function(){thumb.className="sing-up show";};
    var close=document.getElementById("close");
    close.onclick=function(){thumb.className="sing-up";};
});



