import React from "react";
import { FlatList, Text } from "react-native";
import PostItem from "./PostItem";
import AppBar from "./AppBar";
import ToolBar from "./ToolBar";
import Users from "./Users";
import Story from "./Story";
import { useSelector } from "react-redux";

const Feed = () => {
  const posts = useSelector((store) => store);
  console.log(posts)
  return (
    <Text>asd</Text>
  );
};

export default Feed;
