import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import About from './screens/about';
import { AppLoading } from 'expo';
// import Navigator from './routes/homeStack';
import HomeStack from './routes/homeStack';


const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      // <Home />
      // <Navigator />
      <HomeStack />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
    />
    )
  }
}
