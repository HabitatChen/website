import React, { useContext, createContext, useState } from 'react'
import './index.scss'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
type MenuMode = 'horizantol' | 'vertical'
type SelectCallback = (selectedIndex: string) => void

// 设计API
export interface MenuProps {
    className?: string
    style?: React.CSSProperties
    mode?: MenuMode
    onSelect?: SelectCallback
    defaultIndex?: string
    defaultOpenSubmenus?: string[]
}

export interface IMenuContext {
    index: string,
    onSelect?: SelectCallback,
    mode?: MenuMode,
    defaultOpenSubmenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({
    index: '0'
})

const Menu: React.FC<MenuProps> = (props) => {
    const { 
        className,
        style,
        mode,
        onSelect,
        defaultIndex,
        children,
        defaultOpenSubmenus
    } = props

    // 创建一个state来记录当前选中的导航的index
    const [ currentActive, setActive ] = useState(defaultIndex)

    // 用户点击的时候做了两件事情 
    // 1:会改变当前高亮的菜单 
    // 2:调用用户自定义的方法
    const handleClick = (index: string) => {
        // 1. 设置当前高亮的菜单
        setActive(index);
        // 2. 如果传入了自定义的方法 就会调用该方法
        onSelect && onSelect(index)
    }

    // 创建一个传递给自组件的 context  这个特么和初始的context有个瘠薄区别？
    // 是整合了 用户传入的onSelect方法，因为创建上下文的时候，并不能够拿到这个onSelect方法
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubmenus: defaultOpenSubmenus
    }

    // btn btn-lg btn-primary
    const classes = classNames('menu', className, {
        'menu-horizantol': mode === 'horizantol',
        'menu-vertical': mode === 'vertical'
    })

    // 使用React.Children.map 对子节点进行遍历
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, { index: index.toString() })
            } else {
                console.error('warnig: menu has a child which is not a MenuItem')
                return null
            }
        })
    }

    return (
        <ul className={ classes } style={ style } data-testid='test-menu'>
            <MenuContext.Provider  value={ passedContext }>
                { renderChildren() }
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    mode: 'horizantol',
    defaultIndex: '0',
    defaultOpenSubmenus: []
}

export default Menu