import React from 'react'; 

export class ResultatGares extends React.Component{
    
    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.gares)
    }

    render(){
        return ( 
            <ul className="list-group">
                {this.props.gares.map(function(gare, index){
                    return <li className="list-group-item" key={ index }>{gare}</li>;
                })}
            </ul> 
    )}
}