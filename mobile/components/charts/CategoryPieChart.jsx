import React from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { styles } from "../../assets/styles/analytics.styles";
import { COLORS } from "../../constants/colors";

export default function CategoryPieChart({ transactions = [] }) {
  const screenWidth = Math.max(Dimensions.get("window").width - 42, 130);
  const responsiveFontSize = Math.max(9, Math.min(8, screenWidth / 18));

  if (!Array.isArray(transactions) || transactions.length === 0) {
    return <Text style={{ textAlign: "center", marginTop: 20 }}>No data</Text>;
  }

  // ---------- totals ----------
  const income = transactions
    .filter((t) => Number(t.amount) > 0)
    .reduce((a, t) => a + Number(t.amount), 0);

  const expenses = transactions.filter((t) => Number(t.amount) < 0);

  const totalExpense = expenses.reduce(
    (a, t) => a + Math.abs(Number(t.amount)),
    0,
  );

  const balance = income - totalExpense;

  if (expenses.length === 0) {
    return (
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        No expense data
      </Text>
    );
  }

  // ------ category aggregation -----
  const categoryTotals = {};
  expenses.forEach((t) => {
    const amount = Math.abs(Number(t.amount)) || 0;
    const category = t.category || "Other";
    if (amount > 0) {
      categoryTotals[category] = (categoryTotals[category] || 0) + amount;
    }
  });

  const themeColors = [
    COLORS.expenseD,
    COLORS.name,
    COLORS.expense,
    COLORS.primary,
    COLORS.pieG,
    COLORS.text,
    COLORS.textLight,
    COLORS.border,
  ];

  const data = Object.keys(categoryTotals).map((key, i) => ({
    name: key,
    amount: categoryTotals[key],
    color: themeColors[i % themeColors.length],
    legendFontColor: COLORS.text,
    legendFontSize: responsiveFontSize,
  }));

  return (
    <View style={styles.card}>
      <Text style={styles.chartTitle}>Category Breakdown</Text>

      {/* Summary */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: COLORS.expense, fontWeight: "800", }}>
          Expense: ₹{totalExpense.toFixed(0)}
        </Text>
        <Text
          style={{
            color: balance >= 0 ? COLORS.income : COLORS.expense,
            fontWeight: "800",
          }}
        >
          Balance: ₹{balance.toFixed(0)}
        </Text>
      </View>

      {/* Pie Chart */}
      <PieChart
        data={data}
        width={screenWidth}
        height={250}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="8"
        absolute
        chartConfig={{
          backgroundGradientFrom: COLORS.card,
          backgroundGradientTo: COLORS.card,
          color: (_, index) => data[index]?.color || COLORS.expense,
          labelColor: () => COLORS.text,
        }}
      />
    </View>
  );
}
