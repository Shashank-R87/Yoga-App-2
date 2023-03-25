import { View, Text, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchIcon from "../components/SearchIcon"

const SearchScreen = () => {

    const windowwidth = Dimensions.get("window").width;

    return (
        <SafeAreaView className="bg-[white] flex-1">
            <View className="ml-[16px] mr-[16px] mt-[32px] ">
                <View className="bg-black rounded-[20px] flex-row justify-between items-center">
                    <TextInput className="color-white text-[20px] top-[5px]" placeholderTextColor={"white"} style={{width:windowwidth-112, paddingVertical:20,paddingLeft:24, fontFamily:"PoppinsSemiBold", lineHeight:30, textDecorationLine:'none'}} placeholder='Search yoga...' />
                    <SearchIcon/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen