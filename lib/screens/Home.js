import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
const
    Home = (props) => {
        const [popular, setPopular] = useState(true);
        const [newo, setNewo] = useState(false);
        const [bestDeal, setBestDeal] = useState(false);


        return (
            <View>
                <View style={styles.top}>
                    <View style={styles.row}>
                        <Text style={styles.topTextStyle}>COBL</Text>
                        <View style={styles.circle}>
                            <Text style={styles.topwhiteText}>1</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ marginLeft: 12.0, fontSize: 20, marginTop: 8, fontWeight: 'bold' }}>The shop</Text>
                    <View style={styles.shopRowView}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            setPopular(true);
                            setNewo(false);
                            setBestDeal(false);
                        }}>
                            {popular == true ? <View style={styles.containerBlack}>
                                <Text style={styles.containerBlackText}>Popular</Text>
                            </View> : <Text style={{ color: "grey", fontWeight: "700", marginHorizontal: 12.0 }}>Popular</Text>}
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            setPopular(false);
                            setNewo(true);
                            setBestDeal(false);
                        }}>
                            {newo == true ? <View style={styles.containerBlack}>
                                <Text style={styles.containerBlackText}>New</Text>
                            </View> : <Text style={{ color: "grey", fontWeight: "700", marginHorizontal: 12.0 }}>New</Text>}
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            setPopular(false);
                            setNewo(false);
                            setBestDeal(true);
                        }}>
                            {bestDeal == true ? <View style={styles.containerBlack}>
                                <Text style={styles.containerBlackText}>Best deal</Text>
                            </View> : <Text style={{ color: "grey", fontWeight: "700", marginHorizontal: 12.0 }}>Best deal</Text>}
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal contentContainerStyle={{ paddingLeft: 12.0, }} showsHorizontalScrollIndicator={false}>
                        <View>
                            <Image style={{ height: 250, width: 170, borderRadius: 8.0, marginTop: 12.0 }} source={require("../assets/beolit.jpg")}></Image>
                            <Text style={{ marginTop: 12.0, fontSize: 14, fontWeight: "700", color: "black" }}>Beolit 20 Bluetooth</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 4.0, fontSize: 14, color: "black" }}>$95</Text>
                                <Text style={{ marginTop: 4.0, fontSize: 14, color: "grey" }}>   Clip</Text>
                            </View>
                        </View>
                        <View>
                            <Image style={{ height: 250, width: 170, borderRadius: 8.0, marginTop: 12.0 }} source={require("../assets/beolab50.jpg")}></Image>
                            <Text style={{ marginTop: 12.0, fontSize: 14, fontWeight: "700", color: "black" }}>Beolab 50</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 4.0, fontSize: 14, color: "black" }}>$245</Text>
                                <Text style={{ marginTop: 4.0, fontSize: 14, color: "grey" }}>   Speaker</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate("Details");
                        }}>
                            <View style={{marginRight:12.0 }}>
                                <Image style={{ height: 250, width: 170, borderRadius: 8.0, marginTop: 12.0 }} source={require("../assets/phonej.jpg")}></Image>
                                <Text style={{ marginTop: 12.0, fontSize: 14, fontWeight: "700", color: "black" }}>Marshall Headphones</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 4.0, fontSize: 14, color: "black" }}>$175</Text>
                                    <Text style={{ marginTop: 4.0, fontSize: 14, color: "grey" }}>   Headphones</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                    <Image style={{ height: 20, width: 20, marginTop: 14.0, tintColor: "grey" }} source={require("../assets/categorypng.png")}></Image>
                    <Text style={{ marginTop: 4.0, fontSize: 14, color: "black", marginTop: 14.0, marginLeft: 12.0, fontWeight: "700" }}>CATALOGUE</Text>
                </View>
            </View>
        );
    }
const styles = StyleSheet.create({
    containerBlackText: {
        color: "white",
        fontSize: 13.0,
        fontWeight: "700",
    },
    shopRowView: {
        flexDirection: 'row',
        marginTop: 12.0,
        marginLeft: 12.0,
    },
    containerBlack: {
        height: 25,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12.0,
        backgroundColor: "black",
    },
    topwhiteText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    topTextStyle: {
        fontSize: 20,
        marginTop: 8,
        fontWeight: "bold",
    },
    top: {
        height: "30%",
        width: "100%",
        backgroundColor: "#d3e8d7",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 12.0,
    },
    circle: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderRadius: 25,
        backgroundColor: "black",
    },
    bottomMargin: {

    }

});
export default Home;