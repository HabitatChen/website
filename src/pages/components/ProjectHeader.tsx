import React, { ReactElement } from 'react';
import { Icon } from 'antd'
import NavDetail from './NavDetail'
import './index.less'
import { ButtonHTMLType } from "antd/lib/button/button";
import withRouter from 'umi/withRouter';
import { connect, DispatchProp } from "dva"

interface Props extends DispatchProp {
    layoutModal: any
}

interface State {

}

class CommonHeader extends React.Component<Props, State> {

    componentDidMount() {
        document.addEventListener('click', (e) => {
            const { showNav } = this.props.layoutModal
            if (showNav) {
                this.toggleShowNav() 
            }
        });
    }
    
    toggleNav = (e: any) => {
        e.nativeEvent.stopImmediatePropagation() 
        this.toggleShowNav() 
    }

    toggleShowNav = () => {
        const { showNav } = this.props.layoutModal
        this.props.dispatch({
            type: 'layoutModal/setState',
            payload: {
                showNav: !showNav 
            }
        })
    }

    render() {
        const isHome = ['/'].indexOf(window.location.pathname) > -1
        const { showNav, activePageContent = '' } = this.props.layoutModal
        
        return (
            <div 
                className={`headerWrap`}
            >
                <div className='titleWrap'>
                    <div className='title'>
                        <span className='titleNavIcon' onClick={this.toggleNav}>三</span>
                        <span> habitat </span>
                        {
                            showNav ? <NavDetail /> : null
                        }
                    </div>
                    <div className='search'>
                        <Icon type='search' />
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