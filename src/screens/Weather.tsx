import React, { FC, useEffect, useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, View, StyleSheet, Image, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { getWeatherInfo } from "../api/getWeatherInfo";

const Weather: FC = () => {

    const route = useRoute()
    const [data, setData] = useState({})

    useEffect(() => {
        getWeatherInfo(route?.params?.capital, setData)
    }, [])

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold', alignSelf: 'center', margin: 5}}>Weather Details</Text>
                <View style={styles.container}>
                    <Image source={{ uri: data?.current?.weather_icons[0] }} style={styles.image} />
                    <Text style={styles.text}>Temperature : {data?.current?.temperature} °C</Text>
                    <Text style={styles.text}>Precipitation : {data?.current?.precip} %</Text>
                    <Text style={styles.text}>Wind Speed : {data?.current?.wind_speed} kmph</Text>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '20%',
        width: '30%',
        resizeMode: 'contain'
    },
    text: {
        color: '#000',
        marginTop: 10,
        fontSize: 20
    }
})