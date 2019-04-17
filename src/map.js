import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export  const MapComponent= () => (
    <View style={styles.container}>
        <MapView
            style={styles.map}
            initialRegion={{ // initial region set to Bileto
                latitude: 12.910465, 
                longitude: 77.635108,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    map: {
        flex: 1,
    }
});