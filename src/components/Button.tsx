import React from "react";
import { Button as ButtonReact, Dimensions, StyleSheet, View } from "react-native";

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    }
})

interface Props {
    title: string
    onClick: any
}

function Button({ title, onClick }: Props): React.JSX.Element {
    return (
        <View style={style.button}>
            <ButtonReact title={title} onPress={onClick}/>
        </View>
    )
}

export default Button;