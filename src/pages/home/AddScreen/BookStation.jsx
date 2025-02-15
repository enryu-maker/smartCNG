import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { Images } from '../../../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';
import { bookCNG } from '../../../../store/Actions/userActions';
import DatePicker from 'react-native-date-picker';

export default function BookStation({ navigation, route }) {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [slotd, setSlot] = useState('');
    const [amount, setAmount] = useState('');

    const dispatch = useDispatch();
    const vehicle = useSelector((state) => state.main.vehicle);
    const slotdata = useSelector((state) => state.main.slot);

    const handleBooking = () => {
        if (!slotd || !amount) {
            Alert.alert("Error", "Please fill all required fields.");
            return;
        }

        const data = {
            station_id: route?.params?.id,
            booking_slot: slotd?.id,
            amount: parseFloat(amount),
            status: "Placed",
            bookDate: date.toLocaleDateString('en-GB').split('/').join('-'),
        };

        console.log(data);
        dispatch(bookCNG(data, setLoading));
    };

    return (
        <>
            <SafeAreaView className="flex-1 bg-white p-4">
                {/* Back Button */}
                <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 h-10 w-10 rounded-full">
                    <Image source={Images.left} className='text-primary h-8 w-8' />
                </TouchableOpacity>

                {/* Title */}
                <View className="space-y-8 w-full mt-5 mx-auto justify-center items-center">

                    {/* Dropdown for available vehicles */}
                    {/* <View className="w-full items-center">
                        <Text className="w-[88%] self-center text-start font-heading text-lg">Vehicle</Text>
                        <Dropdown
                            style={{ width: '88%', borderBottomWidth: 1, paddingVertical: 10, paddingHorizontal: 12 }}
                            itemTextStyle={{ fontFamily: "Poppins" }}
                            data={vehicle}
                            labelField="vehicle_number"
                            valueField="vehicle_number"
                            placeholder="Select Vehicle"
                            placeholderStyle={{ color: '#8b8b8b' }}
                            value={vehicleNumber}
                            onChange={(item) => setVehicleNumber(item.vehicle_number)}
                        />
                    </View> */}

                    {/* Dropdown for slot */}
                    <View className="w-full items-center">
                        <Text className="w-[88%] self-center text-start font-heading text-lg">Filling Slot</Text>
                        <Dropdown
                            style={{ width: '88%', borderBottomWidth: 1, paddingVertical: 10, paddingHorizontal: 12 }}
                            itemTextStyle={{ fontFamily: "Poppins" }}
                            data={slotdata}
                            labelField="time"
                            valueField="id"
                            placeholder="Select Slot"
                            placeholderStyle={{ color: '#8b8b8b' }}
                            value={slotd}
                            onChange={(item) => setSlot(item)}
                        />
                    </View>

                    {/* CNG Fill Amount */}
                    <View className="w-full items-center">
                        <Text className="w-[88%] self-center text-start font-heading text-lg">CNG Fill Amount</Text>
                        <TextInput
                            className="bg-white border-b text-lg h-[50px] font-heading px-4 py-2 w-[88%]"
                            placeholder="Enter amount"
                            keyboardType="numeric"
                            value={amount}
                            onChangeText={setAmount}
                            placeholderTextColor="#8b8b8b"
                        />
                    </View>

                    {/* CNG Fill Date */}
                    <View className="w-full items-center">
                        <Text className="w-[88%] self-center text-start font-heading text-lg">CNG Fill Date</Text>
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <Text className="text-lg">{date.toDateString()}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Date Picker */}
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode='date'
                        onConfirm={(selectedDate) => {
                            setOpen(false);
                            setDate(selectedDate);
                        }}
                        onCancel={() => setOpen(false)}
                    />
                </View>
            </SafeAreaView>

            {/* Book Slot Button */}
            <TouchableOpacity onPress={handleBooking} className="bg-primary h-20 justify-center items-center">
                <Text className="text-white text-center text-lg font-heading">Book Slot</Text>
            </TouchableOpacity>
        </>
    );
}
