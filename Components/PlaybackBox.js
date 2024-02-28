import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import Slider from '@react-native-community/slider'
import Icon from 'react-native-vector-icons/AntDesign';

export default function({fastForwardFunction, fastBackwardFunction, playFunction, songPlaying}){
    var timeline = [];
    if(songPlaying!=null){
        timeline.push(<Text>hello</Text>)
    }

    return(
        <View style={styles.playBox}>
            <View style={styles.timeline}>
                <Text>3:00</Text>
                <Slider style={{flexBasis: 300}} value={0.5}/>
                <Text>{songPlaying.getDuration()}</Text>
            </View>
            <View style={styles.buttonsRow}>
                <TouchableNativeFeedback onPress={fastBackwardFunction}>
                    <Icon name="fastbackward" style={styles.playIcons}/>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={playFunction}>
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