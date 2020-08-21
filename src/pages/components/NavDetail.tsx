import React, { useState, useEffect } from 'react'
import '../index.scss'
import avator from '../../assets/avator.jpg'
import PageMode from '../../assets/page-mode.png'
import router from 'umi/router'
import Icon from '../componentPage/components/newIcon/icon'

interface INavDetailProps {

}

const menuList = [
    {
        title: '返回首页',
        iconType: 'archway',
        path: '/',
        key: 1
    },
    {
        title: '博客页面',
        iconType: 'crown',
        path: 'blog',
        key: 2
    },
    {
        title: '组件页面',
        iconType: 'anchor',
        path: 'componentPage',
        key: 3
    },
    {
        title: '项目展示',
        iconType: 'fire',
        path: 'project',
        key: 4
    },
    {
        title: '个人简历',
        iconType: 'cloud',
        path: 'resume',
        key: 5
    },
    
]

export const NavDetail: React.FC<INavDetailProps> = (props) => {
    const [activeKey, setActiveKey] = useState(1)
    return (
        <div className='navDetailWrap' onClick={(e: any) => {
            e.nativeEvent.stopImmediatePropagation()
        }}>
            <div className='banner'>
                <div className='avator'/>
                <div className='pageMode'>
                    <img src={ PageMode } alt=""/> 
                </div>
                <div className='desc'>
                    <p className='headerDesc'> <span>Habitat</span> </p>
                    <p className='contentDesc'> <span>慢慢来，才最快</span> </p>
                </div>
            </div>

            <div className='contentWrap'>
                <ul className='menuWrap'>
                    {
                        menuList.map((item) => {
                            return (
                                <li 
                                    className={ `menuItem ${activeKey === item.key ? 'selected' : ''}` } 
                                    onClick={ () => { 
                                        setActiveKey(item.key) 
                                        router.push(item.path)
                                    }}
                                >
                                    <span className='menu-item-icon-wrap'>
                                        <Icon icon={ item.iconType } size='sm' theme='primary' /> 
                                    </span>
                                    <span className='home-menu-item-title'>{ item.title }</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )

}