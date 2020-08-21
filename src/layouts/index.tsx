import React from 'react';
import '../styles/index.scss'
import './index.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const BasicLayout: React.FC = props => {
    return (
        <div className='normal' >
            { props.children }
        </div>
    );
};

export default BasicLayout;
