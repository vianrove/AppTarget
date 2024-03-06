import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary800,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary800,
    padding: 12,
  },
});
