import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabBar } from '@App/components/molecules/TabBar/TabBar'
import { entries } from '@App/utils/common/misc.ts'

import { TabStackParamList, tabStackScreens } from './BottomTabNavigator.static'

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator<TabStackParamList>()

export const BottomTabNavigator: React.FC = () => {
    return (
        <TabNavigator tabBar={props => <TabBar {...props} />}>
            {entries(tabStackScreens).map(([screen, component]) => (
                <TabScreen key={screen} name={screen} component={component} />
            ))}
        </TabNavigator>
    )
}
