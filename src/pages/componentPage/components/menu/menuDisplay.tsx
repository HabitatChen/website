import React from 'react'
import './index.scss'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const MenuDisplay: React.FC = () => {
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
                <Menu onSelect={ (activeKey) => {
                    console.log('aaal', activeKey);
                }}>
                    <MenuItem >hello</MenuItem>
                    <MenuItem >ck</MenuItem>
                    <MenuItem >ckkkk</MenuItem>
                    <SubMenu title='ckkk'>
                        <MenuItem >ckkkk</MenuItem>
                        <MenuItem >ckkkk</MenuItem>
                        <MenuItem >ckkkk</MenuItem>
                    </SubMenu>

                </Menu>

                <Menu 
                    mode='vertical' 
                    onSelect={ (activeKey) => {
                        console.log('aaal', activeKey)}
                    }
                    defaultOpenSubmenus={ ['3'] }
                >
                    <MenuItem >hello</MenuItem>
                    <MenuItem >ck</MenuItem>
                    <MenuItem >ckkkk</MenuItem>
                    <SubMenu title='ckkk'>
                        <MenuItem >ckkkk</MenuItem>
                        <MenuItem >ckkkk</MenuItem>
                        <MenuItem >ckkkk</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        </div>
    )
}

export default MenuDisplay