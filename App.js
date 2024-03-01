/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import SongEntry from './Components/SongEntry';
import PlaybackBox from './Components/PlaybackBox';
import Sound, { DOCUMENT } from 'react-native-sound';

var indexPlaying = -1; //-1 indicates nothing is on the playing thing right now

export default function App(){
  const [song, setSong] = useState(null);
  const [playing, setPlaying] = useState(false);

  //format of entries as TITLE, LINK, IMAGE LINK
  const songDatabase = [
    ["Bejewled", "bejeweled.mp3", "https://www.allkeyshop.com/blog/wp-content/uploads/buy-bejeweled-twist-cd-key-pc-download-img1.webp"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
    ["Pear", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"]
  ]

  function chooseSong(id){
    setPlaying(false);
    if(song!=null){
      song.release();
    }
    console.log(id);
    let replacementSong = new Sound(songDatabase[id][1], Sound.MAIN_BUNDLE, ()=>{
        replacementSong.play(console.log("e"));
        setSong(replacementSong)
        setPlaying(true);
      }
    );
    indexPlaying=id;
  }
  function fastForward(){
    indexPlaying++;
    if(indexPlaying>=songDatabase.length){
      indexPlaying=0;
    }
    chooseSong(indexPlaying);
  }
  function fastBackward(){
    indexPlaying--;
    if(indexPlaying<-1){
      indexPlaying=0;
    }
    if(indexPlaying!=-1){
      chooseSong(indexPlaying);
    }
  }
  function togglePlayback(){
    if(song.isPlaying()){
      setPlaying(false);
      song.pause();
    }
    else{
      setPlaying(true);
      song.play();
    }
  }
  function scrubbed(time){
    song.getCurrentTime((seconds)=>console.log(seconds))
      song.setCurrentTime(time);
  }


  var songs = [];
  for(let i = 0; i<songDatabase.length; i++){
    songs.push(<SongEntry key={i} song={songDatabase[i]} touchFunction={()=>{chooseSong(i)}}/>)
  }

  return(
    <View style={{flex: 1}}>
      <ScrollView style={style.songList}>
        {songs}
     </ScrollView>
     <PlaybackBox fastBackwardFunction={fastBackward} fastForwardFunction={fastForward} playFunction={togglePlayback} scrubFunction={scrubbed} songPlaying={song} isPlaying={playing}/>
    </View>
    

  );
}
const style = StyleSheet.create({
  songList: {
    flex: 1,
    gap: 0,
  },
});