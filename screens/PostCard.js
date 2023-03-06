import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {
  
  constructor(props){
    super(props)
    this.state={

    }
  }

    render() {
        return (
          <TouchableOpacity
          styles={(styles.container)}
          onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              post: this.props.post
            })
          }
          >
                <View style={(styles.cardContainer)} >
                    <View style={(styles.authorContainer)} >
                        <View style={(styles.authorImageContainer)} >
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={(styles.profileImage)}
                           ></Image>
                        </View>
                        <View style={(styles.authorNameContainer)}>
                            <Text style={styles.authorNameText}> {this.props.post.author} </Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postimage} />
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"}
                                size={RFValue(30)}
                                color={"white"}
                            />
                            <Text style={styles.LikeText}>12k</Text>
                        </View >
                    </View>
                </View>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    storyImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    titleContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    storyTitleText: {
      fontSize: RFValue(25),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    storyAuthorText: {
      fontSize: RFValue(18),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    descriptionText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: 13,
      color: "white",
      paddingTop: RFValue(10)
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    },
    profileImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
      borderRadius: RFValue(100)
  },
  });