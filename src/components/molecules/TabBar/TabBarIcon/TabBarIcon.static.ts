import { Home, LucideIcon, User } from 'lucide-react-native'

import { TabStackParamList } from '@App/components/organisms/BottomTabNavigator/BottomTabNavigator.static'

export interface TabBarIconProps {
    routeName: keyof TabStackParamList
    focused: boolean
}

export function getTabBarIconFromTabName(tabName: keyof TabStackParamList): LucideIcon {
    switch (tabName) {
        case 'Settings':
            return User
        case 'Home':
        default:
            return Home
    }
}
