import React, { FC } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { Text } from "../components";
import utils from "../utils";
import context from "../context/context";

const { useAppContext } = context;

const Logout: FC = () => {
  const { setToken } = useAppContext();
  const logoutConfirmation = () => {
    Alert.alert("Warning", "Are you sure you want to sign out ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: async () => await utils.logout(setToken) },
    ]);
  };
  return (
    <TouchableOpacity onPress={logoutConfirmation}>
      <Text t="Logout" color="light" bold />
    </TouchableOpacity>
  );
};

export default Logout;
