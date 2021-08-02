import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
const Details = () => {


    return (
        <View>
            <View style={styles.top}>
                <View style={styles.row}>
                    <Text style={styles.topTextStyle}>COBL</Text>
                    <View style={styles.circle}>
                        <Text style={styles.topwhiteText}>1</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 300, width: 200 }} source={require("../assets/phone.png")}></Image>
                </View>
                <View style={{ marginLeft: 12.0 }}>
                    <Text style={{ fontSize: 28, fontWeight: "700", color: "white" }}>Headphones</Text>
                    <Text style={{ fontSize: 28, fontWeight: "700", color: "black" }}>Marshall Major III</Text>
                    <Text style={{ fontSize: 16, color: "black" }}>$175</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { }}>
                            <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 18.0, borderRadius: 20, height: 40, width: 100, backgroundColor: "#f7ece8" }}>
                                <Text style={{ color: "black", fontWeight: '700' }}>BUY</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ marginRight: 13.0, flexDirection: 'row' }}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => { }}>
                                <View style={[styles.circle, { marginTop: 16.0, height: 43, width: 43, marginRight: 12.0, backgroundColor: 'black' }]}>
                                    <Image style={{ height: 20, width: 20, tintColor: "white" }} source={require("../assets/backward.png")}></Image>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => { }}>
                                <View style={[styles.circle, { marginTop: 16.0, height: 43, width: 43, marginRight: 12.0, backgroundColor: 'white' }]}>
                                    <Image style={{ height: 20, width: 20, tintColor: "black" }} source={require("../assets/forward.png")}></Image>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    topwhiteText: {
        color: "white",
        fontSize: 16.0,
        fontWeight: "bold",
    },
    topTextStyle: {
        fontSize: 20.0,
        marginTop: 8,
        fontWeight: "bold",
    },
    top: {
        height: "95%",
        elevation: 12.0,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15.0,
        width: "100%",
        backgroundColor: "#e4ac96"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 12.0,
    },
    circle: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        borderRadius: 25,
        backgroundColor: "black"
    }


});
export default Details;