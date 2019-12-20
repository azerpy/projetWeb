import React from 'react'; 
import PropTypes from 'prop-types'; 
var md5 = require('js-md5')

export default class UserPanel extends React.Component{

    constructor(props){
        super(props);
    }

    render(){ 	
        return (
            <div className={"card"} style={{width: "18rem"}}>
                <img className={"card-img-top"} src={"https://www.gravatar.com/avatar/"+md5(this.props.email)}/>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{this.props.nom}</h5>
                    <p className={"card-text"}>{this.props.prenom}</p> 
                </div>
            </div>
        )
    }
}

UserPanel.propTypes = {
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    email: isEmail
}

UserPanel.defaultProps = {
    nom : 'Py',
    prenom: 'Jonathan',
    email: 'pyjonathan31@gmail.com'
}

function isEmail(props, propName, componentName) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props[propName]))
    {
        return new Error('Email non valide');
    }  
}