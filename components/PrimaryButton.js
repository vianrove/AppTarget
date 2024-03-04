import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.buttonInner, styles.pressed] : styles.buttonInner
        }
        onPress={props.pressHandler}
        android_ripple={{ color: "#a00854" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInner: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
