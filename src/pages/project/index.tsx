import React from 'react';
import './index.less'
import ProjectItem from './components/commonItem'

class Project extends React.Component {
    render() {
        return (
            <div className='projectWrap'>
                <section className='projectItemsWrap'>
                    <div className='title'>
                        <p>CSS demo</p>
                        <p>什么好玩做什么</p>
                    </div>
                    <div className='content'>
                        <ProjectItem /> 
                        <ProjectItem /> 
                        <ProjectItem /> 
                    </div>
                </section>

                <section className='projectItemsWrap'>
                    <div className='title'>
                        <p>CSS demo</p>
                        <p>什么好玩做什么</p>
                    </div>
                    <div className='content'>
                        <ProjectItem /> 
                        <ProjectItem /> 
                        <ProjectItem /> 
                    </div>
                </section>
                
                <section className='projectItemsWrap'>
                    <div className='title'>
                        <p>CSS demo</p>
                        <p>什么好玩做什么</p>
                    </div>
                    <div className='content'>
                        <ProjectItem /> 
                        <ProjectItem /> 
                        <ProjectItem /> 
                    </div>
                </section>

            </div>
        )
    }
}

export default Project
