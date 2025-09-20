import {Text, View} from 'react-native';
import React from 'react';

const Coming = () => {
  return (
    <View className="flex-1 bg-slate-800 justify-center items-center px-5">
      <View className="bg-[#132A3E] rounded-2xl p-6 items-center shadow-lg">
        <Text className="text-2xl font-bold text-yellow-400 mb-2">
          🚀 Coming Soon
        </Text>
        <Text className="text-base text-gray-300 text-center leading-6">
          We are working hard to deploy faster and bring you this feature.
        </Text>
      </View>
    </View>
  );
};

export default Coming;
