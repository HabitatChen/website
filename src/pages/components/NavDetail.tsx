import React, { useState, useEffect } from 'react'
import '../index.scss'
import avator from '../../assets/avator.jpg'
import PageMode from '../../assets/page-mode.png'
import router from 'umi/router'
import Icon from '../componentPage/components/newIcon/icon'
import { connect, DispatchProp } from "dva"
import menuList from './menuList'

interface INavDetailProps extends DispatchProp {
    layoutModal: any
}

interface INavDetailState {

}

class NavDetail extends React.Component<INavDetailProps, INavDetailState> {

    handleItemClick = (item: any) => {
        this.setActiveKey(item)
        router.push(item.path)
    }

    // 全局的菜单高亮
    setActiveKey = (item: any) => {
        this.props.dispatch({
            type: 'layoutModal/setState',
            payload: {
                activePageContent: item
            }
        })
    }

    render() {
        // const { activeKey } = this.state
        const { activePageContent } = this.props.layoutModal
        
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
                                        className={ `menuItem ${activePageContent.key === item.key ? 'selected' : ''}` } 
                                        onClick={ () => this.handleItemClick(item) }
                                        key={ item.path }
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
}

const mapStateToProps = (state: any) => {
    return {
        layoutModal: state.layoutModal
    }
}

export default connect(mapStateToProps)(NavDetail);