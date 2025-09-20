// AppointmentsHearings.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  MapPinIcon,
  UserCircleIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

const AppointmentsHearings = () => {
  const navigation = useNavigation();

  const hearings = [
    {
      id: 1,
      date: '6/10/2025 8:30 AM',
      client: 'Karanvir Singh',
      caseId: '246603589',
      location: 'Federal Plaza',
      lawyer: 'Dalbir Singh',
      staff: 'Jashan Bhatti',
      type: 'Internet Based',
    },
    {
      id: 2,
      date: '6/10/2025 8:30 AM',
      client: 'Karanvir Singh',
      caseId: '246603589',
      location: 'Federal Plaza',
      lawyer: 'Dalbir Singh',
      staff: 'Jashan Bhatti',
      type: 'Internet Based',
    },
  ];

  return (
    <View className="flex-1 bg-[#0B1C2C] pt-12">
      {/* Top Navbar */}
      <View className="flex-row items-center justify-between px-4">
        <Bars3Icon size={28} color="white" />
        <View className="flex-row space-x-4 items-center">
          <UserCircleIcon size={28} color="white" />
          <View className="relative">
            <BellIcon size={28} color="white" />
            <View className="absolute top-0 right-0 w-2 h-2 rounded-full bg-pink-500" />
          </View>
        </View>
      </View>

      {/* Search */}
      <View className="px-4 mt-4">
        <View className="flex-row items-center bg-[#132A3E] rounded-xl px-3 py-2">
          <MagnifyingGlassIcon size={20} color="white" />
          <TextInput
            placeholder="Search Clients & Cases"
            placeholderTextColor="#94A3B8"
            className="ml-2 text-white flex-1"
          />
        </View>
      </View>

      {/* Appointment Card */}
      <ScrollView
        className="mt-6 px-4"
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View className="w-72 bg-gradient-to-r from-teal-600 to-yellow-600 rounded-xl p-4 mr-4">
          <Text className="text-white font-bold text-lg">Ranjan Kumar</Text>
          <Text className="text-gray-200 text-sm mt-1">
            26 / 01 / 2024 3:00 PM - 5:00 PM
          </Text>
          <View className="flex-row space-x-2 mt-3">
            <Text className="px-3 py-1 bg-white/20 rounded-md text-white text-sm">
              Immigration
            </Text>
            <Text className="px-3 py-1 bg-white/20 rounded-md text-white text-sm">
              3 Guest
            </Text>
            <Text className="px-3 py-1 bg-white/20 rounded-md text-white text-sm">
              Online
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Hearings Section */}
      <Text className="text-white font-bold text-lg mt-6 px-4">Hearings</Text>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <View className="flex-row flex-wrap justify-between px-4 mt-4">
          {hearings.map(item => (
            <View
              key={item.id}
              className="w-[48%] bg-[#132A3E] rounded-xl p-4 mb-4">
              <View className="flex-row items-center">
                <CalendarDaysIcon size={18} color="orange" />
                <Text className="text-white text-sm ml-2">{item.date}</Text>
              </View>
              <Text className="text-teal-400 font-semibold mt-2">
                {item.client}
              </Text>
              <Text className="text-gray-400 text-xs">{item.caseId}</Text>

              <View className="flex-row items-center mt-2">
                <MapPinIcon size={16} color="white" />
                <Text className="text-gray-300 text-xs ml-1">
                  {item.location}
                </Text>
              </View>

              <View className="flex-row items-center mt-3">
                <UserCircleIcon size={20} color="white" />
                <View className="ml-2">
                  <Text className="text-white text-sm">{item.lawyer}</Text>
                  <Text className="text-gray-400 text-xs">{item.staff}</Text>
                </View>
              </View>

              <Text className="text-yellow-400 text-xs mt-3">
                IH • {item.type}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#00FF9D] items-center justify-center"
        onPress={() => navigation.navigate('AddAppointment')}>
        <PlusIcon size={28} color="black" />
      </TouchableOpacity>

      {/* Bottom Navbar */}
      <View className="absolute bottom-0 left-0 right-0 bg-[#0B1C2C] flex-row justify-around py-3 border-t border-gray-700">
        <TouchableOpacity>
          <View className="items-center">
            <View className="w-6 h-6 bg-gray-400 rounded" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="items-center">
            <View className="w-6 h-6 bg-gray-400 rounded" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="items-center">
            <View className="w-6 h-6 bg-yellow-500 rounded" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="items-center">
            <View className="w-6 h-6 bg-gray-400 rounded" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppointmentsHearings;
