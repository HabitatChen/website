import React from 'react'
import { ReactComponent as Wechat } from './svg/wechat.svg'
import { ReactComponent as Tencent } from './svg/tencent.svg'
import { ReactComponent as Alipay } from './svg/alipay.svg'

// 1. 如何是的.svg文件不报错 => 添加typings.d.ts svg类型
// 2. umi 如何引入svg
// 3. 如何引入全部的svg
// 4. import all or tree shaking import a from './a'

interface IconProps {
    name: string  // Icon 的名称
}

const Icon: React.FC<IconProps> = (props) => {

    const renderInnerNode = () => {
        const { name } = props
        switch (name) {
            case 'wechat':
                return <Wechat />
            case 'alipay':
                return <Alipay />
            case 'qq':
                return <Tencent />
        }
    }
    
    return (
        <span> { renderInnerNode() } </span>
    )
}

export default Icon