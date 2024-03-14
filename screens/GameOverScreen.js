import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import Colors from "../constants/Colors";

import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screenContainer}>
      <Title>Game over! </Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Card>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber} </Text>
        </Text>
      </Card>
      <PrimaryButton onPress={onStartNewGame}>Start new game </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: deviceWidth < 380 ? 150 : 300,
    width: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "DMSans-Regular",
    color: Colors.secondary500,
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "DMSans-Bold",
    color: Colors.primary500,
  },
});
