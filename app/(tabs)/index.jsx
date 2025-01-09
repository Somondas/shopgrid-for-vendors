import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
import RevenueChart from "../components/charts/Todal-Money-Made";
import CustomerSatisfactionChart from "../components/charts/category-pie-chart";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Navbar />
          <Text className="font-Poppins-Light text-2xl py-3 px-2">
            Sales Overview
          </Text>
          {/* Revenue Chart */}
          <RevenueChart />
          {/* {/* Category Chart */}
          <CustomerSatisfactionChart />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
