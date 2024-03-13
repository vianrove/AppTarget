import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/Colors";

function LogItem({ guessNumber, roundNumber }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>CPU guessed {guessNumber} in round #{roundNumber}</Text>
    </View>
  );
}

export default LogItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 8,
  },
  itemText: {
    fontFamily: "DMSans-Regular",
    color: Colors.secondary500,
  },
});
