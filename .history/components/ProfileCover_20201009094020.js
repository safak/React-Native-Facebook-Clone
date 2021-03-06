import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;

const Container = styled.View`
  flex: 1;
`;

const CoverPhoto = styled.Image`
  width: 100%;
  height: 250px;
`;

const ProfilePhoto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: absolute;
  top: 60px;
`;

const ProfileCover = () => {
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
    </Container>
  );
};

export default ProfileCover;
