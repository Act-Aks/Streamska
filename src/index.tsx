import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { SplashScreenWrapper } from './components/organisms'
import RootNavigator from './components/organisms/RootNavigator/RootNavigator'
import './styles/global.css'

const App: React.FC = () => {
    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <NavigationContainer>
                    <SplashScreenWrapper>
                        <RootNavigator />
                    </SplashScreenWrapper>
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}

export default App
