import React from 'react';
import './main.scss'
import router from "umi/router";
import IconDisplay from './components/icon/iconDisplay'
import ButtonDisplay from './components/button/buttonDispaly'
import AlertDisplay from './components/alert/alertDispaly'

interface IConponentPageProps {

}

interface IConponentPageState {
    activeKey: string
}

class ConponentPage extends React.Component<IConponentPageProps, IConponentPageState> {

    constructor(props: IConponentPageProps) {
        super(props)
        this.state = {
            activeKey: 'alert'
        }

        
    }

    render() {
        return (
            <div className='componentPageWrap'>
                <div className='header'>
                    <div className='logo'>
                        <span> Habitat Design </span>
                    </div>
                    <div className='rightContent'>
                        <span onClick={ () => router.push('/') }>返回首页</span>
                        <button>English</button>
                    </div>
                </div>
                <div className='content'>
                    <div className='left'>
                        <ul className='menuWrap'>
                            <li className='menuLi'> Ant Design of React </li>
                            <li className='menuLi'> 快速上手 </li>
                            <li className='menuLi'> 组件 </li>
                            <li className={ `menuLi ${this.state.activeKey === 'button' ? 'active' : '' }`} onClick={() => {
                                this.setState({
                                    activeKey: 'button'
                                })
                            }}> Button </li>
                            <li className={ `menuLi ${this.state.activeKey === 'alert' ? 'active' : '' }`} onClick={() => {
                                this.setState({
                                    activeKey: 'alert'
                                })
                            }}> Alert </li>
                        </ul>
                    </div>
                    <div className='right'>
                        <div className='mainContent'>
                            {/* <div>
                                <p className={ styles.contentTitle }>Button按钮</p>
                            </div>
                            <div>
                                <p className={ styles.secondTitle }>如何实现</p>
                            </div>
                            <div>
                                <p className={ styles.secondTitle }>代码演示</p> }
                            </div> */}

                            {/* <IconDisplay /> */}
                            { this.state.activeKey === 'button' ? <ButtonDisplay /> : null }
                            { this.state.activeKey === 'alert' ? <AlertDisplay /> : null }
                        </div>
                        <div className='scrollContent'>
                        </div>
                    </div>

                </div>
                <div className='footer'>

                </div>
            </div>
        )
    }
    
}

export default ConponentPage