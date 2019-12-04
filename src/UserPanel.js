import React from 'react'; 
import PropTypes from 'prop-types'; 
import md5 from 'js-md5';

export default class UserPanel extends React.Component{

    constructor(props){
        super(props);
    }

    render(){ 	
        var nom = React.createElement('h2', {className:"card-title"}, this.props.nom);
        var prenom = React.createElement('p', {className:"card-text"}, this.props.prenom);
        var divClassBody = React.createElement('div', {className:'card-body'}, nom, prenom);
        var img = React.createElement('img', {className:"card-img-top", src : 'https://www.gravatar.com/avatar/'+md5(this.props.email)});
        
        return React.createElement('div', {className:"card", style : {width:"18rem"}}, img, divClassBody);
    }
}

UserPanel.propTypes = {
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

UserPanel.defaultProps = {
    nom : 'Py',
    prenom: 'Jonathan',
    email: 'pyjonathan31@gmail.com'
}
