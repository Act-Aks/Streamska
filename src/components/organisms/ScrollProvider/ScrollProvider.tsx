import React, { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { Easing, useAnimatedScrollHandler, useSharedValue, withTiming } from 'react-native-reanimated'

import { ScrollContextProps, TAB_BAR_HEIGHT } from './ScrollProvider.static'

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined)

export const useScroll = () => {
    const context = useContext(ScrollContext)
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider')
    }
    return context
}

const ScrollProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const tabBarTranslateY = useSharedValue(0)

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event, ctx: { startY?: number }) => {
            const currentOffsetY = event.contentOffset.y
            const diff = currentOffsetY - (ctx.startY ?? 0)

            if (Math.abs(diff) < 10) {
                return
            } // Ignore small scrolls

            if (currentOffsetY <= 0) {
                // Scrolled to top
                tabBarTranslateY.value = withTiming(0, { duration: 250, easing: Easing.out(Easing.quad) })
            } else if (diff > 0) {
                // Scrolling down
                tabBarTranslateY.value = withTiming(TAB_BAR_HEIGHT, { duration: 250, easing: Easing.out(Easing.quad) })
            } else {
                // Scrolling up
                tabBarTranslateY.value = withTiming(0, { duration: 250, easing: Easing.out(Easing.quad) })
            }
            ctx.startY = currentOffsetY
        },
        onBeginDrag: (event, ctx) => {
            ctx.startY = event.contentOffset.y
        },
    })

    const values = useMemo(() => ({ tabBarTranslateY, scrollHandler }), [scrollHandler, tabBarTranslateY])

    return <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>
}

export default ScrollProvider
