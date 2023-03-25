import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
// import MaskedView from '@react-native-masked-view/masked-view'

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const HomeScreen = ({ route }) => {

    const windowwidth = Dimensions.get("window").width;
    const windowheight = Dimensions.get("window").height;

    return (
        <SafeAreaView className="bg-[white] flex-1">
            <ScrollView showsHorizontalScrollIndicator={false} className="ml-[16px] mr-[16px] mt-[10px] ">
                <View>
                    <Header screen={route.name} />
                </View>
                <View className="mt-[20px]">
                    <View style={{ width: responsiveWidth(91.1), height: responsiveHeight(29.8) }} className="bg-[#F9E9E7] rounded-[30px]">
                        <Text className="mt-[26px] ml-[30px] text-[26px]" style={{ fontFamily: "MontserratBold" }}>Beginner</Text>
                        <View className="flex-row">
                            <Text className="mt-[10px] ml-[30px] text-[14px]" style={{ fontFamily: "PoppinsExtraLight" }}>10 mins</Text>
                            <Image className="" style={{ width: responsiveWidth(64.1), height: responsiveHeight(19.3) }} resizeMode="contain" source={require("../assets/images/yoga_girl.png")} />
                        </View>
                    </View>
                </View>
                <View className="mt-[20px]">
                    <Text className="text-[16px]" style={{paddingLeft:11, paddingVertical:11, fontFamily: "MontserratMedium"}}>Recommended</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen