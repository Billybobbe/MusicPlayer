import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function(){
    return(
        <View style={styles.playBox}>
            <Icon name="fastbackward" style={styles.playIcons}/>
            <Icon name="play" style={styles.playIcons}/>
            <Icon name="fastforward" style={styles.playIcons}/>
        </View>
    );
}

const styles = StyleSheet.create({
    playBox: {
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