import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "../../components";
import { Stock } from "../../typings";

interface Props {
  item: Stock;
  onPressItem: (stockId: number) => void;
}

const StockItem: FC<Props> = ({ item, onPressItem }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressItem(item.id)}
    >
      <View style={styles.nameContainer}>
        <Text t={item.code} size="lg" bold />
        <Text t={item.name} size="md" style={styles.description} />
      </View>
      <View style={styles.nameContainer}>
        <Text t={item.currentPrice} size="lg" bold alignment="right" />
        <Text
          t={`${item.shares} shares`}
          size="sm"
          alignment="right"
          style={styles.description}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  nameContainer: {
    justifyContent: "space-evenly",
  },
  description: {
    marginTop: 6,
  },
});

export default StockItem;
