import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HearingsCard from '../HearingCard';

const Hearing = () => {
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
      date: '7/10/2025 10:00 AM',
      client: 'Rohit Mehta',
      caseId: '589642331',
      location: 'High Court',
      lawyer: 'Simran Kaur',
      staff: 'Harpreet Singh',
      type: 'Offline',
    },
    {
      id: 3,
      date: '9/10/2025 11:30 AM',
      client: 'Neha Sharma',
      caseId: '874562199',
      location: 'District Court',
      lawyer: 'Anil Kapoor',
      staff: 'Rajiv Menon',
      type: 'Internet Based',
    },
    {
      id: 4,
      date: '12/10/2025 2:00 PM',
      client: 'Arjun Verma',
      caseId: '963521478',
      location: 'Federal Plaza',
      lawyer: 'Ritika Malhotra',
      staff: 'Aman Gupta',
      type: 'Offline',
    },
    {
      id: 5,
      date: '12/10/2025 2:00 PM',
      client: 'Arjun Verma',
      caseId: '963521478',
      location: 'Federal Plaza',
      lawyer: 'Ritika Malhotra',
      staff: 'Aman Gupta',
      type: 'Offline',
    },
    {
      id: 6,
      date: '12/10/2025 2:00 PM',
      client: 'Arjun Verma',
      caseId: '963521478',
      location: 'Federal Plaza',
      lawyer: 'Ritika Malhotra',
      staff: 'Aman Gupta',
      type: 'Offline',
    },
    {
      id: 7,
      date: '12/10/2025 2:00 PM',
      client: 'Arjun Verma',
      caseId: '963521478',
      location: 'Federal Plaza',
      lawyer: 'Ritika Malhotra',
      staff: 'Aman Gupta',
      type: 'Offline',
    },
  ];
  return (
    <View contentContainerStyle={{paddingBottom: 100}}>
      <Text className="text-white font-bold text-lg mt-2 px-4">Hearings</Text>

      <FlatList
        numColumns={2}
        data={hearings}
        showsHorizontalScrollIndicator={false}
        className="mt-4 px-2"
        renderItem={({item}) => {
          return <HearingsCard key={item.id} hearing={item} />;
        }}
      />
    </View>
  );
};

export default Hearing;

const styles = StyleSheet.create({});
