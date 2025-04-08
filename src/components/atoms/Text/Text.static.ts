import { Theme } from '@App/utils/theme'

type AlignText = 'left' | 'center' | 'right'

export type TextProps = {
    text?: string
    size?: Theme['fontSize']
    weight?: string
    color?: keyof Theme['colors']
    align?: AlignText
    alignVertical?: AlignText
    className?: string
}
