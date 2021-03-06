import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import styled from "styled-components/native";
import AppBar from "./components/AppBar";
import ToolBar from "./components/ToolBar";
import Users from "./components/Users";
import Story from "./components/Story";
import Feed from "./components/Feed";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Container = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <Feed />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
