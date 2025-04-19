import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { RootNavigator, ScrollProvider, SplashScreenWrapper } from './components/organisms'
import './styles/global.css'

const App: React.FC = () => {
    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <NavigationContainer>
                    <SplashScreenWrapper>
                        <ScrollProvider>
                            <RootNavigator />
                        </ScrollProvider>
                    </SplashScreenWrapper>
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}

export default App
