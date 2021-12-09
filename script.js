console.log("welcome to music");
let audioElement = new Audio('songs/1.mp3');
let songIndex=0;
let masterPlay=document.getElementById('masterplay');
let propgressBar=document.getElementById('mypro');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

let songItem=Array.from(document.getElementsByClassName('songItem'));


 
/*array of object*/
let songs=[{"songName":"s1",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
{"songName":"s2",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},{"songName":"s3",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
{"songName":"s4",filePath:"songs/4.mp3",coverPath:"4.jpg"},{"songName":"s5",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
{"songName":"s6",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"}];

songItem.forEach((element,i)=>{
   //  console.log(element,i);
     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;


})

//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity=0;
    }
})

//events
//time changing then you have to use time changing events
//Listen to events

audioElement.addEventListener('timeupdate',()=>{

    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);//this math for how many percentage my song has completed
    console.log(progress);
    propgressBar.value=progress;//by this line seekbar will move .that is dependent on the value of progress.

})

propgressBar.addEventListener('change',()=>{
    audioElement.currentTime=propgressBar.value*audioElement.duration/100;

})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');


})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src=`songs/${songIndex+1}.mp3`;//here i am adding one because i have taken song id from 0 and my songs mp3 is staring from 1.
         masterSongName.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;//because i have changed the song the song will start from 0 for this i have written this line;
         audioElement.play();
         masterPlay.classList.remove('fa-pause-circle');
         masterPlay.classList.add('fa-play-circle');

     })

})

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=5){
      songIndex=0;
  }
  else{

    songIndex+=1;
  }
  audioElement.src=`songs/${songIndex+1}.mp3`;//here i am adding one because i have taken song id from 0 and my songs mp3 is staring from 1.
  masterSongName.innerText=songs[songIndex].songName;
  audioElement.currentTime=0;//because i have changed the song the song will start from 0 for this i have written this line;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
   
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
  
      songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;//here i am adding one because i have taken song id from 0 and my songs mp3 is staring from 1.
          masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;//because i have changed the song the song will start from 0 for this i have written this line;
           audioElement.play();
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
     
  })

