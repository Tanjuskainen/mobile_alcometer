import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const LightStyle = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 5,
    backgroundColor: "#FFEEAA", 
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFC04A", 
  },
});

const DarkStyle = StyleSheet.create({
  container: {
    ...LightStyle.container,
    backgroundColor: "#ed750d", 
  },
});

export { DarkStyle, LightStyle };

export default StyleSheet.create({
  header: {
    fontSize: 24,
    color: "#303030", 
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#FFC04A", 
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },

  label: {
    color: "#303030", 
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },

  NumericInput: {
    borderRadius: 5,
    padding: 10,
  },

  button: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#5BC0E9",
    padding: 10,
    color: "#FFFFFF",
    textAlign: "center",
  },

  thumbEnabledColor: "#1b0a69",
  thumbDisabledColor: "#410c0c",
  containerColorLight: "rgba(0, 0, 0, 0.55)",
  containerColorDark: "rgba(5, 127, 129, 0.29)",
});
