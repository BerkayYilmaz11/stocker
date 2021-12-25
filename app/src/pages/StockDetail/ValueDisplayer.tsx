import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../components";

interface Props {
  description: string;
  marketValue: string;
  shares: string;
}

const ValueDisplayer: FC<Props> = ({ shares, marketValue, description }) => {
  return (
    <View style={styles.container}>
      <Text t={description} size="md" bold />
      <View style={styles.valueContainer}>
        <View>
          <Text t="Shares" size="xl" bold style={styles.header}></Text>
          <Text t={shares} style={styles.value} bold size="lg"></Text>
        </View>
        <View>
          <Text t="Market Value" size="xl" bold style={styles.header}></Text>
          <Text t={marketValue} style={styles.value} bold size="lg"></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },
  valueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  header: {
    opacity: 0.5,
  },
  value: {
    marginTop: 5,
  },
});

export default ValueDisplayer;
