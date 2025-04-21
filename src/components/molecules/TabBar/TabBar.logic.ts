import { useLinkBuilder } from '@react-navigation/native'
import { useAnimatedStyle } from 'react-native-reanimated'

import { useScroll } from '@App/components/organisms/ScrollProvider/ScrollProvider'

export const useTabBar = () => {
    const { buildHref } = useLinkBuilder()
    const { tabBarTranslateY } = useScroll()

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: tabBarTranslateY.value }],
        position: 'absolute',
        bottom: 12,
        left: 12,
        right: 12,
        borderRadius: 16,
    }))

    return {
        buildHref,
        animatedStyle,
    }
}
