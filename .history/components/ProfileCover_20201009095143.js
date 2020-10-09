import React from "react";
import styled from "styled-components/native";
import window from "../Layout";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const CoverPhoto = styled.Image`
  width: 100%;
  height: 200px;
`;

const ProfilePhoto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border-width: 1px;
  border-color: white;
  position: absolute;
  top: 150px;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 50px;
`;

const ProfileCover = ({ user }) => {
  console.log(user);
  return (
    <Container>
      <CoverPhoto
        source={{
          uri:
            "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        }}
      />
      <ProfilePhoto
        source={{
          uri:
            "https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        }}
      />
      <Name>{user.username}</Name>
    </Container>
  );
};

export default ProfileCover;
