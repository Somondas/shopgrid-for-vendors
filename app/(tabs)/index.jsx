import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import RevenueChart from "../components/Todal-Money-Made";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Navbar />
        <Text>Sales Overview</Text>
        <RevenueChart />
      </View>
    </SafeAreaView>
  );
};

export default index;
