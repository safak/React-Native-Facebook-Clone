import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 58px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Button = styled.Button`
  width: 42;
  height: 42;
  border-radius: 21px;
  background: #eeeeee;
  align-items: center;
`;

const Text = styled.Text`
  color: #3a86e9;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const AppBar = () => {
  return (
    <Container>
      <Text>hello</Text>
    </Container>
  );
};

export default AppBar;
