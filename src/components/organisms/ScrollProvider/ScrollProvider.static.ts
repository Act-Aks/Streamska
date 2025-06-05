import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { SharedValue } from 'react-native-reanimated'

export const TAB_BAR_HEIGHT = 60 // Match the height in TabBar.tsx

export interface ScrollContextProps {
    tabBarTranslateY: SharedValue<number>
    scrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
}
