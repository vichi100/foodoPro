import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  AsyncStorage,
  Modal,
  TouchableHighlight,
  TextInput,
  Image,
  FlatList
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { ButtonGroup } from "react-native-elements";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";
import InputSpinner from "./AddButton/AddButton";
import Styles from "../../Styles";
import { connect } from "react-redux";
import { setRestaurantDetails } from "../reducers/Action";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import Menu from "./Menu";

const Restaurant = props => {
  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
      <ScrollView>
        <View style={{ backgroundColor: "rgba(245,245,245, .5)" }}>
          <View style={{ margin: 15 }}>
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#616161" }}
              >
                China Town
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "400", color: "#9e9e9e" }}
              >
                Andheri West | Mumbai
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                marginBottom: 10
                // backgroundColor: "rgba(220,220,220, .9)"
              }}
            >
              <View>
                <Text style={{ color: "#455a64", fontWeight: "600" }}>
                  Today Sell
                </Text>
                <Text style={{ color: "#424242", marginTop: 5 }}>
                  {"\u20B9"} 2900
                </Text>
                <Text style={{ color: "#424242", marginTop: 3 }}>
                  80 Orders
                </Text>
              </View>
              <View
                style={{
                  height: "100%",
                  width: 1,
                  backgroundColor: "#909090"
                }}
              />
              <View>
                <Text style={{ color: "#455a64", fontWeight: "600" }}>
                  7 Days Sell
                </Text>
                <Text style={{ color: "#424242", marginTop: 5 }}>
                  {"\u20B9"} 2900
                </Text>
                <Text style={{ color: "#424242", marginTop: 3 }}>
                  80 Orders
                </Text>
              </View>
              <View
                style={{
                  height: "100%",
                  width: 1,
                  backgroundColor: "#909090"
                }}
              />
              <View>
                <Text style={{ color: "#455a64", fontWeight: "600" }}>
                  30 Days Sell
                </Text>
                <Text style={{ color: "#424242", marginTop: 5 }}>
                  {"\u20B9"} 2900
                </Text>
                <Text style={{ color: "#424242", marginTop: 3 }}>
                  80 Orders
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            marginRight: 10
          }}
        >
          <Text
            style={{
              color: "#455a64",
              fontWeight: "600",
              fontSize: 14,
              marginLeft: 15
            }}
          >
            Menu
          </Text>
          <Entypo name="add-to-list" color={"#9e9e9e"} size={20} />
        </View>

        <Menu />
      </ScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = state => ({
  restaurantDetails: state.AppReducer.restaurantDetails
});
const mapDispatchToProps = {
  setRestaurantDetails
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurant);
