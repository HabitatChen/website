import React, { ReactElement } from 'react';
import { Icon } from 'antd'
import NavDetail from './NavDetail'
import './index.less'
import { ButtonHTMLType } from "antd/lib/button/button";
import withRouter from 'umi/withRouter';
import { connect, DispatchProp } from "dva"
import router from 'umi/router'

interface Props extends DispatchProp {
    layoutModal: any
    isProject?: boolean
}

interface State {

}

class CommonHeader extends React.Component<Props, State> {

    // 给全局添加一个点击事件 用来切换菜单
    componentDidMount() {
        document.addEventListener('click', (e) => {
            const { showNav } = this.props.layoutModal
            if (showNav) {
                this.toggleShowNav() 
            }
        });
    }
    
    // 切换是否显示菜单点击
    toggleNav = (e: any) => {
        e.nativeEvent.stopImmediatePropagation() 
        this.toggleShowNav() 
    }

    // 发送action到reducer
    toggleShowNav = () => {
        const { showNav } = this.props.layoutModal
        this.props.dispatch({
            type: 'layoutModal/setState',
            payload: {
                showNav: !showNav 
            }
        })
    }

    // 头部点击返回
    handleBackBtnClick = () => {
        router.push('/project')
    }

    render() {
        const isHome = ['/'].indexOf(window.location.pathname) > -1
        const { showNav, activePageContent = '' } = this.props.layoutModal
        const { isProject } = this.props

        console.log('isProject', isProject);
        
        
        return (
            <div className={`headerWrap ${isHome ? 'is-home' : 'is-normal'} ${activePageContent.className} ${isProject ? 'isProject' : ''}`}>
                <div className='titleWrap'>
                    <div className='title'>
                        <span className='titleNavIcon' onClick={this.toggleNav}>三</span>
                        <span> habitat </span>
                        {
                            showNav ? <NavDetail /> : null
                        }
                    </div>
                    <div className='search'>
                        {
                            isProject ? <span onClick={ this.handleBackBtnClick }>返回</span> : <Icon type='search' />
                        }
                    </div>
                </div>
                <div className='banner-content'>
                    <span className='desc'>
                        { activePageContent.bannerTitle }
                    </span>
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

export default connect(mapStateToProps)(CommonHeader);