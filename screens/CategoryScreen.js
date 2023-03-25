import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const CategoryScreen = ({ route }) => {

    return (
        <SafeAreaView className="bg-[white] flex-1 ">
            <ScrollView showsHorizontalScrollIndicator={false} className="ml-[16px] mr-[16px] mt-[10px] ">
                <View>
                    <Header screen={route.name} />
                </View>
                <View>
                    <Text className="text-[16px] mt-[20px]" style={{fontFamily: "MontserratMedium"}}>Categories</Text>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default CategoryScreen