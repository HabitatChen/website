import React from 'react';
import './index.scss';
import { Icon } from 'antd'
import { formatMessage } from 'umi-plugin-locale';
import { NavDetail } from './components/NavDetail'


interface IIndexProps {

}

interface IIndexState {
    showNav: boolean
}

class Index extends React.Component<IIndexProps, IIndexState> {

    recomentPageRef: any

    constructor(props: IIndexProps) {
        super(props)
        this.state = {
            showNav: false
        }
    }

    componentDidMount() {
        document.addEventListener('click', () => {
            this.setState({
                showNav: false
            })
        });
    }

    // 是否弹出菜单
    toggleNav = (e: any) => {
        e.nativeEvent.stopImmediatePropagation()
        this.setState({
            showNav: !this.state.showNav
        })
    }

    // 点击导航栏之外的地方
    handleHideNavClick = (e: any) => {
        console.log(e.target.value);
    }

    render() {

        const { showNav } = this.state

        return (
            <div className='wrap' onClick={ (e) => {
                this.handleHideNavClick(e)
            }}>

                <header>
                    <div className='title'>
                        <span className='titleNavIcon' onClick={ this.toggleNav }>三</span>
                        <span> habitat </span>
                        {
                            showNav ? <NavDetail /> : null
                        }
                    </div> 
                    <div className='search'>
                        <Icon type='search'/>
                    </div>
                </header>

                <main>
                    <div className='banner'>
                        <span className='desc'>
                            慢慢来，才最快
                        </span>
                    </div>

                    <div className='contentWrap'>

                        <section>
                            <span className='contentTitle'>推荐文章</span>
                            <div 
                                className='content recommend' 
                            >
                                <div className='itemWrap'>
                                    <div className='item'>a</div>
                                    <div className='item'>a</div>
                                    <div className='item'>a</div>
                                    <div className='item'>a</div>
                                    <div className='item'>a</div>
                                </div>
                                <div className='mask' />
                                <div className='mask maskLeft' />
                            </div>
                        </section>

                        <section>
                            <span className='contentTitle'>最新文章</span>
                            <div className='content'>
                                <div>
                                    <div>a</div>
                                    <div>b</div>
                                    <div>c</div>
                                    <div>d</div>
                                </div>
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        )
    }
}

export default Index


