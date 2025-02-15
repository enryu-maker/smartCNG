import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Images } from '../../assets/images';
import { useRoute } from '@react-navigation/native';

export default function OrderReceipt({ navigation }) {
    const route = useRoute();
    const { order } = route.params;

    return (
        <SafeAreaView className='flex-1 bg-white p-4'>
            <StatusBar backgroundColor={'#fff'} />
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} className='p-2 h-10 w-10 rounded-full'>
                <Image source={Images.left} className='h-8 w-8' />
            </TouchableOpacity>

            {/* Title */}
            <View className='items-center my-4'>
                <Text className='text-primary text-2xl font-heading'>Order Receipt</Text>
            </View>

            {/* Order Details */}
            <View className='bg-gray-100 rounded-lg p-4 shadow-md'>
                <Text className='text-black text-lg font-body'>Order ID: {order.order_id}</Text>
                <Text className='text-black text-lg font-body'>Amount: ₹{order.amount}</Text>
                <Text className='text-black text-lg font-body'>Status:
                    {order.status === 'placed'
                        ? <Text className='text-red-500'> Placed</Text>
                        : <Text className='text-green-500'> Completed</Text>}
                </Text>
                <Text className='text-black text-lg font-body'>Booking Slot: {order.booking_slot_time}</Text>
            </View>

            {/* Station Details */}
            <View className='bg-gray-100 rounded-lg p-4 mt-4 shadow-md'>
                <Text className='text-black text-lg font-body'>Station: {order?.station?.name}</Text>
                <Text className='text-black text-lg font-body'>Location: {order?.station?.location}</Text>
            </View>

            {/* Go Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} className='bg-primary h-12 mt-6 rounded-lg justify-center items-center'>
                <Text className='text-white text-lg font-heading'>Back to Orders</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
