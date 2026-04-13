import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// 1. Class Component

export class KartuClass extends Coponent {
  render() {
    return (
        <View> 
            <Text>Hallo ini saya dari Class Component!</Text>
            <Text>Sintaks saya lebih panjang dan butuh render()</Text>
        </View>
    );
  }
}

// 2. Functional Component

export const KartuFunctional = () => {
    return (
        <View>
            <Text>Hallo ini saya dari Functional Component!</Text>
            <Text>Sintaks saya lebih singkat dan tidak butuh render()</Text>
        </View>
    );
}