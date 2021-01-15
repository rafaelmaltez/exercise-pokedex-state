import React from 'react';

class Button extends React.Component {
    render() {
        const { action, label, id } = this.props;
        return(
            <button id={id} onClick={action}>
                {label}
            </button>
        );
    }
}

export default Button;