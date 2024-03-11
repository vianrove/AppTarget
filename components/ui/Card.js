import { View, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function Card({ children }) {
  return <View style = {styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    marginTop: 32,
    backgroundColor: Colors.primary800,
    marginHorizontal: 27,
    borderRadius: 15,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
