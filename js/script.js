
//api Copy object 40 tries remaining OMEGALUL OMEGALUL PAGMAN PAGMAN

/*
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://billboard-api2.p.rapidapi.com/artist-100?date=2021-06-02&range=1-10",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7a064432ecmshe0ff9130f202eaep1f5fb3jsne49b9ac386f6",
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response2) {
	console.log(response2);
});
*/
let response = {
    "info": {
        "category": "Billboard",
        "chart": "ARTIST 100",
        "date": "2021-06-05",
        "source": "Billboard-API"
    },
    "content": {
        "1": {
            "rank": "1",
            "artist": "Olivia Rodrigo",
            "last week": "2",
            "peak position": "1",
            "weeks on chart": "20",
            "detail": "up"
        },
        "2": {
            "rank": "2",
            "artist": "BTS",
            "last week": "14",
            "peak position": "1",
            "weeks on chart": "242",
            "detail": "up"
        },
        "3": {
            "rank": "3",
            "artist": "twenty one pilots",
            "last week": "-",
            "peak position": "1",
            "weeks on chart": "263",
            "detail": "re-entry"
        },
        "4": {
            "rank": "4",
            "artist": "J. Cole",
            "last week": "1",
            "peak position": "1",
            "weeks on chart": "231",
            "detail": "down"
        },
        "5": {
            "rank": "5",
            "artist": "P!nk",
            "last week": "63",
            "peak position": "1",
            "weeks on chart": "201",
            "detail": "up"
        },
        "6": {
            "rank": "6",
            "artist": "The Weeknd",
            "last week": "6",
            "peak position": "1",
            "weeks on chart": "307",
            "detail": "same"
        },
        "7": {
            "rank": "7",
            "artist": "Luke Combs",
            "last week": "10",
            "peak position": "1",
            "weeks on chart": "221",
            "detail": "up"
        },
        "8": {
            "rank": "8",
            "artist": "Dua Lipa",
            "last week": "3",
            "peak position": "1",
            "weeks on chart": "160",
            "detail": "down"
        },
        "9": {
            "rank": "9",
            "artist": "Ariana Grande",
            "last week": "7",
            "peak position": "1",
            "weeks on chart": "329",
            "detail": "down"
        },
        "10": {
            "rank": "10",
            "artist": "Drake",
            "last week": "4",
            "peak position": "1",
            "weeks on chart": "361",
            "detail": "down"
        }
    }
}

let allArtists = {
	1: {
		photo:'images/1.jpg',
		spotify: 'https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG'
},
	2: {
		photo:'images/2.jpg',
		spotify: 'https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX'
},
	3: {
		photo:'images/3.jpg',
		spotify: 'https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx'
},
	4: {
		photo:'images/4.jpg',
		spotify: 'https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5'
},
	5: {
		photo:'images/5.jpg',
		spotify: 'https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR'
},
	6: {
		photo:'images/6.jpg',
		spotify: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ'
},
	7: {
		photo:'images/7.jpg',
		spotify: 'https://open.spotify.com/artist/718COspgdWOnwOFpJHRZHS'
},
	8: {
		photo:'images/8.jpg',
		spotify: 'https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we'
},
	9: {
		photo:'images/9.jpg',
		spotify: 'https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR'
},
	10: {
		photo:'images/10.jpg',
		spotify: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4'
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

/* Loader :*/

const paths = document.querySelectorAll(".path");
const loader = document.getElementById("loader");
let mainline = document.getElementById("mainline");
let removeTime = 1; //in seconds

paths.forEach((path) =>{
	let totalLen = path.getTotalLength();
	let pathElement = path;
	pathElement.setAttribute("stroke-dasharray", totalLen);
	pathElement.setAttribute("stroke-dashoffset", totalLen);
});

//after animation end remove lines
mainline.addEventListener('animationend', () => {
	loader.style.transition= `all ${removeTime}s`
	loader.style.clipPath = "polygon(0 0, -10% 50%, 0 100%, 0 100%, 0 0)"
	document.body.style.overflowY = "auto";
	swoop('titre',2000,500,false);
});

