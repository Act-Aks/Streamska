import { NativeStackNavigationOptions, NativeStackScreenProps } from '@react-navigation/native-stack'
import { ComponentProps } from 'react'

import BottomTabNavigator from '@App/components/organisms/BottomTabNavigator/BottomTabNavigator'

export type RootStackParamList = {
    HomeTab: ComponentProps<typeof BottomTabNavigator> | undefined
}
export type RootStackScreenProps<T extends keyof typeof rootStackScreens> = NativeStackScreenProps<
    RootStackParamList,
    T
>

export const rootStackScreens = {
    HomeTab: BottomTabNavigator,
} satisfies RootStackParamList

export const screenOptions: Record<keyof RootStackParamList, NativeStackNavigationOptions> = {
    HomeTab: {
        headerShown: false,
    },
}
