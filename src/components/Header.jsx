// components/AppHeader.js
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Bars3Icon, BellIcon} from 'react-native-heroicons/outline';

export default function AppHeader() {
  return (
    <View className="flex-row items-center justify-between px-4 py-2.5">
      {/* Left - Menu */}
      <TouchableOpacity>
        <Bars3Icon size={28} color="white" />
      </TouchableOpacity>

      {/* Right - Profile + Notification */}
      <View className="flex-row items-center gap-x-4">
        {/* Profile */}
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
            }}
            className="w-9 h-9 rounded-full"
          />
        </TouchableOpacity>

        {/* Bell with badge */}
        <TouchableOpacity className="bg-[#132A3E] p-2.5 rounded-[30px] shadow-lg shadow-black/25">
          <BellIcon size={22} color="#fff" />
          {/* Notification Dot */}
          <View className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF3B30]" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
