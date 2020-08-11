import React, { useState } from 'react'
import './index.scss'
import classNames from 'classnames'

export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning'
}

// 设计API
interface AlertProps {
    className?: string
    visible?: boolean 
    content?: string
    title?: string
    type?: AlertType
    showIcon?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {

    const { 
        className,
        content,
        title,
    } = props

    // btn btn-lg btn-primary
    const classes = classNames('alert', className, {
    })

    const renderAlert = () => {
        return (
            props.visible ? (
                <div className={classes} >
                    <div className='alert-wrap'>
                        {props.title ? <div className='alert-header'><div>{props.title}</div></div> : null}
                        <div className='alert-content'> { props.content } </div>
                        <div className='alert-close'> X </div>
                    </div>
                </div >
            ) : null
        )
    }

    return (
        renderAlert()
    )


}

Alert.defaultProps = {
}

export default Alert