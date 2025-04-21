import { TabStackParamList } from '@App/components/organisms/BottomTabNavigator/BottomTabNavigator.static'
import { RootStackParamList } from '@App/components/organisms/RootNavigator/RootNavigator.static'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList, TabStackParamList {}
    }
}
