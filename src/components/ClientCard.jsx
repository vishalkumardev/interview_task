// components/ClientCard.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function ClientCard({client}) {
  return (
    <TouchableOpacity activeOpacity={0.8} className="mr-4 h-40 w-80">
      <LinearGradient
        colors={['#0891b2', '#f59e0b']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          borderRadius: 5,
        }}>
        <View className="p-4">
          {/* Client Name */}
          <Text className="text-white font-bold text-lg">{client.name}</Text>

          {/* Date & Time */}
          <Text className="text-gray-200 text-sm mt-1">{client.datetime}</Text>

          {/* Tags */}
          <View className="flex-row flex-wrap mt-3">
            {client.tags.map((tag, index) => (
              <Text
                key={index}
                className="px-3 py-1 bg-white/20 rounded-md text-white text-sm mr-2 mb-2">
                {tag}
              </Text>
            ))}
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
