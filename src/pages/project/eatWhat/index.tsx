import React from 'react';
import maidaolao from '../../../assets/maidaolao.jpg'
import './index.less'
import { Button, Upload } from 'antd' 
import { uuid } from '../../../utils/uuid'
import _ from 'lodash'
import $ from 'jquery'
import nodeList from './nodeList.ts'

class WhatToEat extends React.Component {

    state = {
        selected: '',
        imgSrc: '',
        nodeList: nodeList
    }

    handleStart = () => {
        const { selected } = this.state

        if (selected) {
            this.setState({
                selected: '',
                imgSrc: ''
            }, () => {
                this.handleChangeActive()
            })
        } else {
            this.handleChangeActive()
        }
    }

    handleChangeActive = () => {
        const footList = document.querySelectorAll('.foodImg')
        let _footList: any = []
        for (let i = 0; i < 7; i++) {
            _footList[i] = footList[i] 
        }
        _footList[7] = footList[8]
        _footList[8] = footList[10]
        _footList[9] = footList[12]
        _footList[10] = footList[14]
        _footList[11] = footList[16]
        _footList[12] = footList[23]
        _footList[13] = footList[22]
        _footList[14] = footList[21]
        _footList[15] = footList[20]
        _footList[16] = footList[19]
        _footList[17] = footList[18]
        _footList[18] = footList[17]
        _footList[19] = footList[15]
        _footList[20] = footList[13]
        _footList[21] = footList[11]
        _footList[22] = footList[9]
        _footList[23] = footList[7]

        let num = Math.floor(Math.random() * 24) + 48

        for (let j = 0; j < num + 1; j++) {
            let elem = _footList[j % 24]
            setTimeout(() => {
                $(elem).addClass('active')
            }, 20 * (j))

            setTimeout(() => {
                if (j < num && $(elem).hasClass('active')) {
                    $(elem).removeClass('active')
                } else if (j == num) {
                    console.log(_footList[j % 24]);
                    let selected = num % 24

                    this.setState({
                        selected,
                        imgSrc: _footList[j % 24].src
                    })
                    return
                }
            }, 25 * (j))
        }
    }

    render() {
        console.log('this.state', this.state);
        const { nodeList, selected, imgSrc } = this.state

        return (
            <div className='whatEatWrap'>
                <div className='banner'>
                    {
                        nodeList.map((item: any, index: number) => {
                            let flag = index > 0 && index < 6
                            return (
                                <section className={`line ${flag ? 'line2' : 'line1'}`} key={uuid()}>
                                    <div className='itemWrap'>
                                        {
                                            Array.from(new Array(item.length)).map((childItem, childIndex) => {
                                                return (
                                                    item[childIndex].id === selected ? <FoodItem active={ true } key={uuid()} /> : <FoodItem key={uuid()} />

                                                )
                                            })
                                        }
                                    </div>
                                </section>
                            )
                        })
                    }
                    <div className='selectedImg'>
                        <p>{imgSrc ? '就决定是你了' : '今天吃什么'}</p>
                        {
                            imgSrc ? <img src={imgSrc} /> : null
                        }
                    </div>
                    
                </div>

                <Button onClick={ this.handleStart } type='primary' className='startBtn' >开始</Button>

            </div>
        )
    }
}

export default WhatToEat

const FoodItem: React.FC<any> = (props) => {

    const beforeUpload = () => {

    }

    const handleChange = () => {}

    return (
        <div className='imgWrap'>
            {/* <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} *}
            </Upload> */}
            <img className={`foodImg ${props.active ? 'active' : ''}`} draggable={ false } src={ maidaolao } alt=""/>
        </div>
    )
}