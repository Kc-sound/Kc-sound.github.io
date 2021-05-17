let response = {
	info: {
		category: "Billboard",
		chart: "ARTIST 100",
		date: "2021-05-15",
		source: "Billboard-API"
	},
	content: {
		1: {
			rank: "13",
			artist: "DJ Khaled",
			"last week": "-",
			"peak position": "1",
			"weeks on chart": "133",
			detail: "re-entry"
		},
		2: {
			rank: "2",
			artist: "The Weeknd",
			"last week": "3",
			"peak position": "1",
			"weeks on chart": "304",
			detail: "up"
		},
		3: {
			rank: "3",
			artist: "Billie Eilish",
			"last week": "12",
			"peak position": "1",
			"weeks on chart": "141",
			detail: "up"
		},
		4: {
			rank: "4",
			artist: "Moneybagg Yo",
			"last week": "2",
			"peak position": "2",
			"weeks on chart": "51",
			detail: "down"
		},
		5: {
			rank: "5",
			artist: "Justin Bieber",
			"last week": "4",
			"peak position": "1",
			"weeks on chart": "324",
			detail: "down"
		},
		6: {
			rank: "6",
			artist: "Luke Combs",
			"last week": "6",
			"peak position": "1",
			"weeks on chart": "218",
			detail: "same"
		},
		7: {
			rank: "7",
			artist: "Dua Lipa",
			"last week": "7",
			"peak position": "4",
			"weeks on chart": "157",
			detail: "same"
		},
		8: {
			rank: "8",
			artist: "Ariana Grande",
			"last week": "8",
			"peak position": "1",
			"weeks on chart": "326",
			detail: "same"
		},
		9: {
			rank: "9",
			artist: "Drake",
			"last week": "5",
			"peak position": "1",
			"weeks on chart": "358",
			detail: "down"
		},
		10: {
			rank: "10",
			artist: "Lil Baby",
			"last week": "10",
			"peak position": "1",
			"weeks on chart": "156",
			detail: "same"
		}
	}
};

let allArtists = {
	1: {
		photo:'images/1.jpg',
		spotify: 'https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP'
},
	2: {
		photo:'images/2.jpg',
		spotify: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ'
},
	3: {
		photo:'images/3.jpg',
		spotify: 'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH'
},
	4: {
		photo:'images/4.jpg',
		spotify: 'https://open.spotify.com/artist/3tJoFztHeIJkJWMrx0td2f'
},
	5: {
		photo:'images/5.jpg',
		spotify: 'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s'
},
	6: {
		photo:'images/6.jpg',
		spotify: 'https://open.spotify.com/artist/718COspgdWOnwOFpJHRZHS'
},
	7: {
		photo:'images/7.jpg',
		spotify: 'https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we'
},
	8: {
		photo:'images/8.jpg',
		spotify: 'https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR'
},
	9: {
		photo:'images/9.jpg',
		spotify: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4'
},
	10: {
		photo:'images/10.jpg',
		spotify: 'https://open.spotify.com/artist/5f7VJjfbwm532GiveGC0ZK'
}
}
let topArtists = document.getElementById("music");

for (i = 1; i <= 10; i++) {
	let myartist = response.content[i].artist;
	let rank = response.content[i].rank;
	let last = response.content[i]["last week"];
	let peek = response.content[i]["peak position"];
	let weeks = response.content[i]["weeks on chart"];
	let photo = allArtists[i].photo;
		topArtists.innerHTML += `<div id="rank${i}">`+
		 `<div><h2>${rank}</h2></div>`+
		 `<div><img src="${photo}"/></div>`+
		 `<div>
		 <h2>${myartist}</h2>
		 <p><strong>${last}</strong> Last <strong>${peek}</strong> Peek <strong>${weeks}</strong> Weeks</p>
		 </div>` +
		 `<div><img src="https://res.cloudinary.com/devkosov/image/upload/v1620946235/spotify_xn2l51.svg">`+
		 `</div>`;
}

for (i = 1; i<= 10; i++){
	let spotify = allArtists[i].spotify;
	let thisArtist = document.getElementById(`rank${i}`);
	thisArtist.addEventListener("click",(e) => {
	window.open(`${spotify}`, '_blank');
} );
}

function closee(){
	let pog = document.getElementById("theMusic");
	if (theMusic.style.display == "flex"){
		theMusic.style.display = "none";
	}else{
		theMusic.style.display = "flex";
	}
};

const PopS = document.getElementById('PopupSign');
const PopR = document.getElementById('PopupReg');
const PopUp = document.getElementById('PopUp');

function ChangeStatusSin () {
if (PopS.classList.contains('is-visible')) {
	PopS.classList.remove('is-visible');
	PopUp.classList.remove('is-visible');
} else {
	PopS.classList.add('is-visible');
	PopUp.classList.add('is-visible');
}
}

function ChangeStatusReg () {
if (PopR.classList.contains('is-visible')) {
	PopR.classList.remove('is-visible');
	PopUp.classList.remove('is-visible');
} else {
	PopR.classList.add('is-visible');
	PopUp.classList.add('is-visible');
}
}

function Swap () {
if (PopR.classList.contains('is-visible')) {
	PopR.classList.remove('is-visible');
	PopS.classList.add('is-visible');
} else {
	PopR.classList.add('is-visible');
	PopS.classList.remove('is-visible');
}
}
