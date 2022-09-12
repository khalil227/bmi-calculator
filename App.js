import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Result from "./src/screens/Result";

const { Screen, Navigator } = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
            backgroundColor: '#0A0D22',
            
          },
          headerTintColor: '#fff',
        title: "BMI Calculator",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        }
      }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Result" component={Result} />
      </Navigator>
      <StatusBar style="light" backgroundColor="transparent" />
       
    </NavigationContainer>
  );
}