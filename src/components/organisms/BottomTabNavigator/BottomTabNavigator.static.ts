import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ComponentProps } from 'react'

import { Home, Settings } from '@App/screens'

export type TabStackParamList = {
    Home: ComponentProps<typeof Home> | undefined
    Settings: ComponentProps<typeof Home> | undefined
}
export type TabStackScreenProps<T extends keyof typeof tabStackScreens> = NativeStackScreenProps<TabStackParamList, T>

export const tabStackScreens = {
    Home,
    Settings,
} satisfies TabStackParamList
