import { Button, View, } from "react-native";

export default function Resources ( { navigation } ) {
    return (
        <View
            style={[
                {flex: 1},
                {justifyContent: "space-around"},
                {flexDirection: "column"},
                {alignItems: "center"}
            ]}
        >
            <Button title="GPS Location" onPress={() => navigation.navigate('GPSResource') } />
            <Button title="Camera" onPress={() => navigation.navigate('CameraResource') } />
            <Button title="GPS Location" onPress={() => navigation.navigate('GPSResource') } />
        </View>
    );
}