
"use strict";
var playList = [{
	author: "led zeppelin",
	song: "stairway to heaven",
	duration: "2:03"
},
{
	author: "queen",
	song: "bohemian rhapsody",
	duration: "2:30"
},
{
	author: "lynyrd skynyrd",
	song: "free bird",
	duration: "1:56"
},
{
	author: "deep purple",
	song: "smoke on the water",
	duration: "3:03"
},
{
	author: "jimi hendrix",
	song: "all along the watchtower",
	duration: "2:53"
},
{
	author: "AC/DC",
	song: "back in black",
	duration: "2:43"
},
{
	author: "queen",
	song: "we will rock you",
	duration: "2:13"			
},
{
	author: "metallica",
	song: "enter sandman",
	duration: "3:03"			
}
];

var list = function (){
	for (var i = 0; i < playList.length; i++) {
		var track = playList[i];
		var li = document.createElement('li');
        li.className = 'playlist__songs'
		var div = document.createElement('div');
        div.className = 'songs__items';

		var duration = document.createElement('span');
		duration.innerText = track.duration;
		duration.className = 'duration';
		div.appendChild(duration);

		var author = document.createElement('span');
		author.innerText = track.author; 
		author.className = 'author';
		div.appendChild(author);

		var song = document.createElement('span');
		song.innerText = track.song;
		song.className = 'song';
		div.appendChild(song);

		var like = document.createElement('span');
		like.className = 'like';
		div.appendChild(like);

		li.appendChild(div);
		document.querySelector('.playlist__list').appendChild(li);

	}
}
list(playList);


