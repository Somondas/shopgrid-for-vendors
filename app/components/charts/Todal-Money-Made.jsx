import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import COLORS from "../../constants/COLORS";

const screenWidth = Dimensions.get("window").width;
const RevenueChart = () => {
  return (
    <View
      className="mx-4 p-4"
      style={{
        shadowColor: "rgba(0, 0, 0, 1)", // Base color for shadows
        shadowOpacity: 0.23, // Dominant shadow's opacity
        shadowOffset: { width: 0, height: 10 }, // Larger shadow offset
        shadowRadius: 10, // Approximate blur for larger shadow
        borderRadius: 10,
        elevation: 12,
      }}
    >
      <Text
        style={{
          fontFamily: "Poppins-Light",
        }}
        className="text-lg font-light my-1"
      >
        Total Money Made
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Light",
        }}
        className="text-xl font-bold my-1"
      >
        &#8377;32,455
      </Text>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [500, 1000, 3455, 7878, 439, 7800],
            },
          ],
        }}
        width={screenWidth - 60} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "rgb(28, 201, 16)",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          color: (opacity = 1) => `rgba(28, 201, 16n, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            fill: COLORS.primary,
          },
          fillShadowGradientFrom: COLORS.primary,
          fillShadowGradientTo: "rgb(10, 212, 10)", // Fill gradient for the area under the curve
          fillShadowGradientOpacity: 0.5,
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default RevenueChart;

const styles = StyleSheet.create({});
