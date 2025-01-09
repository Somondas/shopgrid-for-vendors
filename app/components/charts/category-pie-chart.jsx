import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";

const CustomerSatisfactionBarChart = () => {
  const chartData = {
    labels: [
      "Very\nSatisfied",
      "Satisfied",
      "Neutral",
      "Dissatisfied",
      "Very\nDissatisfied",
    ],
    datasets: [
      {
        data: [40, 30, 15, 10, 5],
      },
    ],
  };

  return (
    <View
      className="mx-4 my-6 p-4"
      style={{
        shadowColor: "rgba(0, 0, 0, 1)", // Base color for shadows
        shadowOpacity: 0.23, // Dominant shadow's opacity
        shadowOffset: { width: 0, height: 10 }, // Larger shadow offset
        shadowRadius: 10, // Approximate blur for larger shadow
        borderRadius: 10,
        elevation: 12,
        height: "auto",
      }}
    >
      <Text className="font-Poppins-Light text-lg font-light my-1">
        Customer Satisfaction
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <BarChart
          data={chartData}
          //   width={Dimensions.get("window").width - 60} // Responsive width
          width={500} // Responsive width
          height={"260"}
          fromZero
          showBarTops={false}
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`, // Bar color
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
            barPercentage: 0.5, // Thinner bars
            decimalPlaces: 0,
            // Removes decimal points
            // propsForLabels: {
            //   rotation: "90deg", // Ensure labels are horizontal
            // },
          }}
          barPercentage={0.5}
          style={styles.chart}
          //   verticalLabelRotation={30} // Rotate labels for better readability
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default CustomerSatisfactionBarChart;
