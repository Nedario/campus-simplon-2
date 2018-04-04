/*global self, console*/
/*jshint esversion : 6 */
(function workerParis() {
    "use strict";
    const url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=comptages-routiers-permanents&rows=10000";

    const getData = (clbk) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onload = function() {
          const tmp = JSON.parse(this.response);
          clbk(tmp.records);
        };

        xhr.send();
    };

    self.addEventListener('message', (e) => {
        console.log('Message reçu par le worker Paris');
        console.log(e);
        console.log(e.data);
        getData((res) => {
          self.postMessage({
              label: 'reponse worker Paris',
              res: res
          });
        });
    });
}());
