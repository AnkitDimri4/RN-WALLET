import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../../assets/styles/analytics.styles";
import DateFilter from "../../components/filters/DateFilter";
import ExpenseLineChart from "../../components/charts/ExpenseLineChart";
import IncomeExpenseBar from "../../components/charts/IncomeExpenseBar";
import CategoryPieChart from "../../components/charts/CategoryPieChart";
import { PageLoader } from "../../components/PageLoader";

import { useTransactions } from "../../hooks/useTransactions";

export default function AnalyticsPage() {
  const { user } = useUser();
  const router = useRouter();

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [chart, setChart] = useState("bar");

  const { transactions, isLoading, loadData } = useTransactions(user.id);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Extract available years safely
  const years = useMemo(() => {
    if (!transactions.length) return [new Date().getFullYear()];

    return [
      ...new Set(
        transactions.map((t) =>
          new Date(t.created_at).getFullYear()
        )
      ),
    ].sort((a, b) => b - a);
  }, [transactions]);

  // Filter by year & month
  const filtered = useMemo(() => {
    return transactions.filter((t) => {
      const date = new Date(t.created_at);

      return (
        (selectedYear === null || date.getFullYear() === selectedYear) &&
        (selectedMonth === null || date.getMonth() === selectedMonth)
      );
    });
  }, [transactions, selectedYear, selectedMonth]);

  if (isLoading) return <PageLoader />;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 20 }}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#4F6F52" />
        </TouchableOpacity>

        <Text style={styles.title}>Analytics</Text>

        <TouchableOpacity onPress={loadData}>
          <Text style={{ color: "#4F6F52" }}>Refresh</Text>
        </TouchableOpacity>
      </View>

      {/* Date Filter */}
      <DateFilter
        years={years}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        onMonthChange={setSelectedMonth}
        onYearChange={(year) => {
          setSelectedYear(year);
          setSelectedMonth(null); // reset month on year change
        }}
      />

      {/* Chart Switch */}
      <View style={styles.switchRow}>
        {["bar", "line", "pie"].map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => setChart(t)}
            style={[
              styles.switchBtn,
              chart === t && styles.switchBtnActive,
            ]}
          >
            <Text
              style={[
                styles.switchText,
                chart === t && styles.switchTextActive,
              ]}
            >
              {t.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Charts */}
      {chart === "bar" && (
        <IncomeExpenseBar transactions={filtered} />
      )}
      {chart === "line" && (
        <ExpenseLineChart transactions={filtered} />
      )}
      {chart === "pie" && (
        <CategoryPieChart transactions={filtered} />
      )}
    </ScrollView>
  );
}
