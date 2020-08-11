import React from 'react'
import './index.scss'
import classNames from 'classnames'

// 设计API
interface DemoProps {
    className: string
}

const Demo: React.FC<DemoProps> = (props) => {

    const { 
        className
    } = props

    // btn btn-lg btn-primary
    const classes = classNames('demo', className, {
    })

    return (
        <div>
            demo
        </div>
    )


}

Demo.defaultProps = {
}

export default Demo