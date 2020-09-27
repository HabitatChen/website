import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import './index.scss'
import classNames from 'classnames'

export type ButtonType = 'primary' | 'danger' | 'link' | 'default'

export type ButtonSize = 'large' | 'small'

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps

// 把所有的属性变成可选的
export type ButtonProps =  Partial< NativeButtonProps & AnchorButtonProps >

// 设计API
interface BaseButtonProps {
    className?: string
    /** button类型 */
    btnType?: ButtonType
    /** button尺寸 */
    size?: ButtonSize
    /** button禁用属性 */
    disabled?: boolean
    children: React.ReactNode
    href?: string 
    aaa?: string
}

/**
 * 这是第一个 button 组件
 * ## Button header
 * ~~~js
 * import { Button } from 'ckui' 
 * ~~~
 */

export const Button: FC<ButtonProps> = (props) => {

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
        'disabled': (btnType === 'link') && disabled
    })

    if (btnType === 'link') {
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
    btnType: 'default'
}

export default Button;