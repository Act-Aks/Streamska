import { tv, VariantProps } from 'tailwind-variants'

export const tvText = tv({
    base: 'text-base text-primary',
    variants: {
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            md: 'text-md',
            lg: 'text-lg',
            xl: 'text-xl',
            xxl: 'text-2xl',
        },
        weight: {
            bold: 'font-bold',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            extrabold: 'font-extrabold',
            thin: 'font-thin',
            light: 'font-light',
            extralight: 'font-extralight',
        },
    },
})

export type TextProps = VariantProps<typeof tvText> & {
    text: string
    className?: string
    children?: never
}
