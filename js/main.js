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



document.body.style.background = 'url(https://alexcss.github.io/playlist/img/816831.jpg)';

var songs = document.getElementById("list");
console.log(songs);
for (let key in playList) {
    let name = playList[key];

  let string =  '<li>' +  name.duration + ' ' + name.author + '<br>' + name.song + '</li>';

songs.innerHTML =  songs.innerHTML + string;
}

songs.style.textAlign = 'left';
songs.style.listStyleType = 'none';
songs.style.color = 'grey';
songs.style.fontSize = '20px';
songs.style.fontWeight = 'Bold';
songs.style.background = 'white';
songs.style.width = '360px';
songs.style.margin = 'auto';
songs.style.padding = '30px 20px';
songs.style.borderRadius = '15px';


var elems = document.getElementsByTagName("h3");
console.log(elems);

elems.style.textAlign = 'center';


generatePlayList(playList);