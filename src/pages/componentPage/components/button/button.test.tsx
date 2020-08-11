import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'
import '@testing-library/jest-dom/extend-expect'

// 使用 mock funcitons
const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

test('first react test case', () => {
    // 是一个dom节点
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryByText('Nice')
    expect( element ).toBeTruthy()
    expect( element ).toBeInTheDocument()
})

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button { ...defaultProps }>Nice</Button>)
        const element = wrapper.queryByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()

        // 是否是一个button
        expect(element?.tagName).toEqual('BUTTON')

        // 测试是否有正确的类名
        expect(element).toHaveClass('btn btn-default')

        // 测试用户行为 是否触发了点击 firing events
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()

        // 默认的时候disabled属性是假的
        expect(element.disabled).toBeFalthy()
        
    })
    it('should render the correct component based on different on different props', () => {
        const wrapper = render(<Button { ...testProps }>Nice</Button>)
        const element = wrapper.queryByText('Nice')
        expect(element).toBeInTheDocument()

        // 不同的属性对应的是不同的classname
        expect(element).toHaveClass('btn-primary btn-large klass')
    })
    it('type=link并且提供了href属性', () => {
        const wrapper = render(<Button btnType={ ButtonType.Link } href='http://mockurl' >Link</Button>)
        const element = wrapper.queryByText('Link')

        // 判断该组件是什么元素
        expect(element?.tagName).toEqual('A')

        // 判断link的classname是否正确
        expect(element).toHaveClass('btn btn-link')

    })
    it('当属性是disabled的时候 去判断他的disabled属性，并且判断onClick方法未被调用', () => {
        const wrapper = render(<Button { ...disabledProps }>Nice</Button>)
        const element = wrapper.queryByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})