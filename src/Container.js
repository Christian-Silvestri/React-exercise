import React from 'react';

class Container extends React.Component {

    render() {
        const myStyle = {
            backgroundColor: '#fff',
            border: '1px solid red'
        }

        return(
            <div style={myStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Container