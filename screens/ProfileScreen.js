import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = () => {
  return (
    <SafeAreaView className="bg-[white] flex-1">
        <View className="ml-[16px] mr-[16px] mt-[10px]" >
            <Text>Hello Shashank</Text>
        </View>
    </SafeAreaView>
  )
}

export default ProfileScreen