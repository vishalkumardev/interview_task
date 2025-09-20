import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ClientCard from '../ClientCard';

const Client = () => {
  const clients = [
    {
      id: 1,
      name: 'Ranjan Kumar',
      datetime: '26 / 01 / 2024 3:00 PM - 5:00 PM',
      tags: ['Immigration', '3 Guests', 'Online'],
    },
    {
      id: 2,
      name: 'Amit Sharma',
      datetime: '27 / 01 / 2024 11:00 AM - 1:00 PM',
      tags: ['Corporate', '2 Guests'],
    },
    {
      id: 3,
      name: 'Neha Gupta',
      datetime: '28 / 01 / 2024 4:00 PM - 6:00 PM',
      tags: ['Civil', '1 Guest'],
    },
    {
      id: 4,
      name: 'Arjun Mehta',
      datetime: '29 / 01 / 2024 10:00 AM - 12:00 PM',
      tags: ['Criminal', '4 Guests'],
    },
    {
      id: 5,
      name: 'Priya Singh',
      datetime: '30 / 01 / 2024 2:00 PM - 4:00 PM',
      tags: ['Immigration', '2 Guests'],
    },
  ];

  return (
    <FlatList
      horizontal
      data={clients}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return <ClientCard key={item.id} client={item} />;
      }}
      className="mt-6 px-4"
    />
  );
};

export default Client;

const styles = StyleSheet.create({});
