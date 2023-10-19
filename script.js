function clicked() {
  var button = document.getElementById('clicked');
  var currentDate = new Date();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = currentDate.toLocaleDateString(undefined, options);
  var $h2_1 = document.getElementById('joined');
  var $h2_2 = document.getElementById('subscribed');
  button.innerHTML = 'Subscribed on ' + formattedDate;
  $h2_1.innerHTML = 'Joined !';
  $h2_2.innerHTML = 'Subscribed !';
}
