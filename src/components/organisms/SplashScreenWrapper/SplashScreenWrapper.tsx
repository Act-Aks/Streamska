import React, { PropsWithChildren, useEffect } from 'react'
import BootSplash from 'react-native-bootsplash'

const SplashScreenWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    useEffect(() => {
        void (async () => {
            await BootSplash.hide({ fade: true })
        })()
    }, [])

    return <>{children}</>
}

export default SplashScreenWrapper
