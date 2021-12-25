import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, useMemo } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../../components";
import ErrorDisplayer from "../../components/ErrorDisplayer";
import Loading from "../../components/Loading";
import useFetchData from "../../hooks/useFetchData";
import { AppRoute } from "../../navigation/app-routes";
import { AppStackParamList } from "../../navigation/AppStack";
import { Endpoints, StockData } from "../../typings";
import utils from "../../utils";
import Chart from "./Chart";
import ValueDisplayer from "./ValueDisplayer";

type Props = NativeStackScreenProps<AppStackParamList, AppRoute.STOCK_DETAIL>;

const StockDetail: FC<Props> = ({ route }) => {
  const stockId = route.params.stockId;
  const { data, loading, error, refetch } = useFetchData<StockData>(
    Endpoints.STOCK_DETAILS,
    {
      stockId,
    }
  );

  const detailData = useMemo(() => {
    if (data?.length > 0) {
      return data[0];
    }
    return undefined;
  }, [data]);

  if (loading || !detailData) {
    return <Loading text="Getting stock details" />;
  }

  if (error) {
    return <ErrorDisplayer refetch={refetch} message={error} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text t={detailData.name} size="xl" bold />
        <Text t={detailData.currentPrice} size="lg" bold style={styles.price} />
      </View>
      <Chart labels={detailData.data.labels} prices={detailData.data.prices} />
      <ValueDisplayer
        description={detailData.description}
        marketValue={`$${utils.decimalSeperator(
          detailData.marketValue.toFixed(0)
        )}`}
        shares={utils.decimalSeperator(detailData.shares)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  name: {
    marginTop: 15,
    lineHeight: 20,
  },
  price: {
    marginTop: 6,
  },
  header: {
    opacity: 0.5,
  },
  value: {
    marginTop: 5,
  },
});

export default StockDetail;
