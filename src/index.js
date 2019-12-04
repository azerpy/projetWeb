import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 
import UserPanel from './UserPanel';

export function App({name}){
    return React.createElement('p', {style: {color:'red'}}, 'Paragraph ' + name);
}

export default class AppClass extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return React.createElement('p', {style: {color:'green'}}, 'Paragraph ' +this.props.name);
    }
}

AppClass.propTypes = {
    name : PropTypes.string.isRequired
}

AppClass.defaultProps = {
    name:'Jonathan'
}

ReactDOM.render(React.createElement(UserPanel, {email: 'baptiste.lecocq@gmail.com'}, null), document.getElementById('root'));