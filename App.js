/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import SongEntry from './Components/SongEntry';
import PlaybackBox from './Components/PlaybackBox';
import Sound from 'react-native-sound';

var indexPlaying = -1; //-1 indicates nothing is on the playing thing right now

export default function App(){
  const [song, setSong] = useState(null);

  //format of entries as TITLE, LINK, IMAGE LINK
  const songDatabase = [
    ["Apple", "applebite.mp3", "https://static.vecteezy.com/system/resources/thumbnails/023/290/773/small/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png"],
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
    console.log(id);
    let replacementSong = new Sound(songDatabase[id][1], Sound.MAIN_BUNDLE, ()=>{
        console.log(replacementSong.getDuration());
      }
    );
    setSong(replacementSong);
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
     <PlaybackBox fastBackwardFunction={fastBackward} fastForwardFunction={fastForward} playFunction={togglePlayback} songPlaying={song}/>
    </View>
    

  );
}
const style = StyleSheet.create({
  songList: {
    flex: 1,
    gap: 0,
  },
});