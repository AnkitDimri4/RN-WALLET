import { View, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { styles } from "../../assets/styles/analytics.styles";
import { COLORS } from "../../constants/colors";

export default function IncomeExpenseBar({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return <Text>No data</Text>;
  }

  const income = transactions
    .filter(t => Number(t.amount) > 0)
    .reduce((a, t) => a + Number(t.amount), 0);

  const expense = transactions
    .filter(t => Number(t.amount) < 0)
    .reduce((a, t) => a + Math.abs(Number(t.amount)), 0);

  const balance = income - expense;

  if (!income && !expense) return <Text>No data</Text>;

  const screenWidth = Math.max(Dimensions.get("window").width - 60, 100);

  return (
    <View style={styles.card}>
      <Text style={styles.chartTitle}>Income • Expense • Balance</Text>

      <BarChart
        data={{
          labels: ["Income", "Expense", " Total Balance"],
          datasets: [
            {
              data: [income, expense, balance],
              colors: [
                () => COLORS.income,
                () => COLORS.expenseD,
                () => COLORS.grey,
              ],
            },
          ],
        }}
        width={screenWidth}
        height={240}
        fromZero
        withCustomBarColorFromData
        flatColor
        chartConfig={{
          backgroundGradientFrom: COLORS.card,
          backgroundGradientTo: COLORS.card,
          decimalPlaces: 0,
          color: () => COLORS.text, // fallback
          labelColor: () => COLORS.text,
        }}
        style={{ marginVertical: 8 }}
      />
    </View>
  );
}
