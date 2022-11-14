import React, { FC, useState, useEffect } from "react";
import { KeyboardAvoidingView, SafeAreaView, View, Text, StyleSheet, Alert, Image } from "react-native";
import { Button } from "../components";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation/stackParamList";
import { getCountryInfo } from "../api/getCountryInfo";

type countryScreenProps = NativeStackNavigationProp<StackParamList, 'Country'>

const Country: FC = () => {

    const route = useRoute()
    const [data, setData] = useState([])

    useEffect(() => {
        getCountryInfo(route?.params?.country, setData)
    }, [])
    

    const navigation = useNavigation<countryScreenProps>()

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image source={{ uri: data[0]?.flags.png }} style={styles.image} />
                    <Text style={styles.text}>Capital : {data[0]?.capital}</Text>
                    <Text style={styles.text}>Country's Population : {data[0]?.population}</Text>
                    <Text style={styles.text}>Latitude : {data[0]?.latlng[0]} deg</Text>
                    <Text style={styles.text}>Longitude : {data[0]?.latlng[1]} deg</Text>
                    <Button
                        title="Capital Weather"
                        onPress={() => navigation.navigate('Weather', {capital: data[0]?.capital})}
                    />

                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default Country;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '30%',
        width: '50%',
        resizeMode: 'contain'
    },
    text: {
        color: '#000',
        marginTop: 10,
        fontSize: 20
    }
})