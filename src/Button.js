import React from 'react';
import './Button.css'

class Button extends React.Component {
    render() {
        const { action, label, id, status, classN } = this.props;
        return(
            <button className={classN} id={id} onClick={action}>
                {label}
            </button>
        );
    }
}

export default Button;