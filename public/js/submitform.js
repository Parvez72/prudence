var currentCallback;

// override default browser alert
$(document).ready(function () {
   $('#submit-form').click(function () {
       const data = {
           username:$('#username').val(),
           email:$('#email').val(),
           subject:$('#subject').val(),
           message:$('#message').val()
       };
       console.log(data, "this is data");
       if(data.username && data.email && data.subject){
           $.post('/submit-form', data, function (res) {
               if(res && res === 'true'){
                   alert('Your details have been send success we will contact within 48 hrs.');
               }else{
                   alert('hwew')
               }
           });
       }
   });
});

