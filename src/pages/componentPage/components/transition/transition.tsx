import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type TAnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

// interface ITransitionProps extends CSSTransitionProps {
//     animation?: TAnimationName
// }

type TransitionProps = CSSTransitionProps & {
    animation?: TAnimationName,
    wrapper? : boolean,
  }

const Transition: React.FC<TransitionProps> =  (props) => {
    // const { children, classNames, animation, ...restProps  } = props
    const { children, classNames, animation, wrapper, ...restProps } = props
    console.log('classNames', classNames);
    console.log('animation', animation);
    
    return (
        <CSSTransition
            classNames={classNames ? classNames : animation}
            {...restProps}
        >
            { wrapper ? <div> { children } </div> : children }
        </CSSTransition>
    )
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
  }

export default Transition