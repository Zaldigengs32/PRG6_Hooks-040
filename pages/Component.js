import React, { Component } from "react";
import { View, Text } from "react-native";

export class KartuClass extends Component {
  render() {
    return (
        <View> 
            <Text>Hallo ini saya dari Class Component!</Text>
            <Text>Sintaks saya lebih panjang dan butuh render()</Text>
        </View>
    );
  }
}

export const KartuFunctional = () => {
    return (
        <View>
            <Text>Hallo ini saya dari Functional Component!</Text>
            <Text>Sintaks saya lebih singkat dan tidak butuh render()</Text>
        </View>
    );
};
