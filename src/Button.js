import React from 'react';

class Button extends React.Component {
    render() {
        const { action, label } = this.props;
        return(
            <button onClick={action}>
                {label}
            </button>
        );
    }
}

export default Button;