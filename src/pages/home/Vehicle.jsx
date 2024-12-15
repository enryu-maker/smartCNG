import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Vehicle() {
    return (
        <SafeAreaView className='flex-1'>
            <StatusBar backgroundColor={"#fff"} />
            <View className='h-[50px] w-full flex-row  justify-between  items-center px-4'>
                <Text className="text-primary text-2xl py-3 text-start  font-heading">
                    Vehicle
                </Text>
                <TouchableOpacity className='bg-primary rounded-md'>
                    <Text className="text-white text-base py-1 px-3 text-start font-body">
                        Add +
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}