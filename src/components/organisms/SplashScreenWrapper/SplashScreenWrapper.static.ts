import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'

import { NAV_THEME } from '@App/constants/theme'

export const LIGHT_THEME: Theme = {
    ...DefaultTheme,
    colors: NAV_THEME.light,
}
export const DARK_THEME: Theme = {
    ...DarkTheme,
    colors: NAV_THEME.dark,
}
