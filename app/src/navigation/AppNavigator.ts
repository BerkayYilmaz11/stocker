import {
  createNavigationContainerRef,
  StackActions,
} from "@react-navigation/native";

const navigationRef = createNavigationContainerRef();

const popToRoot = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

export default { navigationRef, popToRoot };
