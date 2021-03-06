import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './button'



const defaultButton = () => (
    <Button onClick={ action('clicked') }>
        default Button 
    </Button>
)

const buttonWithSize = () => (
    <>
        <Button className='aaa' size='large' aaa='bbb' disabled >large button</Button>
        <Button size='small'>small button</Button>
    </>
)

const buttonWithType = () => (
    <>
        <Button btnType='primary'>primary button</Button>
        <Button btnType='danger'>danger button</Button>
        <Button btnType='link' href='www.baidu.com'>link button</Button>
    </>
)

storiesOf('Button Component', module)
    .add('Button', defaultButton)
    .add('不同尺寸的 Button', buttonWithSize)
    .add('不同类型的 Button', buttonWithType)
