import '../src/styles/index.scss'
import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const styles: React.CSSProperties = {
    // textAlign: 'center'
    padding: '20px 40px'
}

const CetnerDecorator = (storyFn: any) => (
    <div style={styles}>
        <h3>组件演示</h3>
        {storyFn()}
    </div>
)

// 全局添加decorator
addDecorator(CetnerDecorator)
// addDecorator(withInfo)
addParameters({
    info: {
        inline: true,
        header: false
    }
})

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
}