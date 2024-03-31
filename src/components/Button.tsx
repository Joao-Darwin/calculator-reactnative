import React from "react";
import { Dimensions, StyleSheet, Text, TouchableHighlight } from "react-native";

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

interface Props {
    title: string
    onClick?: any;
    isOperationButton?: boolean;
    isDoubleButton?: boolean;
    isTripleButton?: boolean;
}

function Button({ title, onClick, isOperationButton, isDoubleButton, isTripleButton }: Props): React.JSX.Element {

    const buttonStyle: any[] = [style.button];

    if (isOperationButton) buttonStyle.push(style.operationButton);
    if (isDoubleButton) buttonStyle.push(style.buttonDouble);
    if (isTripleButton) buttonStyle.push(style.buttonTriple);

    return (
        <TouchableHighlight onPress={onClick}>
            <Text style={buttonStyle}>{title}</Text>
        </TouchableHighlight>
    )
}

export default Button;