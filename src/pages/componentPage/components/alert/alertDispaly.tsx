import React, { useState } from 'react'
import './index.scss'
import Alert from './alert'
import Button from '../button/button'

const AlertDisplay: React.FC = () => {

    const [visible, setVisible ] = useState(false)

    return (
        <div className='iconDisplayWrap'>
            <div>
                <p className='contentTitle'>Button</p>
            </div>
            <div>
                <p className='secondTitle'>如何实现</p>
            </div>
            <div>
                <p className='secondTitle'>代码演示</p>
            </div>
            <hr/>
            <div>
                <Alert 
                    visible={ visible } 
                    title="aaaaa"
                    content='bbbb'
                />
                <Button onClick={ () => { setVisible(!visible) }}>
                    Open
                </Button> 
            </div>
        </div>
    )
}

export default AlertDisplay