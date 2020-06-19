// *** vvv From comments https://quicksilvervideo.info/goon/react-native/mYeZgcuuZ913rr0 vvv
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

// *** vvv Original vvv
// import { createStackNavigator } from 'react-navigation-stack';
// import { createStackNavigator } from 'react-navigation/stack';
// import { createAppContainer } from 'react-navigation';
// import { createAppContainer } from '@react-navigation/native';
// import Home from '../screens/home';
// import ReviewDetails from '../screens/reviewDetails';


// const screens = {
//     Home: {
//         screen: Home
//     },
//     ReviewDetails: {
//         screen: ReviewDetails
//     },
// }

// *** vvv From comments https://quicksilvervideo.info/goon/react-native/mYeZgcuuZ913rr0 vvv
// const Stack = createStackNavigator() 
//     export default function Navigator() { 
//         return ();
//     };

// *** vvv Original code vvv
// const HomeStack = createStackNavigator(screens);
// export default createAppContainer(HomeStack);
const HomeStack = createStackNavigator();

function RootStack() {
    return (
        <StackActions.createStackNavigator
            initialRouteName="Home"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.screen
                name="Home"
                component={Home}
                options={{ title: 'My app'}}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
            />
        </StackActions.createStackNavigator>
    );
}
    // {
    //     Home: {
    //         screen: Home,
    //     },
    //     ReviewDetails: {
    //         screen: ReviewDetails,
    //     },
    // },

// )
export default function App() {
    return <NavigationContainer>{ /*...*/ }</NavigationContainer>
};
