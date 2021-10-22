jQuery('document').ready(function(){
	
var test1;

//test1 = confirm('Удалить все со страницы?');
var pogoda = 'дождь';
var time = 'ночь'

if ((pogoda == 'солнечно' || pogoda == 'облачно') && time == 'день') {
	alert('Можно ехать на пикник! Ура!');
}else if (pogoda == 'дождь'&& time == 'день') {
	alert('Ехать можно но нужно взять зонты');
}else{
	if (time == 'день') {
		alert('На пикник ехатьнельзя.. плохая погода Сейчас ведь ' + pogoda + '.\nКакой-там блин пикник.. :(');
	}else {
		var message = 'Какой там пикник? Сейчас же ночь!!!!';
		if (pogoda == 'дождь') {
			message = message + '.\nК тому-же льет дождь, ты дурак совем?'
			alert(message);
		}
	}

}


});