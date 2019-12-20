import Recherche from './Recherche';

//jest.mock('fetch');

it('is state good when create Recherche', () => { 
    var recherche = new Recherche();   
    expect(recherche.state.gare).toBe('Lille');
    expect(recherche.state.result).toStrictEqual([]);
});
