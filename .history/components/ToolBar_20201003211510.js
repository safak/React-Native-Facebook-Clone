import React from "react";
import styled from "styled-components/native";
import Avatar from "./Avatar";

const Container = styled.View`
  width: 100%;
  height: 92px;
`;

const Row = styled.View`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`;

const ToolBar = () => {
  return (
    <Container>
      <Row>
        <Avatar source={require("../assets/user1.jpeg")} />
        <Text>ads</Text>
      </Row>
    </Container>
  );
};

export default ToolBar;
