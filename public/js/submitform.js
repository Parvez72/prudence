var currentCallback;

// override default browser alert

const reloadPage = ()=>{
    $('modal-close-button').click(()=>{
        location.reload();
    });
    setTimeout(()=>{
        location.reload();
    }, 3000)
};

$('#index-get-quote').validate({
    submitHandler: function(form) {
        const data = {
            username: $('#username').val(),
            email: $('#email').val(),
            mobile: $('#phone').val(),
            message: `
            </p> <p><b>Subject</b> : ${$('#subject').val()} </p>
            <p><b>Text</b> : ${$('#message').val()}`
        };
        if (data.username && data.email && data.mobile) {
            $.post('/submit-quote-request', data, function (res) {
                if (res && res === true) {
                    $('#submitted').modal('show');
                    reloadPage();
                } else {
                    $('#sendmail-failed').replaceWith('<i class="far fa-times-circle" style="color: #d43f3a"></i> Something went wrong, please try again.');
                    $('#submitted').modal('show');
                    reloadPage();
                }
            });
        }
    }
});

$("#modalForm").validate({
    submitHandler: function (form) {
        const data = {
            username:$('#appointment_name').val(),
            email:$('#appointment_email').val(),
            message:$('#appointment_message').val(),
            mobile:$('#appointment_phone_number').val()
        };
        console.log(data, "this is data");
        if(data.username && data.email && data.mobile){
            $.post('/submit-quote-request', data, function (res) {
                if(res && res === true){
                    $('#modalRequest').modal('hide');
                    $('#submitted').modal('show');
                    reloadPage();
                }else{
                    $('#sendmail-failed').replaceWith('<i class="far fa-times-circle" style="color: #d43f3a"></i> Something went wrong, please try again.');
                    $('#modalRequest').modal('hide');
                    $('#submitted').modal('show');
                    reloadPage();
                }
            });
        }
    }
});

// Wait for the DOM to be ready
$("#contactForm").validate({
    submitHandler: function(form) {
        const data = {
           username:$('#username').val(),
           email:$('#email').val(),
           subject:$('#subject').val(),
           message:$('#message').val()
       };
       if(data.username && data.email && data.subject){
           $.post('/submit-form', data, function (res) {
               if(res && res === true){
                   $('#submitted').modal('show');
                   reloadPage();
               }else{
                   $('#sendmail-failed').replaceWith('<i class="far fa-times-circle" style="color: #d43f3a"></i> Something went wrong, please try again.');
                   $('#submitted').modal('show');
                   reloadPage();
               }
           });
       }
        // form.submit();
    }
});
//
// $(document).ready(function () {
//     event.preventDefault();
//    $('#submit-form').click(function () {
//        const data = {
//            username:$('#username').val(),
//            email:$('#email').val(),
//            subject:$('#subject').val(),
//            message:$('#message').val()
//        };
//        console.log(data, "this is data");
//        if(data.username && data.email && data.subject){
//            $.post('/submit-form', data, function (res) {
//                if(res && res === 'true'){
//                    alert('Your details have been send success we will contact within 48 hrs.');
//                }else{
//                    alert('hwew')
//                }
//            });
//        }
//    });
// });

