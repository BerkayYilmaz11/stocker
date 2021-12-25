import React, { FC } from "react";

import { ActivityIndicator, StyleSheet } from "react-native";
import View from "./View";
import Text from "./Text";

interface Props {
  text?: string;
}

const Loading: FC<Props> = ({ text = "Fetching Data" }) => {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <ActivityIndicator color="black" />
        <Text t={`${text}...`} bold size="lg" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    padding: 10,
    height: 80,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Loading;
