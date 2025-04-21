import { Home, LucideIcon, User } from 'lucide-react-native'

import { TabStackParamList } from '@App/components/organisms/BottomTabNavigator/BottomTabNavigator.static'

export type TabBarIconProps = {
    routeName: keyof TabStackParamList
    focused: boolean
}

export const getTabBarIconFromTabName = (tabName: keyof TabStackParamList): LucideIcon => {
    switch (tabName) {
        case 'Settings':
            return User
        case 'Home':
        default:
            return Home
    }
}
