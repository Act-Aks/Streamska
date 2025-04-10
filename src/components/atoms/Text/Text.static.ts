import { tv, VariantProps } from 'tailwind-variants'

export const tvText = tv({
    base: 'text-base font-thin text-primary',
    variants: {
        type: {
            title: 'font-base text-base',
            subtitle: 'font-base text-lg',
            paragraph: 'text-base font-normal',
            caption: 'text-xs font-normal',
            label: 'font-base text-xs',
            helper: 'text-xs font-normal',
            link: 'font-base text-xs underline',
            button: 'font-base text-xs',
        },
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
    defaultVariants: {
        size: 'base',
        weight: 'normal',
        type: 'title',
    },
})

export type TextProps = VariantProps<typeof tvText> & {
    text: string
    className?: string
    children?: never
}
