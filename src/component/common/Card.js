import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.constainerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    constainerStyle: {
        elevation: 1,
        paddingHorizontal: 20,
        paddingVertical: 10
    }
}

export { Card };