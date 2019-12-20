import React from 'react';  
import { ResultatGares } from './ResultatGares';

export default class Recherche extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            gare: 'Lille',
            result : []
        };
    }

    async rechercherGare(gare) {
        var resultFetch = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q='+gare).catch(error=> console.log("L'URL n'est pas correcte"));
        var resultJson = await resultFetch.json().catch(error => console.log("Can't json"));
        var tabResults = resultJson.records.map(function(record){
            return record.fields.gare_ut_libelle;
        });
       this.setState({
           result: tabResults
       })
    }

    componentDidMount(){ 
        this.rechercherGare(this.state.gare);
    } 

    async onChangeInput(e){
        this.rechercherGare(e.target.value);
    }
    
    render(){
        return (
        <div style={{width: "18rem"}}>
            <h4>Recherche de gare</h4>
             <input type="search" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" defaultValue={this.state.gare} onChange={this.onChangeInput.bind(this)}></input> 
            <ResultatGares gares={this.state.result}></ResultatGares>
        </div>	
        )
    }       
    
}

