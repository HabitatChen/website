import React from 'react'
import './index.scss'
import Button, { ButtonType, ButtonSize } from './button'

const ButtonDisplay: React.FC = () => {
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
                <Button >hello</Button>
                <Button btnType='primary'>hello</Button>
                <Button btnType='danger'>hello</Button>
                <Button btnType={ ButtonType.Primary } size={ ButtonSize.Large } >hello</Button>
                <Button size={ ButtonSize.Small } >hello</Button>
                <Button btnType={ ButtonType.Link } size={ ButtonSize.Small } >hello</Button>
                <Button disabled btnType={ ButtonType.Link } size={ ButtonSize.Small } >hello</Button>
            </div>
        </div>
    )
}

export default ButtonDisplay