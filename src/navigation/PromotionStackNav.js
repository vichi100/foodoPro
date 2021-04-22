import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurant from "../screen/Restaurant";
import Menu from "../screen/Menu";
import Cart from "../screen/Cart";
import Promotion from "../screen/Promotion";
import CreatePromotion from "../screen/CreatePromotion";

const Stack = createStackNavigator();

const PromotionStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#ffffff"
        },
        headerBackTitleVisible: false,
        headerTintColor: "rgba(105,105,105, .9)"
      }}
    >
      <Stack.Screen
        name="Promotion"
        component={Promotion}
        options={{
          tabBarLabel: "Home!",
          tabBarVisible: false,
          headerShown: false
        }}
      />
      <Stack.Screen
        name="CreatePromotion"
        component={CreatePromotion}
        options={{
          // tabBarLabel: "Home!",
          tabBarVisible: false,
          title: "Create Promotion"
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ tabBarLabel: "Bill Details", tabBarVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default PromotionStackNav;
