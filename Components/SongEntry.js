import React, { useState } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Sound from 'react-native-sound';



export default function SongEntry({song, touchFunction}){
    const [duration, setDuration] = useState(-1);
        var sound = new Sound(song[1], Sound.MAIN_BUNDLE, (error) => {
            if (error) {
            console.log('failed to load the sound', error);
            return;
            }
            setDuration(sound.getDuration());
        });

    return(
        <View style={styles.songBox} onTouchEnd={touchFunction}>
            <Image style={styles.songPhoto} source={{uri: song[2]}}></Image>
            <View style={styles.textBox}>
                <Text style={styles.songTitle}>{song[0]}</Text>
                <Text style={styles.songTime}>{duration + " seconds"}</Text>
            </View>
            <Text>Default Album</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    songBox: {
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 5,
        flex: 0,
        flexDirection: "row",
        gap: 25,
    },
    textBox: {

    },
    songPhoto: {
        width: 80,
        height: 80,
    },
    songTime: {

    },
    songTitle: {
        fontSize: 30,
    },
});