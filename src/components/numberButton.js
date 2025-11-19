import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';

export default function FlatButtom({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        // width: '50%',
        aspectRatio: 1,
        borderRadius: 20,
        backgroundColor: '#d8e9f1',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
                

    }
    , buttonText: {
        color: '#2c3d3dff',
        fontWeight: '800',
        // textTranform: 'uppercase',
        fontSize: 30,
        textAlign: 'center',
        // textAlignVertical: 'center'
        // text
        
    }
}

)