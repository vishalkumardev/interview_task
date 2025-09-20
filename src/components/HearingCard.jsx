// components/HearingsCard.js
import React from 'react';
import {View, Text} from 'react-native';
import {
  CalendarDaysIcon,
  MapPinIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline';

export default function HearingsCard({hearing}) {
  return (
    <View className="w-[48%] bg-[#132A3E] rounded-xl p-4 mb-4 mx-[1.5%]">
      {/* Date & Time */}
      <View className="flex-row items-center">
        <CalendarDaysIcon size={18} color="orange" />
        <Text className="text-white text-sm ml-2">{hearing.date}</Text>
      </View>

      {/* Client */}
      <Text className="text-teal-400 font-semibold mt-2">{hearing.client}</Text>
      <Text className="text-gray-400 text-xs">{hearing.caseId}</Text>

      {/* Location */}
      <View className="flex-row items-center mt-2">
        <MapPinIcon size={16} color="white" />
        <Text className="text-gray-300 text-xs ml-1">{hearing.location}</Text>
      </View>

      {/* Lawyer + Staff */}
      <View className="flex-row items-center mt-3">
        <UserCircleIcon size={20} color="white" />
        <View className="ml-2">
          <Text className="text-white text-sm">{hearing.lawyer}</Text>
          <Text className="text-gray-400 text-xs">{hearing.staff}</Text>
        </View>
      </View>

      {/* Hearing Type */}
      <Text className="text-yellow-400 text-xs mt-3">IH • {hearing.type}</Text>
    </View>
  );
}
