// components/SearchBar.js
import React from 'react';
import {View, TextInput} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';

export default function SearchBar() {
  return (
    <View className="px-4 mt-4">
      <View className="flex-row items-center bg-[#132A3E] rounded-xl px-3 py-3">
        <MagnifyingGlassIcon size={20} color="white" />
        <TextInput
          placeholder="Search Clients & Cases"
          placeholderTextColor="#94A3B8"
          className="ml-2 text-white flex-1 text-sm"
        />
      </View>
    </View>
  );
}
