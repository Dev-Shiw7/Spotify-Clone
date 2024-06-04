import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import song4 from   './song4.mp3'
import mandir from './mandir.jpg'
import devta from './devta.mp3'
import stars from './stars.jpg'
import Rewrite from './Rewrite.mp3'
import heer from './heer.jpg'
import heera from './heera.mp3'
import taylor from './taylor.jpg'
import MD from './MD.mp3'
import sunshine from './sunshine.jpg'
import give from './give.mp3'
import sajni from './sajni.jpg'
import osajni from './osajni.mp3'
import crew from './crew.jpg'
import hai from './hai.mp3'
import junoon from './junoon.jpg'
import lofi from './lofi.mp3'
import ghost from './ghost.mp3'




export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:2,
        name: "Trending on Billboard",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Sajni - Laapata Ladies",
        image: sajni ,
        file:osajni,
        desc:"A kind of love you can't stop falling in love with",
        duration:"2:54"
    },
    
    {
        id:1,
        name: "Rewrite the Stars",
        image: stars,
        file:Rewrite,
        desc:"Rewrite the Stars is a song performed by Zac Efron and Zendaya for the 2017 American biographical musical drama film The Greatest Showman.",
        duration:"3:40"
    },
    {
        id:2,
        name: "Tumhi Mere Mandir",
        image: mandir,
        file:devta,
        desc:"Sing along the lyrics of Tumhi Meri Mandir Song from Khandan album. Tumhi Meri Mandir Song from the Khandan album is voiced by famous singer Lata Mangeshkar.",
        duration:"2:35"
    },
    {
        id:3,
        name: "Hai Junoon",
        image: junoon,
        file:hai,
        desc:"Revive your young heart with this melodious song",
        duration:"5:27"
    }
    
   ,{
    id:4,
    name: "Chaudhvi Shab",
    image: heer,
    file:heera,
    desc:"The lyrics of “chaudhvin shab ko lyrics” possess an ineffable allure that transcends linguistic barriers, touching the hearts of listeners ....",
    duration:"4:03"},

    {
        id:5,
        name: "Midnight Rain X Back To December",
        image: taylor,
        file:MD,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:6,
        name: "Naina - Diljit Dosanjh",
        image: crew,
        file:song4,
        desc:"Dive into the flow of Naina by DD and Badshah",
        duration:"3:00"
    }
    ,
    {
        id:7,
        name: "We'll go",
        image: img1,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:28"
    },
   

    {
        id:8,
        name: "Sad Hour Songs",
        image: img4    ,
        file:lofi,
        desc:"Put a smile on your face with these happy tunes",
        duration:"7:20"
    },
    {
        id:9,
        name: "Give Me Some Sunshine",
        image: sunshine,
        file:give,
        desc:"A tune to make the dead hearts alive",
        duration:"4:14"
    },
    {
        id:10,
        name: "Lofi Beats",
        image: img7,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    
    {
        id:11,
        name: "Random",
        image: img12,
        file:song2,
        desc:"Call it what you like, that'll be your description",
        duration:"2:35"
    },
    {
        id:12,
        name: "Dancing With Your Ghost",
        image: img2,
        file:ghost,
        desc:"To love is to lose. This song is about losing the sight of a loved ones...",
        duration:"3:19"
    }
    
   

]