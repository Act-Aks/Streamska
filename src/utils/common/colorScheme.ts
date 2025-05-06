import { useColorScheme as useNativewindColorScheme } from 'nativewind'
import { useCallback } from 'react'

import { getItem, setItem } from './storage.ts'

type ColorScheme = 'light' | 'dark' | 'system'

function getStoredColorScheme(): ColorScheme | undefined {
    return getItem('colorScheme') as ColorScheme | undefined
}

function setStoredColorScheme(colorScheme: ColorScheme) {
    return setItem('colorScheme', colorScheme)
}

export function useColorScheme() {
    const { setColorScheme: setNativewindColorScheme, toggleColorScheme: toggleNativewindColorScheme } =
        useNativewindColorScheme()
    const colorScheme = getStoredColorScheme()
    const isDarkColorScheme = colorScheme === 'dark'
    const setColorScheme = useCallback(
        (cs: ColorScheme) => {
            setNativewindColorScheme(cs)
            setStoredColorScheme(cs)
        },
        [setNativewindColorScheme],
    )
    const toggleColorScheme = useCallback(() => {
        toggleNativewindColorScheme()
        setStoredColorScheme(isDarkColorScheme ? 'light' : 'dark')
    }, [isDarkColorScheme, toggleNativewindColorScheme])

    return {
        colorScheme,
        isDarkColorScheme,
        setColorScheme,
        toggleColorScheme,
    }
}
