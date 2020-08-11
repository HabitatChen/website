import React from 'react'
import './index.scss'
import Icon from './icon'

const IconDisplay: React.FC = () => {
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
                <Icon name='wechat' />
                <Icon name='qq' />
                <Icon name='alipay' />
            </div>
        </div>
    )
}

export default IconDisplay