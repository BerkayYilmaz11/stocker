import { useEffect, useState } from "react";
import { Keyboard, KeyboardEventName, Platform } from "react-native";
import { AppPlatform } from "../typings";

const keyboardEvent: Record<
  any,
  { show: KeyboardEventName; hide: KeyboardEventName }
> = {
  [AppPlatform.IOS]: {
    show: "keyboardWillShow",
    hide: "keyboardWillHide",
  },
  [AppPlatform.ANDROID]: {
    show: "keyboardDidShow",
    hide: "keyboardDidHide",
  },
};
const useKeyboardVisible = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const event = Platform.select({
    ios: keyboardEvent[AppPlatform.IOS],
    android: keyboardEvent[AppPlatform.ANDROID],
  });

  useEffect(() => {
    if (event) {
      const keyboardShowListener = Keyboard.addListener(event?.show, () => {
        setKeyboardVisible(true);
      });
      const keyboardHideListener = Keyboard.addListener(event?.hide, () => {
        setKeyboardVisible(false);
      });
      return () => {
        keyboardShowListener.remove();
        keyboardHideListener.remove();
      };
    }
  }, [event]);
  return keyboardVisible;
};

export default useKeyboardVisible;
