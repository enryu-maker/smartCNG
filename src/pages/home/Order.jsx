import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../../assets/images'

export default function Order({
    navigation
}) {
    return (
        <SafeAreaView className='flex-1'>
            <StatusBar backgroundColor={"#fff"} />
            <TouchableOpacity
                onPress={() => navigation.goBack()}

                className=" p-2 h-10 w-10 rounded-full"
            >
                <Image source={Images.left} className=' text-primary h-8 w-8' />
            </TouchableOpacity>
            <View className='flex-1 h-full w-full  justify-start items-start px-4'>
                <Text className="text-primary text-2xl py-3 text-start w-[88%] font-heading">
                    Order
                </Text>
            </View>
        </SafeAreaView>
    )
}