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
import EvilIcons from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";
import InputSpinner from "./AddButton/AddButton";
import Styles from "../../Styles";
import { connect } from "react-redux";
import { setRestaurantDetails } from "../reducers/Action";
import { BottomSheet } from "react-native-btr";
import Cart from "./Cart";
import Button from "../components/Button";

const Order = props => {
  const [visible, setVisible] = useState(false);
  const [borderWidthNew, setBorderWidthNew] = useState(0);
  const [borderWidthAccept, setBorderWidthAccept] = useState(0);
  const [borderWidthDecline, setBorderWidthDecline] = useState(0);
  const [borderWidthOutToDeliver, setBorderWidthOutToDeliver] = useState(0);
  const [borderWidthDelivered, setBorderWidthDelivered] = useState(0);

  const toggleBorderWidth = button => {
    setBorderWidthNew(0);
    setBorderWidthAccept(0);
    setBorderWidthDecline(0);
    setBorderWidthOutToDeliver(0);
    setBorderWidthDelivered(0);
    if (button === "new") {
      setBorderWidthNew(1);
    }
    if (button === "accept") {
      setBorderWidthAccept(1);
    }
    if (button === "decline") {
      setBorderWidthDecline(1);
    }
    if (button === "outtodelivery") {
      setBorderWidthOutToDeliver(1);
    }
    if (button === "delivered") {
      setBorderWidthDelivered(1);
    }
  };

  const onSubmit = buttonStr => {
    console.log("onSubmit");
    toggleBorderWidth(buttonStr);
    // setBorderWidthNew(1);
    // setBorderWidthAccept(0);
    // setBorderWidthDecline(0);
    // setBorderWidthOutToDeliver(0);
    // setBorderWidthDelivered(0);
  };
  const onSubmitAccept = () => {
    console.log("onSubmit");
    setBorderWidthNew(0);
    setBorderWidthAccept(1);
    setBorderWidthDecline(0);
    setBorderWidthOutToDeliver(0);
    setBorderWidthDelivered(0);
  };

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  const showOrderDetails = item => {
    setVisible(true);
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => showOrderDetails(item)}>
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
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: "600", color: "#424242" }}
                >
                  ID- {item.order_id}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text>Status: </Text>
                  <View
                    style={{
                      backgroundColor: "rgba(0,191,255, .6)",
                      padding: 0,
                      marginLeft: 5,
                      borderRadius: 5
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffff",
                        paddingTop: 2,
                        paddingBottom: 2,
                        paddingLeft: 7,
                        paddingRight: 7,
                        fontWeight: "600",
                        fontSize: 12
                      }}
                    >
                      NEW
                    </Text>
                  </View>
                </View>
              </View>

              <Text>6:30PM</Text>
            </View>
            <View
              style={{
                borderBottomColor: "#E0E0E0",
                borderBottomWidth: 1,
                marginLeft: 5,
                marginRight: 5
                // paddingTop: 10,
                // marginTop: 20
              }}
            />
            <View style={{ margin: 10 }}>
              {item.items.map(dish => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginLeft: 5,
                      marginRight: 5,
                      marginBottom: 5
                    }}
                  >
                    <View style={{ flexDirection: "row", width: "70%" }}>
                      <Text>{dish.count} x </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          color: "#424242"
                        }}
                      >
                        {dish.name}
                      </Text>
                      <Text> - {dish.quantity} </Text>
                    </View>
                    <View>
                      <Text>
                        {"\u20B9"}
                        {parseInt(dish.cost) * parseInt(dish.count)}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
                alignItems: "center"
                // borderWidth: 1
              }}
            >
              <View style={{ paddingTop: 0 }}>
                <Text>Total bill </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ paddingTop: 2 }}>
                  {"\u20B9"}
                  {item.bill_amount}
                </Text>
                <View
                  style={{
                    backgroundColor: "#00c853",
                    padding: 0,
                    marginLeft: 5,
                    borderRadius: 5
                  }}
                >
                  <Text
                    style={{
                      color: "#ffff",
                      padding: 3,
                      fontWeight: "600",
                      fontSize: 12
                    }}
                  >
                    {" "}
                    PAID
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 3
            }}
          >
            <View
              style={{
                padding: 10,
                backgroundColor: "rgba(255,0,0, .3)",
                width: "50%",
                borderBottomLeftRadius: 5
              }}
            >
              <Text style={{ textAlign: "center" }}>DECLINE</Text>
            </View>
            <View
              style={{
                padding: 10,
                backgroundColor: "rgba(0,250,154, .2)",
                width: "50%",
                borderBottomRightRadius: 5
              }}
            >
              <Text style={{ textAlign: "center" }}>ACCEPT</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            marginBottom: 10,
            fontSize: 16,
            fontWeight: "600",
            color: "#424242"
          }}
        >
          Orders List
        </Text>

        <View
          style={{
            // borderColor: "rgba(211,211,211, .5)",
            // borderWidth: 1,
            margin: 5
            // padding: 10
            // backgroundColor: "rgba(211,211,211, .5)"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // marginLeft: 10,
              // marginRight: 10,
              marginBottom: 2
            }}
          >
            <Button
              title="New"
              onPress={() => onSubmit("new")}
              width={"33%"}
              backgroundColor={"rgba(255,105,180, .2)"}
              borderRadius={"0"}
              borderWidth={borderWidthNew}
            />
            <Button
              title="Accepted"
              onPress={() => onSubmit("accept")}
              width={"33%"}
              backgroundColor={"rgba(0,250,154, .2)"}
              borderRadius={"0"}
              borderWidth={borderWidthAccept}
            />
            <Button
              title="Declined"
              onPress={() => onSubmit("decline")}
              width={"33%"}
              backgroundColor={"rgba(255,0,0, .3)"}
              borderRadius={"0"}
              borderWidth={borderWidthDecline}
            />
            {/* <Button title="Out" onPress={() => onSubmit()} width={100} />
        <Button title="Delivered" onPress={() => onSubmit()} width={100} /> */}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
              // marginLeft: 10,
              // marginRight: 10
            }}
          >
            <Button
              title="Out to deliver"
              onPress={() => onSubmit("outtodelivery")}
              width={"50%"}
              backgroundColor={"rgba(135,206,250, .3)"}
              borderRadius={"0"}
              borderWidth={borderWidthOutToDeliver}
            />
            <Button
              title="Delivered"
              onPress={() => onSubmit("delivered")}
              width={"49.5%%"}
              backgroundColor={"rgba(245,222,179, .3)"}
              borderRadius={"0"}
              borderWidth={borderWidthDelivered}
            />
            {/* <Button title="Out" onPress={() => onSubmit()} width={100} />
        <Button title="Delivered" onPress={() => onSubmit()} width={100} /> */}
          </View>
        </View>

        <FlatList
          data={dataX}
          //data defined in constructor
          // ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {/* Bottom for order details */}

      <BottomSheet
        visible={visible}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state on the click of the back botton
        onBackdropPress={toggleBottomNavigationView}
        //Toggling the visibility state on the clicking out side of the sheet
      >
        {/*Bottom Sheet inner View*/}
        {/* <View></View> */}

        <Cart />
      </BottomSheet>
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
)(Order);

const dataX = [
  {
    order_id: "1010SDW90",
    bill_amount: "495",
    is_paid: "yes",
    payment_mode: "on line",
    status: "accepted", // accepted, out for delivery, delivered,
    restaurant: {
      name: "China Town",
      id: "",
      city: "",
      mobile: "9833097595",
      address: "",
      location: "Andheri West"
    },
    customer: {
      name: "",
      id: "",
      mobile: "",
      address: "",
      latlong: ""
    },
    items: [
      {
        id: "Chicken Pullow",
        name: "Chicken Pullow",
        veg: "no",
        cost: "250",
        quantity: "full",
        count: "1"
      },
      {
        id: "Chana Bhaji",
        name: "Chana Bhaji",
        veg: "no",
        cost: "150",
        quantity: "half",
        count: "1"
      },
      {
        id: "Chana Bhaji",
        name: "Chana Bhaji",
        veg: "no",
        cost: "150",
        quantity: "half",
        count: "1"
      },
      {
        id: "Chana Bhaji",
        name: "Chana Bhaji",
        veg: "no",
        cost: "150",
        quantity: "half",
        count: "1"
      },
      {
        id: "Chicken Pullow",
        name: "Chicken Pullow Chicken Pullow Chicken Pullow",
        veg: "no",
        cost: "250",
        quantity: "full",
        count: "1"
      },
      {
        id: "Chana Bhaji",
        name: "Chana Bhaji",
        veg: "no",
        cost: "150",
        quantity: "half",
        count: "1"
      },
      {
        id: "Chana Bhaji",
        name: "Chana Bhaji",
        veg: "no",
        cost: "150",
        quantity: "half",
        count: "1"
      },
      {
        id: "Chana Bhaji",
        name: "Chana Bhaji",
        veg: "no",
        cost: "150",
        quantity: "half",
        count: "1"
      }
    ]
  },
  {
    order_id: "1010SDW90",
    bill_amount: "495",
    is_paid: "yes",
    payment_mode: "on line",
    status: "out for delivery", // accepted, out for delivery, delivered,
    restaurant: {
      name: "China House",
      id: "",
      city: "",
      mobile: "9833097595",
      address: "",
      location: "Andheri West"
    },
    customer: {
      name: "",
      id: "",
      mobile: "",
      address: "",
      latlong: ""
    },
    items: [
      {
        id: "Chicken Pullow",
        name: "Chicken Pullow Chicken Pullow Chicken Pullow",
        veg: "no",
        cost: "250",
        quantity: "full",
        count: "1"
      },
      {
        id: "Chana Bhaji",
        name: "Chana Bhaji",
        veg: "no",
        cost: "150",
        quantity: "half",
        count: "1"
      }
    ]
  },
  {
    order_id: "1010SDW90",
    bill_amount: "495",
    is_paid: "yes",
    payment_mode: "on line",
    status: "delivered", // accepted, out for delivery, delivered,
    restaurant: {
      name: "Yalla Yalla",
      id: "",
      city: "",
      mobile: "9833097595",
      address: "",
      location: "Andheri West"
    },
    customer: {
      name: "",
      id: "",
      mobile: "",
      address: "",
      latlong: ""
    },
    items: [
      {
        id: "Chicken Pullow",
        name: "Chicken Pullow Chicken Pullow Chicken Pullow",
        veg: "no",
        cost: "250",
        quantity: "full",
        count: "1"
      },
      {
        id: "Chana Bhaji",
        name: "Chana Bhaji",
        veg: "no",
        cost: "150",
        quantity: "half",
        count: "1"
      }
    ]
  },
  {
    order_id: "1010SDW90",
    bill_amount: "495",
    is_paid: "no",
    payment_mode: "on line",
    status: "delivered", // accepted, out for delivery, delivered,
    restaurant: {
      name: "Fit Fab",
      id: "",
      city: "",
      mobile: "9833097595",
      address: "",
      location: "Andheri West"
    },
    customer: {
      name: "",
      id: "",
      mobile: "",
      address: "",
      latlong: ""
    },
    items: [
      {
        id: "Chicken Pullow",
        name: "Chicken Pullow Chicken Pullow Chicken Pullow",
        veg: "no",
        cost: "250",
        quantity: "full",
        count: "1"
      },
      {
        id: "Chana Bhaji",
        name: "Chana Bhaji",
        veg: "no",
        cost: "150",
        quantity: "half",
        count: "1"
      }
    ]
  }
];
