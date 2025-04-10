import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ComponentProps } from 'react'

import { Home, Settings } from '@App/screens'

export type RootStackParamList = {
    Home: ComponentProps<typeof Home> | undefined
    Settings: ComponentProps<typeof Home> | undefined
}
export type RootStackScreenProps<T extends keyof typeof rootStackScreens> = NativeStackScreenProps<
    RootStackParamList,
    T
>

export const rootStackScreens = {
    Home,
    Settings,
} satisfies RootStackParamList
