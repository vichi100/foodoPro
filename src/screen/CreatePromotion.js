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
import AntDesign from "react-native-vector-icons/AntDesign";
import { ButtonGroup } from "react-native-elements";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";
import InputSpinner from "./AddButton/AddButton";
import Styles from "../../Styles";
import { connect } from "react-redux";
import { setRestaurantDetails } from "../reducers/Action";
import ButtonX from "../components/ButtonX";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import Menu from "./Menu";
import DateRangePicker from "./DateRangePicker";
// import { ButtonGroup } from "react-native-elements";

const discountForArray = [
  //   "10%",
  "20%",
  "25%",
  "30%",
  "35%",
  "40%",
  "45%",
  "51%"
];
const maxDiscountArray = [
  "Any",
  "\u20B951",
  "\u20B9101",
  "\u20B9151",
  "\u20B9201",
  "\u20B9251",
  "\u20B9301"
];

const minOrderValueArray = [
  "Any",
  "\u20B949",
  "\u20B999",
  "\u20B9149",
  "\u20B9199",
  "\u20B9249",
  "\u20B9299"
  //   "\u20B9500"
];
const flatDiscountArray = [
  "\u20B951",
  "\u20B9101",
  "\u20B9151",
  "\u20B9201",
  "\u20B9251",
  "\u20B9301"
];
const minOrderValueforFlatDiscountArray = [
  "\u20B9149",
  "\u20B9249",
  "\u20B9349",
  "\u20B9399",
  "\u20B9449",
  "\u20B9499",
  "\u20B9599"
];
const minOrderValueForBuyOneGetOneArray = [
  "Any",
  "\u20B999",
  "\u20B9149",
  "\u20B9199",
  "\u20B9249",
  "\u20B9299",
  "\u20B9349"
];

const CreatePromotion = props => {
  const today = new Date();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [diffInDays, setDiffInDays] = useState(null);
  const [discountForIndex, setDiscountForIndex] = useState(-1);

  const selectDiscountForIndex = index => {
    setDiscountForIndex(index);
  };

  const setDateRange = (start, end) => {
    // console.log(start, end);
    console.log(
      new Date(start).toLocaleString("en-us", {
        month: "long",
        // year: "numeric",
        day: "numeric"
      })
    );
    const startX = new Date(start).toLocaleString("en-us", {
      day: "numeric",
      month: "short"
      // year: "numeric",
      //   day: "numeric"
    });
    const endX = new Date(end).toLocaleString("en-us", {
      day: "numeric",
      month: "short"
      // year: "numeric",
    });
    const diffInMs = new Date(end) - new Date(start);
    const diffInDaysX = diffInMs / (1000 * 60 * 60 * 24);
    setDiffInDays(diffInDaysX + 1);
    setStartDate(startX);
    setEndDate(endX);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
      <ScrollView>
        <View
          style={{
            // flexDirection: "row",
            // justifyContent: "space-between",
            margin: 5,
            //   paddingBottom: 20,
            shadowOpacity: 0.0015 * 5 + 0.18,
            shadowRadius: 0.54 * 5,
            shadowOffset: {
              height: 0.6 * 5
            },
            backgroundColor: "#ffffff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#eeeeee"
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#616161",
              marginTop: 10,
              marginBottom: 10,
              fontWeight: "600",
              marginLeft: 15
            }}
          >
            Select dates for your promotion
          </Text>
          <View>
            <DateRangePicker
              initialRange={["2018-04-01", "2018-04-10"]}
              onSuccess={(s, e) => setDateRange(s, e)}
              // theme={{ markColor: "red", markTextColor: "white" }}
            />
          </View>
          {diffInDays ? (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItem: "center",
                marginTop: 40,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 15
                // borderStyle: "dashed"
              }}
            >
              <View>
                <Text style={{ fontSize: 14, color: "#424242", marginLeft: 5 }}>
                  {startDate}
                </Text>
                <View style={{ marginLeft: 20, marginBottom: 5, marginTop: 5 }}>
                  <AntDesign name="playcircleo" color={"#9e9e9e"} size={20} />
                </View>

                <Text style={{ fontSize: 12, color: "#9e9e9e" }}>
                  Start Date
                </Text>
              </View>
              {/* <View
            style={{
              borderBottomColor: "#9e9e9e",
              borderTopWidth: 2,
              marginLeft: 5,
              marginRight: 5,
              paddingTop: 30,
              width: "60%",
              borderStyle: "dashed"
            }}
          /> */}
              <Text style={{ fontSize: 14, color: "#424242" }}>
                {diffInDays ? diffInDays + " Days" : null}
              </Text>
              <View>
                <Text style={{ fontSize: 14, color: "#424242", marginLeft: 5 }}>
                  {endDate}
                </Text>
                <View style={{ marginLeft: 20, marginBottom: 5, marginTop: 5 }}>
                  <AntDesign name="pausecircleo" color={"#9e9e9e"} size={20} />
                </View>

                <Text style={{ fontSize: 12, color: "#9e9e9e" }}>End Date</Text>
              </View>
            </View>
          ) : null}
        </View>

        {props.promotionType === "discount" ? (
          <View style={{ marginTop: 5 }}>
            <View
              style={{
                marginTop: 20,
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#616161",
                  marginBottom: 10,
                  fontWeight: "600"
                }}
              >
                Select Discount (%) for order
              </Text>
              <ButtonGroup
                selectedBackgroundColor="rgba(27, 106, 158, 0.85)"
                onPress={selectDiscountForIndex}
                selectedIndex={discountForIndex}
                buttons={discountForArray}
                // containerStyle={{ height: 30 }}
                textStyle={{ textAlign: "center" }}
                selectedTextStyle={{ color: "#fff" }}
                containerStyle={{ borderRadius: 10, width: 320 }}
                containerBorderRadius={10}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#616161",
                  marginBottom: 10,
                  fontWeight: "600"
                }}
              >
                Maximum discount allowed up to {"\u20B9"}
              </Text>
              <ButtonGroup
                selectedBackgroundColor="rgba(27, 106, 158, 0.85)"
                onPress={selectDiscountForIndex}
                selectedIndex={discountForIndex}
                buttons={maxDiscountArray}
                // containerStyle={{ height: 30 }}
                textStyle={{ textAlign: "center" }}
                selectedTextStyle={{ color: "#fff" }}
                containerStyle={{ borderRadius: 10, width: 320 }}
                containerBorderRadius={10}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#616161",
                  marginBottom: 10,
                  fontWeight: "600"
                }}
              >
                Minimum order value to get discount
              </Text>
              <ButtonGroup
                selectedBackgroundColor="rgba(27, 106, 158, 0.85)"
                onPress={selectDiscountForIndex}
                selectedIndex={discountForIndex}
                buttons={minOrderValueArray}
                // containerStyle={{ height: 30 }}
                textStyle={{ textAlign: "center" }}
                selectedTextStyle={{ color: "#fff" }}
                containerStyle={{ borderRadius: 10, width: 320 }}
                containerBorderRadius={10}
              />
            </View>
          </View>
        ) : props.promotionType === "fixedOffer" ? (
          <View style={{ marginTop: 5 }}>
            <View
              style={{
                marginTop: 20,
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#616161",
                  marginBottom: 10,
                  fontWeight: "600"
                }}
              >
                Flat discount allowed of {"\u20B9"}
              </Text>
              <ButtonGroup
                selectedBackgroundColor="rgba(27, 106, 158, 0.85)"
                onPress={selectDiscountForIndex}
                selectedIndex={discountForIndex}
                buttons={flatDiscountArray}
                // containerStyle={{ height: 30 }}
                textStyle={{ textAlign: "center" }}
                selectedTextStyle={{ color: "#fff" }}
                containerStyle={{ borderRadius: 10, width: 320 }}
                containerBorderRadius={10}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#616161",
                  marginBottom: 10,
                  fontWeight: "600"
                }}
              >
                Minimum order value to get discount
              </Text>
              <ButtonGroup
                selectedBackgroundColor="rgba(27, 106, 158, 0.85)"
                onPress={selectDiscountForIndex}
                selectedIndex={discountForIndex}
                buttons={minOrderValueforFlatDiscountArray}
                // containerStyle={{ height: 30 }}
                textStyle={{ textAlign: "center" }}
                selectedTextStyle={{ color: "#fff" }}
                containerStyle={{ borderRadius: 10, width: 320 }}
                containerBorderRadius={10}
              />
            </View>
          </View>
        ) : props.promotionType === "buyOneGetOne" ? (
          <View style={{ marginTop: 5 }}>
            <View
              style={{
                marginTop: 20,
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#616161",
                  marginBottom: 10,
                  fontWeight: "600"
                }}
              >
                Fat discount allowed of {"\u20B9"}
              </Text>
              <Text style={{ color: "#455a64" }}>
                This will allow customer to buy two items and the maximum cost
                of the one item will be charge{" "}
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#616161",
                  marginBottom: 10,
                  fontWeight: "600"
                }}
              >
                Minimum order value to get discount
              </Text>
              <ButtonGroup
                selectedBackgroundColor="rgba(27, 106, 158, 0.85)"
                onPress={selectDiscountForIndex}
                selectedIndex={discountForIndex}
                buttons={minOrderValueForBuyOneGetOneArray}
                // containerStyle={{ height: 30 }}
                textStyle={{ textAlign: "center" }}
                selectedTextStyle={{ color: "#fff" }}
                containerStyle={{ borderRadius: 10, width: 320 }}
                containerBorderRadius={10}
              />
            </View>
          </View>
        ) : null}
        <View style={{ margin: 20 }}>
          <ButtonX title="Create" onPress={() => send()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  restaurantDetails: state.AppReducer.restaurantDetails,
  promotionType: state.AppReducer.promotionType
});
const mapDispatchToProps = {
  setRestaurantDetails
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePromotion);
