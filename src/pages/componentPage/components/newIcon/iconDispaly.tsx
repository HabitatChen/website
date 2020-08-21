import React from 'react'
import './index.scss'
import Icon from './icon'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ButtonDisplay: React.FC = () => {
    return (
        <div className='iconDisplayWrap'>
            <div>
                <p className='contentTitle'>Icon</p>
            </div>
            <div>
                <p className='secondTitle'>如何实现</p>
            </div>
            <div>
                <p className='secondTitle'>代码演示</p>
            </div>
            <hr/>
            <div>
                <Icon icon='coffee' theme='primary' size='lg'/>
                <Icon icon='angry' theme='primary' size='lg'/>
                <Icon icon='archway' theme='primary' size='lg'/>
                <Icon icon='arrow-alt-circle-right' theme='danger' size='lg'/>
            </div>
        </div>
    )
}

export default ButtonDisplay