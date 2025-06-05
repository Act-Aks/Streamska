import { TextProps as RNTextProps } from 'react-native'
import Animated, { AnimatedProps } from 'react-native-reanimated'

interface TextProps extends AnimatedProps<RNTextProps> {
    text: string
    children?: never
}

export const Text: React.FC<TextProps> = ({ text, ...props }) => {
    return <Animated.Text {...props}>{text}</Animated.Text>
}
