import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import ProfileCover from "../components/ProfileCover";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: coral;
`;

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <Container>
      <ProfileCover user={user} />
    </Container>
  );
};

export default ProfileScreen;
