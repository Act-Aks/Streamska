import { ThemeProvider } from '@react-navigation/native'
import React, { PropsWithChildren, useEffect } from 'react'
import { StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'

import { useColorScheme } from '@App/utils/colorScheme'

import { DARK_THEME, LIGHT_THEME } from './SplashScreenWrapper.static'

const SplashScreenWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    const { colorScheme, isDarkColorScheme, setColorScheme } = useColorScheme()

    useEffect(() => {
        if (!colorScheme) {
            setColorScheme('dark')
        }
        void (async () => {
            await BootSplash.hide({ fade: true })
        })()
    }, [colorScheme, setColorScheme])

    return (
        <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
            <StatusBar barStyle={isDarkColorScheme ? 'light-content' : 'dark-content'} />
            {children}
        </ThemeProvider>
    )
}

export default SplashScreenWrapper
