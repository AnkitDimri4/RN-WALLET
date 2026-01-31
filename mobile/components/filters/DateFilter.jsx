import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../../assets/styles/analytics.styles";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function DateFilter({
  years = [],
  selectedMonth,
  selectedYear,
  onMonthChange,
  onYearChange,
}) {
  return (
    <View style={styles.card}>
      {/* Year Selector */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {years.map((y) => {
          const active = selectedYear === y;
          return (
            <TouchableOpacity
              key={y}
              onPress={() => onYearChange(active ? null : y)}
              style={[styles.switchBtnYear, active && styles.switchBtnActive1]}
            >
              <Text style={[styles.switchText, active && styles.switchTextActive]}>
                {y}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Month Selector */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
        {months.map((m, i) => {
          const active = selectedMonth === i;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => onMonthChange(active ? null : i)}
              style={[styles.switchBtn1, active && styles.switchBtnActive1]}
            >
              <Text style={[styles.switchText, active && styles.switchTextActive]}>
                {m}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
