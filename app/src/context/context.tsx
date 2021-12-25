import AppLoading from "expo-app-loading";
import React, {
  FC,
  useReducer,
  createContext,
  useState,
  useContext,
} from "react";
import storage from "../storage";
import { AppState, UserAction } from "../typings";

const initialState: AppState = {
  token: undefined,
  theme: "light",
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<UserAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const appReducer = (state: AppState, action: UserAction): AppState => {
  switch (action.type) {
    case "setToken": {
      return {
        ...state,
        token: action.data.token,
      };
    }
    case "setTheme": {
      return {
        ...state,
        theme: action.data.theme,
      };
    }
    case "initialize":
      return action.data;
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const getInitialValues = (initialValues: any) => {
  return {
    theme: initialValues?.theme || initialState.theme,
    token: initialValues?.token || initialState.token,
  };
};

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [appReady, setAppReady] = useState(false);

  const setInitialValues = async () => {
    const values = await storage.getInitialValues();
    dispatch({ type: "initialize", data: getInitialValues(values) });
  };

  if (!appReady) {
    return (
      <AppLoading
        startAsync={setInitialValues}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }

  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// To prevent unneccessary imports, added useAppContext hook in this file
// instead of putting it into hooks folder
const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  const { state, dispatch } = context;

  const setToken = (token: string) => {
    dispatch({ type: "setToken", data: { token, theme: state.theme } });
  };

  return { state: context.state, setToken };
};

export default { AppProvider, useAppContext };
