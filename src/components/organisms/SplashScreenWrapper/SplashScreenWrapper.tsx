import { ThemeProvider } from '@react-navigation/native'
import React, { PropsWithChildren, useEffect } from 'react'
import { StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'

import { useColorScheme } from '@App/utils/common/colorScheme.ts'

import { DARK_THEME, LIGHT_THEME } from './SplashScreenWrapper.static'

const SplashScreenWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    const { colorScheme, isDarkColorScheme, setColorScheme } = useColorScheme()

    useEffect(() => {
        void (async () => {
            setColorScheme(!colorScheme ? 'dark' : colorScheme)
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
