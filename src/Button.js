import React from 'react';
import './Button.css'

class Button extends React.Component {
    render() {
        const { action, label, id, status } = this.props;
        return(
            <button {...status} className="btn" id={id} onClick={action}>
                {label}
            </button>
        );
    }
}

export default Button;