import { View, Text, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const Header = ({screen}) => {

    const navigation = useNavigation();

    return (
        <View style={{ paddingBottom: 20, paddingTop: 20 }} className="flex-row flex-1 justify-between">
            <View>
                <Text style={{ fontFamily: "ChivoMonoLight" }} className="text-[16px]">Hello</Text>
                <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-[32px]" >Shashank!</Text>
            </View>
            <View className="flex-row">
                <Image style={{width: responsiveWidth(19.5),height: responsiveWidth(19.5)}} className="rounded-[30px] right-[-20px] z-10" source={{ uri: "https://images.pexels.com/photos/4612458/pexels-photo-4612458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
                <TouchableOpacity onPress={()=>{navigation.navigate(`${screen}Search`)}} activeOpacity={1} style={{width: responsiveWidth(19.5),height: responsiveWidth(19.5)}} className="rounded-[30px] bg-black flex justify-center items-center active:scale-[0.96]">
                    <Image source={require("../assets/images/Search.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header