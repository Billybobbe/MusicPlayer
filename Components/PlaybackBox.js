import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import Slider from '@react-native-community/slider'
import Icon from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';

export default function({fastForwardFunction, fastBackwardFunction, playFunction, songPlaying, scrubFunction, isPlaying}){
    const [tick, updateTick] = useState(null);
    useEffect(()=>{
        console.log("updated!");
        setTimeout(()=>{if(songPlaying!=null&&songPlaying.isPlaying()){songPlaying.getCurrentTime((seconds)=>updateTick(seconds));}}, 500);
    }, [tick, isPlaying]);
    var timeline = [];
    if(songPlaying!=null){
        timeline.push(<Text key={1}>{tick}</Text>)
        timeline.push(<Slider key={2} style={{flexBasis: 300}} value={tick/songPlaying.getDuration()} onValueChange={(value)=>{scrubFunction(value*songPlaying.getDuration())}}/>)
        timeline.push(<Text key={3}>{songPlaying.getDuration()}</Text>)
    }
    function play(){
        playFunction();
    }

    return(
        <View style={styles.playBox}>
            <View style={styles.timeline}>
                {timeline}
            </View>
            <View style={styles.buttonsRow}>
                <TouchableNativeFeedback onPress={fastBackwardFunction}>
                    <Icon name="fastbackward" style={styles.playIcons}/>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={play}>
                    <Icon name="play" style={styles.playIcons}/>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={fastForwardFunction}>
                    <Icon name="fastforward" style={styles.playIcons}/>
                </TouchableNativeFeedback>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    playBox: {
        paddingTop: 10,
    },
    timeline: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonsRow: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
    },
    playIcons: {
        fontSize: 65,
    },
}

);