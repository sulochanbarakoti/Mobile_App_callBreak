import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RNRestart from "react-native-restart";

const Table = ({ props, propsPlayers }) => {
  const arrayOfArrays = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [7, 8, 9, 8],
    [7, 8, 9, 8],
  ];
  //   const arrayOfArrays = props;

  const RestartButton = () => {
    const handleRestart = () => {
      RNRestart.Restart();
    };
  };

  const name = propsPlayers;
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.cellHeader}>{name[0]}</Text>
        <Text style={styles.cellHeader}>{name[1]}</Text>
        <Text style={styles.cellHeader}>{name[2]}</Text>
        <Text style={styles.cellHeader}>{name[3]}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{arrayOfArrays[0][0]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[0][1]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[0][2]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[0][3]}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{arrayOfArrays[1][0]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[1][1]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[1][2]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[1][3]}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{arrayOfArrays[2][0]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[2][1]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[2][2]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[2][3]}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{arrayOfArrays[3][0]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[3][1]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[3][2]}</Text>
        <Text style={styles.cell}>{arrayOfArrays[3][3]}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellResult}>
          {arrayOfArrays[0][0] +
            arrayOfArrays[1][0] +
            arrayOfArrays[2][0] +
            arrayOfArrays[3][0]}
        </Text>
        <Text style={styles.cellResult}>
          {arrayOfArrays[0][1] +
            arrayOfArrays[1][1] +
            arrayOfArrays[2][1] +
            arrayOfArrays[3][1]}
        </Text>
        <Text style={styles.cellResult}>
          {" "}
          {arrayOfArrays[0][2] +
            arrayOfArrays[1][2] +
            arrayOfArrays[2][2] +
            arrayOfArrays[3][2]}
        </Text>
        <Text style={styles.cellResult}>
          {" "}
          {arrayOfArrays[0][3] +
            arrayOfArrays[1][3] +
            arrayOfArrays[2][3] +
            arrayOfArrays[3][3]}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={RestartButton()} style={styles.button}>
          <Text style={{ color: "white", fontSize: 20 }}>Restart Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cellHeader: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  cellResult: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#694fad",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: 50,
    borderRadius: 5,
  },
});

export default Table;
