import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors.js";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 12,
  },
  switchRow: {
    flexDirection: "row",
    marginBottom: 16,
    
  },
  switchBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  switchBtnYear: {
    flex: 1,
     width: 55,
    paddingVertical: 10,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  switchBtn1: {
    width: "14%",
    marginBottom:5,
    paddingVertical: 10,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  switchBtnActive: {
    backgroundColor: COLORS.primary,
  },
  switchBtnActive1: {
    backgroundColor: COLORS.primary,
    width: 53,
  },
  switchText: {
    fontSize: 13,
    fontWeight: "500",
    color: COLORS.text,
  },
  switchTextActive: {
    color: COLORS.white,
  },
});
