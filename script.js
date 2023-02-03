console.log("hello");

//Initialize the Variables
let songIndex=0;
let audioElement=new Audio('./songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Tune jo na kaha", filePath:"./songs/1.mp3",coverPath:"./images/2.jpg"},
    {songName: "Jiyen kyun", filePath:"./songs/2.mp3",coverPath:"./images/3.jpg"},
    {songName: "Pashmina", filePath:"./songs/3.mp3",coverPath:"./images/4.jpg"},
    {songName: "Jaan Nisaar", filePath:"./songs/4.mp3",coverPath:"./images/5.jpg"},
    {songName: "Tenu na bol pawaan", filePath:"./songs/5.mp3",coverPath:"./images/6.jpg"},
    {songName: "Sang hoon tere", filePath:"./songs/6.mp3",coverPath:"./images/7.jpg"},
    {songName: "Aaya na tu", filePath:"./songs/7.mp3",coverPath:"./images/8.jpg"},
    {songName: "Darkhaast", filePath:"./songs/8.mp3",coverPath:"./images/9.jpg"},
    {songName: "Dard mein bhi ye lab", filePath:"./songs/9.mp3",coverPath:"./images/10.jpg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
    document.getElementById('masterSongName').innerText = songs[songIndex].songName;
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress= parseFloat((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value =progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById('masterSongName').innerText = songs[songIndex].songName;
        gif.style.opacity=1;
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){songIndex=0;}
    else {songIndex+=1;}
    audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById('masterSongName').innerText = songs[songIndex].songName;  
        gif.style.opacity=1;  
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>=9){songIndex=0;}
    else {songIndex+=1;}
    audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
document.getElementById('masterSongName').innerText = songs[songIndex].songName;
gif.style.opacity=1;
})