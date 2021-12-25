import React, { FC } from "react";
import { Button, View, Text } from ".";

type Props = {
  message?: string;
  refetch: any;
};

const ErrorDisplayer: FC<Props> = ({
  message = "An error occured",
  refetch,
}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }} t={message} />
      <Button
        onPress={refetch}
        style={{ marginVertical: 20, width: 100 }}
        text={"Retry"}
      />
    </View>
  );
};

export default ErrorDisplayer;
