import React from 'react';
import '../styles/index.scss'
import './index.scss';
// import 'ckui/build/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import CommonHeader from '../pages/components/CommonHeader'
import ProjectHeader from '../pages/components/ProjectHeader'
library.add(fas)

const BasicLayout: React.FC = props => {

    const pathname = window.location.pathname
    console.log('pathname', pathname);
    const isProject = pathname.indexOf('/project/') > -1

    return (
        <div className='layout' >

            <header>
                <CommonHeader isProject={ isProject } />
            </header>

            <main>
                { props.children }
            </main>
        </div>
    );
};

export default BasicLayout;
