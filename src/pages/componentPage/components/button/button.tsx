import React from 'react'
import './index.scss'
import classNames from 'classnames'

export enum ButtonType {
    Primary = 'primary',
    Danger  = 'danger',
    Link    = 'link',
    Default = 'default'
}

export enum ButtonSize {
    Large = 'large',
    Small = 'small'
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps

// 把所有的属性变成可选的
export type ButtonProps =  Partial< NativeButtonProps & AnchorButtonProps >

// 设计API
interface BaseButtonProps {
    className?: string
    btnType?: ButtonType
    size?: ButtonSize
    disabled?: boolean
    children: React.ReactNode
    href?: string 
}

const Button: React.FC<ButtonProps> = (props) => {

    const {
        className,
        btnType,
        size,
        disabled,
        children,
        href,
        ...restProps
    } = props

    // btn btn-lg btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if (btnType === ButtonType.Link) {
        return (
            <a 
                className={ classes }
                href={ href }
                { ...restProps }
            >
                { children }
            </a>
        )
    } else {
        return (
            <button
                className={ classes }
                disabled={ disabled }
                { ...restProps }
            >
                { children }
            </button>
        )
    }

}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button