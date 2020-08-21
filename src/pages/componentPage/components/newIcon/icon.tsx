import React from 'react'
import './index.scss'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type TThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface IIconProps extends FontAwesomeIconProps {
    theme?: TThemeProps
}

const Icon: React.FC<IIconProps> = (props) => {

    const { 
        className,
        theme,
        ...restProps
    } = props

    // btn btn-lg btn-primary
    const classes = classNames('ck-icon', className, {
        // icon-primary
        [`icon-${theme}`]: theme
    })

    return (
        <FontAwesomeIcon className={ classes } { ...restProps } />
    )


}

Icon.defaultProps = {
}

export default Icon