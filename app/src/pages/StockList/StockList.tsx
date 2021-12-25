import React, { FC } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { View } from "../../components";
import useFetchData from "../../hooks/useFetchData";
import { Endpoints, Stock } from "../../typings";
import StockItem from "./StockItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation/AppStack";
import { AppRoute } from "../../navigation/app-routes";
import Loading from "../../components/Loading";
import ErrorDisplayer from "../../components/ErrorDisplayer";

type Props = NativeStackScreenProps<AppStackParamList, AppRoute.STOCK_LIST>;

const StockList: FC<Props> = ({ navigation }) => {
  const { data, loading, error, refetch } = useFetchData<Stock>(
    Endpoints.STOCK_LIST
  );

  const goToDetail = (stockId: number) => {
    navigation.navigate(AppRoute.STOCK_DETAIL, { stockId });
  };

  const renderStocks: ListRenderItem<Stock> = ({ item }) => {
    return <StockItem item={item} onPressItem={goToDetail} />;
  };

  const itemSeperator = () => {
    return <View bgColor="dark" style={styles.seperator}></View>;
  };

  if (loading) {
    return <Loading text="Fetching stock list" />;
  }

  if (error) {
    return <ErrorDisplayer refetch={refetch} message={error} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => `stock-${item.id}`}
        renderItem={renderStocks}
        ItemSeparatorComponent={itemSeperator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    height: 2,
    backgroundColor: "black",
    marginHorizontal: 5,
    opacity: 0.5,
  },
});

export default StockList;
