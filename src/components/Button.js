import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = props => {
  const {
    onPress,
    title,
    disabled = false,
    backgroundColor,
    textColor,
    width,
    height,
    borderRadius,
    borderWidth
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        elevation: 8,
        backgroundColor: backgroundColor ? backgroundColor : "#e0e0e0",
        borderRadius: borderRadius ? 0 : 5,
        width: width ? width : 90,
        height: height ? height : 35,
        // marginTop: 10,
        // marginBottom: 15,
        justifyContent: "center",
        borderWidth: borderWidth,
        borderColor: "#424242"
      }}
      disabled={disabled}
    >
      <Text
        style={{
          fontSize: 12,
          color: textColor ? textColor : "#424242",
          textAlign: "center",
          fontWeight: "600",
          // alignSelf: "center",
          textTransform: "uppercase"
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonText: {}
});

export default Button;
