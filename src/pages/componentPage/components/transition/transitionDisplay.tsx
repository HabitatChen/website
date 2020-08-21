import React, { useState } from 'react'
import Button from '../button/button'
import Icon from '../newIcon/icon'
import Transition from './transition'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const TransitionDisplay: React.FC = () => {
    const Item = (name: string, angle: string) => {
        const [ start, setStart ] = useState(false)
        return (
            <div >
                <Button onClick={() => { setStart(!start) }}> { name } </Button>
                <Transition
                    in={start}
                    timeout={300}
                    animation={ `zoom-in-${angle}` }
                >
                    <p>balabalbalblalballblabal</p>
                </Transition>
            </div>
        )
    }
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
                { Item('下滑', 'top') } 
                { Item('上滑', 'bottom') } 
                { Item('左滑', 'left') } 
                { Item('右滑', 'right') } 
            </div>
        </div>
    )
}

export default TransitionDisplay