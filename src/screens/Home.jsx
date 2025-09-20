import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppHeader from '../components/Header';
import SearchBar from '../components/Search';
import Client from '../components/home/Client';
import Hearing from '../components/home/Hearing';

const Home = () => {
  return (
    <View className="flex-1  bg-[#0B1C2C]">
      <AppHeader />
      <ScrollView>
        <SearchBar />
        <Client />
        <Hearing />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
