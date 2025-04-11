import React, { PropsWithChildren } from 'react'
import { View } from 'react-native'

import { WithClassName } from '@App/types'

type ContainerProps = PropsWithChildren<WithClassName>

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <View className={`flex flex-1 bg-background ${className}`}>{children}</View>
}

export default Container
