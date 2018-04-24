// exécution côté client

const url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-emplacement-des-stations&rows=10000";

function getVelibStations(url) {
    return fetch(url).then(response => {
        // console.log(res);
        return response.json();
    });
}

// const badCall = getVelibStations(url);
// console.log(badCall); // promise pending ....

// (async function() {
//     const goodCall1 = await getVelibStations(url); // magic here
//     console.log(goodCall1.records);
// }());

// const c = getVelibStations(url).then(response => { // async response here
//     // console.log(response); data ok ici
//     return response.records;
// });
// console.log(c); // promise pending...
