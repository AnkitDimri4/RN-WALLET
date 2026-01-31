import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { styles } from "../../assets/styles/analytics.styles";
import { COLORS } from "../../constants/colors";

export default function ExpenseLineChart({ transactions = [] }) {
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return <Text style={{ textAlign: "center", marginTop: 20 }}>No data</Text>;
  }

  const screenWidth = Math.max(Dimensions.get("window").width - 60, 100);

  // Aggregate daily expenses
  const daily = {};
  transactions
    .filter(t => Number(t.amount) < 0) // expenses only
    .forEach(t => {
      const amt = Math.abs(Number(t.amount)) || 0;
      const d = new Date(t.created_at).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short", // show day + month
      });
      daily[d] = (daily[d] || 0) + amt;
    });

  const sortedDates = Object.keys(daily).sort((a, b) => new Date(a) - new Date(b));
  const sortedData = sortedDates.map(date => daily[date]);

  if (!sortedData.length) {
    return <Text style={{ textAlign: "center", marginTop: 20 }}>No expense data</Text>;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.chartTitle}>Expense Trend</Text>
      <LineChart
        data={{
          labels: sortedDates,
          datasets: [{ data: sortedData }],
        }}
        width={screenWidth}
        height={320}
        fromZero
        bezier
        chartConfig={{
          backgroundGradientFrom: COLORS.card,
          backgroundGradientTo: COLORS.card,
          decimalPlaces: 0,
          color: () => COLORS.expense,
          labelColor: () => COLORS.textLight,
          propsForDots: { r: "4", strokeWidth: "2", stroke: COLORS.expense },
        }}
      />
    </View>
  );
}
