import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/screens/home';
import { StatusBar } from 'expo-status-bar';
import details from './src/screens/details';
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require('./assets/fonts/Antonio-Medium.ttf'),
    "Spartan-Bold": require('./assets/fonts/Spartan-Bold.ttf'),
    "Spartan-Regular": require('./assets/fonts/Spartan-Regular.ttf'),
  });
  if (!loaded) {
    <Text>font is loading...</Text>
  }
  
  return (
    <>
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen name="Home" component={home} />
           <Stack.Screen name="details" component={details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light'/>
    </>
  );
};

