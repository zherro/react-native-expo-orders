import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function GPSResource() {

    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        (async () => {
            if(!Device.isDevice) {
                setError("This don't work in emulator Device!");
                return;
            }

            let { status } = await Location.requestForegroundPermissionsAsync();

            if( status !== 'granted') {
                setError("No has permission to access location");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();

    }, []);

    return (
        <View
            style={[
                {flex: 1, alignItems: "center", justifyContent: "center" }
            ]}
        >
            { error ? <Text>{error}</Text> : null }
            <Text style={{paddingTop: 30}} >{ JSON.stringify(location) }</Text>
            <Text style={{paddingTop: 20}} >Latitude: { JSON.stringify(location?.coords?.latitude) }</Text>
            <Text style={{paddingTop: 10}} >Longitude: { JSON.stringify(location?.coords?.longitude) }</Text>
        </View>
    );
}