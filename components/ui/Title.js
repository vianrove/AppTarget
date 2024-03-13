import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "DMSans-Bold",
    fontSize: 24,
    color: Colors.primary800,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary800,
    padding: 12,
  },
});
