import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { SplashScreenWrapper } from './components/organisms'
import Home from './screens/Home/Home'
import './styles/global.css'

const Stack = createNativeStackNavigator()

const App: React.FC = () => {
    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <NavigationContainer>
                    <SplashScreenWrapper>
                        <Stack.Navigator>
                            <Stack.Screen name={'Home'} component={Home} />
                        </Stack.Navigator>
                    </SplashScreenWrapper>
                </NavigationContainer>
                <StatusBar barStyle={'dark-content'} />
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}

export default App
