import { StyleSheet } from "react-native";

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
  buttonDanger: string,
}

export const colors: ThemeColors = {
  primary: "#5856D6",
  text: "black",

  background: "#F3F2F7",
  cardBackground: "white",
  buttonTextColor: "white",
  buttonDanger:"#CD5C5C",
};

export const ligthColors: ThemeColors = {
  primary: "#5856D6",
  text: "black",

  background: "#F3F2F7",
  cardBackground: "white",
  buttonTextColor: "white",
  buttonDanger:"#CD5C5C",
};

export const darkColors: ThemeColors = {
  primary: "#5856D6",
  text: "white",

  background: "#090909",
  cardBackground: "#2d2d2d",
  buttonTextColor: "white",
  buttonDanger:"#800E13",
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // color: colors.text,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor:'none'
    // color: colors.text,
  },
  input:{
    height:40,
    margin:12,
    borderWidth:1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    // color: colors.text,
    paddingHorizontal: 10
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: colors.background,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnPrimary: {
    // backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  btnPrimaryText: {
    // color: colors.text,
    fontSize: 16,
  },
});