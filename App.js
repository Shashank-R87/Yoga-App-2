import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import HomeIcon from './components/HomeIcon';
import ProfileScreen from './screens/ProfileScreen';
import CategoryIcon from './components/CategoryIcon';
import ProfileIcon from './components/ProfileIcon';
import HomeStack from './screens/HomeStack';
import CategoryStack from './screens/CategoryStack';

export default function App() {

  const [loaded] = useFonts({
    PoppinsSemiBold: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsBlack: require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    PoppinsMediumItalic: require("./assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    Monoton: require("./assets/fonts/Monoton/Monoton-Regular.ttf"),
    ChivoMonoLight: require("./assets/fonts/Chivo_Mono/ChivoMono-Light.ttf"),
    MontserratMedium: require("./assets/fonts/Montserrat/Montserrat-Medium.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    PoppinsExtraLight: require("./assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
  });

  if (!loaded) return null;

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='HomeStack'
          screenOptions={{
            headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: "#000000", tabBarInactiveTintColor: "#767676",
            tabBarStyle: {
              height: 54,
              position: "absolute",
              bottom: 10,
              left: 16,
              right: 16,
              borderRadius: 20,
              backgroundColor: "#EEF1FF",
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarHideOnKeyboard:true,
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <HomeIcon color={color} />
              ),
            }}
            name="HomeStack"
            component={HomeStack} />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <CategoryIcon color={color} />
              ),
            }}
            name="CategoryStack"
            component={CategoryStack} />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <ProfileIcon color={color} />
              ),
            }}
            name="Profile"
            component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );

}

