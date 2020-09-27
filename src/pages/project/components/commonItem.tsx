import React from 'react'
import './index.less'
import router from 'umi/router'

const ProjectItem: React.FC<any> = (props) => {

    const handleItemClick = () => {
        // router.push(`/showProject/${props.id}`)
        router.push(`/project/eatWhat`)
    }

    return (
        <div className='projectItem' onClick={ handleItemClick }>
            <div className='mask' />
            <div className='projectDesc'>
                <p className='demoName'>
                    中午吃什么
                </p>
                <p className='demoDesc'>
                    决定你中午吃什么
                </p>
            </div>
        </div>
    )
}

export default ProjectItem