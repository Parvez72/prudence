let dayMapping = {
    "Mon" : "MONDAY",
    "Tue" : "TUESDAY",
    "Wed" : "WEDNESDAY",
    "Thu"   : "THURSDAY",
    "Fri" : "FRIDAY",
    "Sat" : "SATURDAY",
    "Sun" : "SUNDAY"
};
let date = new Date();
let latestDay =  new Date(date.getFullYear()+'/'+(date.getMonth()+1)+'/27').toString().split(" ")[0];

$('.calendar-left').animate({
        backgroundColor:'#dc3545'
    }, 3000)
$('.day').text(dayMapping[latestDay]);
$('#tax-date').text('Last Date for Filing Income Tax ');
$('#tax-date').css("font-weight","bold");




