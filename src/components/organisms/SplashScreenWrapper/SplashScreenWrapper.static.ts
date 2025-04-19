import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'

import { NAV_THEME } from '@App/constants/theme'

export const LIGHT_THEME: Theme = {
    ...DefaultTheme,
    dark: false,
    colors: NAV_THEME.light,
}
export const DARK_THEME: Theme = {
    ...DarkTheme,
    dark: true,
    colors: NAV_THEME.dark,
}
