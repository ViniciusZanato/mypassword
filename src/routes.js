import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home/home';
import { Passwords } from './pages/passwords/passwords';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} options={{
                tabBarShowLabel: false, headerShown: false, tabBarIcon: ({ focused, size }) => {
                    if (focused) {
                        return <Ionicons size={size} color={'#000'} name='home'></Ionicons>
                    }
                    return <Ionicons size={size} color={'#000'} name='home-outline' />
                }
            }} />

            <Tab.Screen name='passwords' component={Passwords} options={{
                tabBarShowLabel: false, headerShown: false, tabBarIcon: ({ focused, size }) => {
                    if (focused) {
                        return <Ionicons size={size} color={'#000'} name='lock-closed' />
                    }
                    return <Ionicons size={size} color={'#000'} name='lock-closed-outline' />
                }
            }} />
        </Tab.Navigator>
    );
}