import React from 'react';
import ReactDOM from 'react-dom'; 
import UserPanel from './UserPanel';
import Recherche from './Recherche';

function App({isLogged}){
    const name = 'Jonathan';
    const welcoming = <p>Bonjour {name}</p>
    return (
        <>
            <UserPanel nom="Py" prenom="Jonathan" email="baptiste.lecocq@gmail.com"></UserPanel>
            <Recherche></Recherche>
        </>
    ) 
}


ReactDOM.render(<App isLogged={false} />, document.getElementById('root'));