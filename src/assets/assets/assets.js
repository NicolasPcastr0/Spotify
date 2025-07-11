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
import maria from './maria.jpg'
import matecaTeto from './matecaTeto.jpg'
import teto from './teto.jpg'
import uber from './uber.jpg'
import tempo from './tempo.jpg'
import brasil from './brasil.jpg'
import seujorge from './seujorge.jpg'
import pop from './pop.jpg'
import daily from './daily.jpg'
import liked from './liked.jpg' 

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
        desc:"Mundo: seu relatório das faixas mais tocadas",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 Brasil",
        image: brasil,
        desc:"Brasil: seu relatório das faixas mais tocadas",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "This is Seu Jorge",
        image: seujorge,
        desc:"This is Seu Jorge. Os maiores hits do artista.",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Suas músicas mais ouvidas",	
        image: daily,
        desc:"",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Night Pop",
        image: pop,
        desc:"",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Músicas Curtidas",
        image: liked,
        desc:"",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Maria e Juana",
        image: maria,
        file:song1,
        desc:"Mateca",
        duration:"3:20"
    },
    {
        id:1,
        name: "Balazul",
        image: matecaTeto,
        file:song2,
        desc:"Mateca, Teto",
        duration:"3:23"
    },
    {
        id:2,
        name: "Tava Bom",
        image: matecaTeto,
        file:song3,
        desc:"Mateca, Teto",
        duration:"3:46"
    },
    {
        id:3,
        name: "Uber",
        image: uber,
        file:song1,
        desc:"Ryu, The Runner, Mateca, Trap Select",
        duration:"2:37"
    },
    {
        id:4,
        name: "Previsão do Tempo",
        image: tempo,
        file:song2,
        desc:"Mateca",
        duration:"3:03"
    },
    {
        id:5,
        name: "YES OR NO",
        image: teto,
        file:song3,
        desc:"Teto",
        duration:"2:45"
    },
    {
        id:6,
        name: "Song Seven",
        image: img7,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    {
        id:7,
        name: "Song Eight",
        image: img12,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    }
]