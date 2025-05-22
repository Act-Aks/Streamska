import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { QueryProvider, RootNavigator, ScrollProvider, SplashScreenWrapper } from '@App/components/organisms'
import '@App/styles/global.css'

export const App: React.FC = () => {
    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <QueryProvider>
                    <NavigationContainer>
                        <SplashScreenWrapper>
                            <ScrollProvider>
                                <RootNavigator />
                            </ScrollProvider>
                        </SplashScreenWrapper>
                    </NavigationContainer>
                </QueryProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}
