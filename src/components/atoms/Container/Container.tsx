import React, { PropsWithChildren } from 'react'
import { View } from 'react-native'

import { WithClassName } from '@App/types'
import { cn } from '@App/utils/common/misc'

type ContainerProps = PropsWithChildren<WithClassName>

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <View className={cn('flex flex-1 bg-background', className)}>{children}</View>
}
