import React, { FC, useMemo } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import context from "../../context/context";
import { getTheme } from "../../styles/theme";

interface Props {
  labels: string[];
  prices: number[];
}

const { useAppContext } = context;

const defaultChartConfig = {
  color: () => `rgba(255, 255, 255, 1)`,
  labelColor: () => `rgba(255, 255, 255, 1)`,
  propsForDots: {
    r: "1",
    strokeWidth: "1",
  },
};

const Chart: FC<Props> = ({ labels, prices }) => {
  const {
    state: { theme },
  } = useAppContext();

  const chartConfig = useMemo(() => {
    const { CHART_COLOR_PRIMARY, CHART_COLOR_SECONDARY } = getTheme(theme);
    return {
      ...defaultChartConfig,
      backgroundGradientFrom: CHART_COLOR_PRIMARY,
      backgroundGradientTo: CHART_COLOR_SECONDARY,
    };
  }, [theme]);

  return (
    <LineChart
      data={{
        labels: labels,
        datasets: [
          {
            data: prices,
          },
        ],
      }}
      width={Dimensions.get("window").width - 20}
      height={Dimensions.get("window").height / 2.8}
      yAxisLabel="$"
      chartConfig={chartConfig}
      style={{
        marginVertical: 8,
      }}
    />
  );
};

export default Chart;
