import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Table from "./table";

export default function App() {
  const [onGoing, setOngoing] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
  const [roundCounter, setRoundCounter] = useState(0);
  const [scoreValues, setScoreValues] = useState(["", "", "", ""]);
  const [scoreValuesArray, setScoreValuesArray] = useState([]);
  const [players, setPlayers] = useState(["", "", "", ""]);

  const handleScoreValues = (text, index) => {
    const updatedScore = [...scoreValues];
    updatedScore[index] = text;
    setScoreValues(updatedScore);
  };

  const handelPlayerText = (text, index) => {
    const playersData = [...players];
    playersData[index] = text;
    setPlayers(playersData);
  };

  const savePlayers = () => {
    setOngoing(!onGoing);
    // console.log(players);
  };

  const increaseCounter = () => {
    if (roundCounter <= 3) {
      setRoundCounter(roundCounter + 1);
    }
    const saveData = [...scoreValuesArray, scoreValues];
    setScoreValuesArray(saveData);
    setScoreValues(["", "", "", ""]);
    // console.log(scoreValuesArray);
  };

  const finalResult = () => {
    const result = [];
    // console.log(scoreValuesArray);
    setDisplayResult(true);
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        {onGoing ? (
          <View>
            {displayResult ? (
              <View style={{ flex: 1 }}>
                <View style={styles.title}>
                  <Text style={styles.titleText}>Call Break Counter!</Text>
                  <Image
                    source={require("./assets/card.jpg")}
                    style={styles.headerImage}
                  />
                </View>
                <View style={{ flex: 5 }}>
                  <Table props={scoreValuesArray} propsPlayer={players} />
                </View>
              </View>
            ) : (
              <View style={{ flex: 1 }}>
                <View style={styles.title}>
                  <Text style={styles.titleText}>Call Break Counter!</Text>
                  <Image
                    source={require("./assets/card.jpg")}
                    style={styles.headerImage}
                  />
                </View>
                <View
                  style={{
                    flex: 5,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                        borderWidth: 2,
                        borderRadius: 6,
                        padding: 5,
                        alignItems: "center",
                      }}
                    >
                      Round {roundCounter + 1}
                    </Text>
                  </View>
                  <View style={{ padding: 20 }}>
                    {scoreValues.map((value, index) => (
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        key={index}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {players[index]}
                        </Text>
                        <TextInput
                          key={index}
                          style={styles.scoreInput}
                          value={value}
                          onChangeText={(text) =>
                            handleScoreValues(text, index)
                          }
                        />
                      </View>
                    ))}
                  </View>

                  {/* <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    flexWrap: "wrap",
                    padding: 10,
                  }}
                >
                  <Text
                    style={{ fontWeight: "bold", justifyContent: "center" }}
                  >
                    {player1}
                  </Text>
                  <TextInput style={styles.scoreInput} />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    flexWrap: "wrap",
                    padding: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{player2}</Text>
                  <TextInput style={styles.scoreInput} />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    flexWrap: "wrap",
                    padding: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{player3}</Text>
                  <TextInput style={styles.scoreInput} />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    flexWrap: "wrap",
                    padding: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{player4}</Text>
                  <TextInput style={styles.scoreInput} />
                </View>
              </View> */}
                </View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  {roundCounter == 4 ? (
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        finalResult();
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 20 }}>
                        Final result
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => increaseCounter()}
                    >
                      <Text style={{ color: "white", fontSize: 20 }}>
                        Save Data
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            )}
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.title}>
              <Text style={styles.titleText}>Call Break Counter!</Text>
              <Image
                source={require("./assets/card.jpg")}
                style={styles.headerImage}
              />
            </View>
            <View style={{ flex: 5 }}>
              <View style={styles.player}>
                <Text style={styles.playerText}>1st Player Name: </Text>
                <TextInput
                  style={styles.playerInput}
                  placeholder="1st player Name"
                  onChangeText={(text) => handelPlayerText(text, 0)}
                />
              </View>
              <View style={styles.player}>
                <Text style={styles.playerText}>2nd Player Name: </Text>
                <TextInput
                  style={styles.playerInput}
                  placeholder="2nd player Name"
                  onChangeText={(text) => handelPlayerText(text, 1)}
                />
              </View>
              <View style={styles.player}>
                <Text style={styles.playerText}>3rd Player Name: </Text>
                <TextInput
                  style={styles.playerInput}
                  placeholder="3rd player Name"
                  onChangeText={(text) => handelPlayerText(text, 2)}
                />
              </View>
              <View style={styles.player}>
                <Text style={styles.playerText}>4th Player Name: </Text>
                <TextInput
                  style={styles.playerInput}
                  placeholder="4th player Name"
                  onChangeText={(text) => handelPlayerText(text, 3)}
                />
              </View>
            </View>
            {/* <View style={{ flex: 5 }}>
              <Text>{console.log(players)}</Text>
              {players.map((value, index) => {
                <View key={index} style={styles.player}>
                  <Text style={styles.playerText}>Player Name:</Text>
                  <TextInput
                    key={index}
                    style={styles.playerInput}
                    onChangeText={(value) => {
                      handelPlayerText(value, index);
                    }}
                  />
                </View>;
              })}
            </View> */}
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => savePlayers()}
              >
                <Text style={{ color: "white", fontSize: 20 }}>
                  Save Players
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 70,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  playerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  player: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  playerInput: {
    height: 40,
    width: "80%",
    padding: 10,
    margin: 5,
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 2,
  },
  scoreInput: {
    height: 40,
    width: "auto",
    padding: 10,
    margin: 5,
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 2,
  },
  scoreInput: {
    height: 40,
    padding: 10,
    margin: 5,
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 2,
  },
  headerImage: {
    height: 100,
    width: 220,
  },
  button: {
    height: 40,
    width: "50%",
    borderRadius: 6,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
});
