import React from 'react';
import './index.scss';
import { Icon } from 'antd'
import { formatMessage } from 'umi-plugin-locale';
import CommonHeader from './components/CommonHeader'
import { Button, Menu, AutoComplete } from 'ckui'
import _ from 'lodash'

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
        
    }

    // 处理循环引用
    cloneDeep2 = (obj: any, parent: any = null) => {
        let result: any = {}
        let keys = Object.keys(obj)
        let key = null
        let temp = null
        let _parent: any = parent

        while (_parent) {
            // 如果该字段引用了其父级，则为循环引用
            if (_parent.originParent === obj) {
                return _parent.currentParent
            }
            _parent = _parent.parent
        }

        for (let i = 0, len = keys.length; i < len; i++) {
            key = keys[i]
            temp = obj[key]
            if (temp && typeof temp === 'object') {
                result[key] = this.cloneDeep2(obj, {
                    originParent: obj,
                    currentParent: result,
                    parent: parent 
                })
            } else {
                result[key] = temp
            }
        }
        return result
    }

    // 点击导航栏之外的地方
    handleHideNavClick = (e: any) => {
        console.log(e.target.value);
    }

    renderTemplate = (item: any) => {
        return (
            <>
                <p>Name: {item.value}</p>
            </>
        )
    }

    render() {

        return (
            <div className='wrap'>
                <main>
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


