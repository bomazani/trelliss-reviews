// *** vvv Original vvv
// import React, {useState} from 'react';

// *** vvv From comments https://quicksilvervideo.info/goon/react-native/mYeZgcuuZ913rr0 vvv
import React, { useState } from 'react';
import * as Font from 'expo-font';
import{ AppLoading } from 'expo';
import Navigator from "./routes/homeStack";

// *** vvv Original vvv
// import * as Font from 'expo-font';
// import Home from './screens/home';
// import ReviewDetails from './screens/reviewDetails';
// import About from './screens/about';
// import { AppLoading } from 'expo';
// import Navigator from './routes/homeStack';
// import HomeStack from './routes/homeStack';

// *** vvv From comments https://quicksilvervideo.info/goon/react-native/mYeZgcuuZ913rr0 vvv
const getFonts = () => Font.loadAsync({
  // 'roboto-regular' : require('./assets/fonts/Roboto-Regular.ttf'),
  // 'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf')
  // Original font packages (next two lines)
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  
  if(fontLoaded){
    return (
      Navigator()
    );
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontLoaded(true)}
      />
    )
  }
}


// *** vvv Original vvv
// const getFonts = () => Font.loadAsync({
  // 'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  // 'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
// });

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   if(fontsLoaded){
//     return (
//       // <Home />
//       // <Navigator />
//       <HomeStack />
//     );
//   } else {
//     return (
//       <AppLoading
//         startAsync={getFonts}
//         onFinish={()=> setFontsLoaded(true)}
//       />
//     )
//   }
// }
