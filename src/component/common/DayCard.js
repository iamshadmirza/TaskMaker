import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from 'res/colors.json';
import { Context } from '../Theme';
let c = useContext(Context);

const DayCard = (props) => {
    return (
        <View style={styles.constainerStyle}>
            <Text style={styles.dayText}>{props.children}</Text>
            <TouchableOpacity onPress={props.onPress} style={styles.icon}>
                <Entypo name='plus' size={24} color={c.textColor || colors.red} />
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    constainerStyle: {
        elevation: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dayText: {
        color: c.textColor || colors.red,
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'montserrat',
    },
    icon: {
        padding: 5
    }
}

export { DayCard };