import React from 'react';
import '../styles/index.scss'
import './index.scss';

const BasicLayout: React.FC = props => {
    return (
        <div className='normal' >
            { props.children }
        </div>
    );
};

export default BasicLayout;
