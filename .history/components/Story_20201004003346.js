import React from "react";
import { FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import StoryItem from "./StoryItem";

const Container = styled.View`
  width: 100%;
  height: 192px;
  flex-direction: row;
  align-items: center;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f0f0;
`;

const stories = [
  {
    id: 1,
    user: {
      id: 1,
      username: "John Doe",
      profilePicture:
        "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 1,
      photo:
        "https://images.pexels.com/photos/3772771/pexels-photo-3772771.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 2,
    user: {
      id: 2,
      username: "Jane Doe",
      profilePicture:
        "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 2,
      photo:
        "https://images.pexels.com/photos/4557877/pexels-photo-4557877.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 3,
    user: {
      id: 3,
      username: "Jane Doe",
      profilePicture:
        "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 3,
      photo:
        "https://images.pexels.com/photos/4557877/pexels-photo-4557877.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 4,
    user: {
      id: 4,
      username: "Jane Doe",
      profilePicture:
        "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 4,
      photo:
        "https://images.pexels.com/photos/4557877/pexels-photo-4557877.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 5,
    user: {
      id: 5,
      username: "Jane Doe",
      profilePicture:
        "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 5,
      photo:
        "https://images.pexels.com/photos/4557877/pexels-photo-4557877.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 6,
    user: {
      id: 6,
      username: "Jane Doe",
      profilePicture:
        "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    story: {
      id: 6,
      photo:
        "https://images.pexels.com/photos/4557877/pexels-photo-4557877.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
];

const Story = () => {
  return (
    <>
      <Container>
        <FlatList
          data={stories}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<PostItem/>}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <StoryItem item={item} />}
        />
        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <StoryItem />
          <StoryItem friends />
        </ScrollView> */}
      </Container>
      <BottomDivider />
    </>
  );
};

export default Story;
