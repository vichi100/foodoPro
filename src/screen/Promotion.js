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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";
import InputSpinner from "./AddButton/AddButton";
import Styles from "../../Styles";
import { connect } from "react-redux";
import { setRestaurantDetails, setPromotionType } from "../reducers/Action";

const Promotion = props => {
  const { navigation } = props;

  const navigateTo = to => {
    props.setPromotionType(to);
    navigation.navigate("CreatePromotion");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "600" }}
          >
            Promotions
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              height: 110,
              backgroundColor: "rgba(0,206,209,.3)",
              borderRadius: 10,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 5
            }}
          >
            <View style={{ margin: 15 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#424242" }}
              >
                Active Promotions
              </Text>
              <Text style={{ marginTop: 15, color: "#616161" }}>
                Play || Pause , Any time start and stop your active promotions
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigateTo("discount")}>
            <View
              style={{
                height: 110,
                backgroundColor: "rgba(255,228,181, .5)",
                borderRadius: 10,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 3
              }}
            >
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "600", color: "#424242" }}
                >
                  Discount (%) off on order
                </Text>
                <Text style={{ marginTop: 15, color: "#616161" }}>
                  Recommended to increase average order cost and to retain
                  customers and to attract many more
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateTo("fixedOffer")}>
            <View
              style={{
                height: 110,
                backgroundColor: "rgba(255,192,203, .9)",
                borderRadius: 10,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 3
              }}
            >
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "600", color: "#424242" }}
                >
                  Fixed ({"\u20B9"}) off on order
                </Text>
                <Text style={{ marginTop: 15, color: "#616161" }}>
                  Recommended for increase order volume and retain customers
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateTo("buyOneGetOne")}>
            <View
              style={{
                height: 110,
                backgroundColor: "rgba(138,43,226, .3)",
                borderRadius: 10,
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 3
              }}
            >
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "600", color: "#424242" }}
                >
                  Buy 1 - Get 1 offer
                </Text>
                <Text style={{ marginTop: 15, color: "#616161" }}>
                  Best to get party and to attract family orders to test your
                  many dishes
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 110,
              backgroundColor: "rgba(0,191,255,.5)",
              borderRadius: 10,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 5
            }}
          >
            <View style={{ margin: 15 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#424242" }}
              >
                Promote your restaurant
              </Text>
              <Text style={{ marginTop: 15, color: "#616161" }}>
                Stand out! choose your restaurant position in list to grab more
                customers. Coming Soon...
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  restaurantDetails: state.AppReducer.restaurantDetails
});
const mapDispatchToProps = {
  setRestaurantDetails,
  setPromotionType
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Promotion);
