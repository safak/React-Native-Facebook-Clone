import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Avatar from "./Avatar";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;

const Time = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #747476;
`;

const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;

const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;

const Footer = styled.View`
  padding: 0 11px;
`;

const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const IconCount = styled.View`
  background: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;

const Seperator = styled.View`
  width: 100%;
  height: 1px;
  background: #f9f9f9;
`;

const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;

const Icon = styled.View`
  margin-right: 6px;
`;

const Text = styled.Text`
  font-size: 12px;
  color: #424040;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f0f0;
`;

const PostItem = ({ item }) => {
  const [likeCounter, setLikeCounter] = useState(item.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikeCounter(liked ? likeCounter - 1 : likeCounter + 1);
    setLiked(!liked);
  };

  return (
    <Container>
      <Header>
        <Row>
          <Avatar source={item?.user?.profilePicture} />
          <View style={{ paddingLeft: 10 }}>
            <User>{item.user.username}</User>
            <Row>
              <Time>{item.post.date}</Time>
              <Entypo name="dot-single" size={12} color="#747476" />
              <Entypo name="globe" size={10} color="#747476" />
            </Row>
          </View>
        </Row>
        <Entypo name="dots-three-horizontal" size={15} color="#222121" />
      </Header>
      <Post>{item.post.desc}</Post>
      <Photo source={{ uri: item?.post?.photo }} />
      <Footer>
        <FooterCount>
          <Row>
            <IconCount>
              <AntDesign name="like1" size={12} color="#FFFFFF" />
            </IconCount>
            <TextCount>{likeCounter} Likes</TextCount>
          </Row>
          <TextCount>{item.comments} Comments</TextCount>
        </FooterCount>
        <Seperator />
        <FooterMenu>
          <Button onPress={handleLike}>
            <Icon>
              {liked ? (
                <AntDesign name="like1" size={20} color="#1878f3" />
              ) : (
                <AntDesign name="like2" size={20} color="#424040" />
              )}
            </Icon>
            <Text>Like</Text>
          </Button>
          <Button>
            <Icon>
              <MaterialCommunityIcons
                name="comment-outline"
                size={20}
                color="#424040"
              />
            </Icon>
            <Text>Comment</Text>
          </Button>
          <Button>
            <Icon>
              <MaterialCommunityIcons
                name="share-outline"
                size={20}
                color="#424040"
              />
            </Icon>
            <Text>Share</Text>
          </Button>
        </FooterMenu>
      </Footer>
      <BottomDivider />
    </Container>
  );
};

export default PostItem;
