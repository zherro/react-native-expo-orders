import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera } from 'expo-camera';
import { useEffect, useState } from "react";
import * as Device from 'expo-device';

export default function CameraResource() {

    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);
    const [camera, setCamera] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {

        (async () => {
            if (!Device.isDevice) {
                setError("This don't work in emulator Device!");
                return;
            }

            let { status } = await Camera.requestCameraPermissionsAsync();

            // if app record video
            // let { statusAudio } = await Camera.requestMicrophonePermissionsAsync();

            console.log(status)
            setHasPermission(status === 'granted');
        })();

    }, []);


    const snap = async () => {
        if (hasPermission) {
            let photo = await camera.takePictureAsync();
            console.log(photo);
            setImage(photo);
        }
    };

    const goBack = () => {
        setImage(null);
    }


    return (
        <View
            style={[
                { flex: 1 }
            ]}
        >
            {hasPermission ? null : <Text>No has permission to access camera</Text>}
            {
                image || !hasPermission ? null :
                    <Camera
                        ref={ref => setCamera(ref)}
                        style={styles.camera}
                        type={type}
                        flashMode="on">
                        <View style={styles.buttonContainer}>

                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                    );
                                }}>
                                <Text style={styles.text}> Flip </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => {
                                    snap();
                                }}>
                                <Text style={styles.text}> Snap </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
            }
            {
                !image ? null :
                    <View style={{ flex: 1 }} >
                        <ImageBackground
                            source={{ uri: image && image.uri }}
                            style={{ flex: 1 }}
                        >
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={[styles.button]}
                                    onPress={() => {
                                        goBack();
                                    }}>
                                    <Text style={styles.text}> Return </Text>
                                </TouchableOpacity>
                            </View>

                        </ImageBackground>
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: "space-around",
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: "flex-end",
        backgroundColor: 'white',
        minWidth: 40,
        minHeight: 30,
        borderRadius: 15,
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
});