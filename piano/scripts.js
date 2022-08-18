var keys = document.querySelectorAll('.key');
var note = document.getElementById('note');
var noteNames = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','B','C','C#/Db'];
function play(url,index){
	new Audio(url).play();
	note.innerHTML = noteNames[index];
}


function mouseOver(key){
	key.classList.add('design');
}


function mouseOut(key){
	key.classList.remove('design');
}

keys.forEach(function(key, index) {
	var identifier = index + 1;
	var url = './sounds/key'+identifier+'.mp3';
	key.addEventListener('click',()=>play(url,index));
	key.addEventListener('mouseover',()=>mouseOver(key));
	key.addEventListener('mouseout',()=>mouseOut(key));
});


