var rdesc = ''

var h2 = document.getElementById('clock');

// display current time by the second
var currentTime = setInterval(function(){
	var date = new Date();

	var hours = date.getHours();
	// var hours = date.getHours();

	var minutes = date.getMinutes();

	var seconds = date.getSeconds();

	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';



	h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds)

},1000);


/*functions to get hour, min, secs,
  am or pm, add zero, set alarm time, clear alarm
*/

function addZero(time) {

		return (time < 10) ? "0" + time : time;

}

function hoursMenu(){

	var select = document.getElementById('alarmhrs');
	var hrs = 23

	for (i=0; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);

	}
}
hoursMenu();

function minMenu(){

	var select = document.getElementById('alarmmins');
	var min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();

function secMenu(){

	var select = document.getElementById('alarmsecs');
	var sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();


function alarmSet() {

	var hr = document.getElementById('alarmhrs');

	var min = document.getElementById('alarmmins');

	var sec = document.getElementById('alarmsecs');

	var ap = document.getElementById('ampm');

	rdesc = document.getElementById('rdesc').value;


    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec)
    console.log('alarmTime:' + alarmTime);

  document.getElementById('alarmhrs').disabled = true;
	document.getElementById('alarmmins').disabled = true;
	document.getElementById('alarmsecs').disabled = true;
	document.getElementById('ampm').disabled = true;


//when alarmtime is equal to current time
	var h2 = document.getElementById('clock');

/*function to calcutate the current time
then compare it to the alarmtime and show an alert when they are equal
*/

setInterval(function() {

	var date = new Date();

	var hours = date.getHours();
	// var hours = date.getHours();

	var minutes = date.getMinutes();

	var seconds = date.getSeconds();

	var ampm = date.getHours()  ? 'AM' : 'PM';



	var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds)

// There is an alarm when that says a message and adds the values of rdesc and alarmtime
  if (alarmTime == currentTime) {
		window.alert('Hey! It is ' + alarmTime + ' Remember your reminder' + ': ' +  rdesc);
		}
},1000);


	// console.log('currentTime:' + currentTime);

}


function alarmClear() {

	document.getElementById('alarmhrs').disabled = false;
	document.getElementById('alarmmins').disabled = false;
	document.getElementById('alarmsecs').disabled = false;
	document.getElementById('ampm').disabled = false;

}
