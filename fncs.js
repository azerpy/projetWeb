asyncCall('Lille');

async function asyncCall(gare) {
    var resultFetch = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q='+gare).catch(error=> console.log("L'URL n'est pas correcte"));
    var resultJson = await resultFetch.json().catch(error => console.log("Can't json"));
    var tabResults = resultJson.records.map(function(record){
        return record.fields.gare_ut_libelle;
    });
    console.log(tabResults);
}