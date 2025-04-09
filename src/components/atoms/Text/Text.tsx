import React from 'react'
import Animated from 'react-native-reanimated'

import { TextProps, tvText } from './Text.static'

const Text: React.FC<TextProps> = ({ text, ...props }) => {
    return (
        <Animated.Text className={tvText(props)} {...props}>
            {text}
        </Animated.Text>
    )
}

export default Text
