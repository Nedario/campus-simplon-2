/* jshint esversion : 6 */
var appWorker = (function appWorker() {

    "use strict";

    const doAnimation = () => {
      document.getElementById("demo_block").classList.toggle("is-active");
    };

    const doThreadBusy = () => {
        var c = 0;

        console.log("le thread est occupé à calculer....");

        for (let i = 0; i < 4000000000; i += 1) {
            c += i * 2;
        }

        console.log("le thread est libéré");

        return c;
    };

    const doWorkerBusy = () => {
        const workerDemo = new Worker("worker.js");
        // une fois que le worker répond, on récupère sa réponse avec un callback
        workerDemo.addEventListener("message", (e) => {
            console.log("Message retourné par le worker Demo");
            console.log(e.data);
        });

        // on envoit un message vers le worker pour le "reveiller"
        workerDemo.postMessage("make-busy");
    };

    const getParisData = () => {
      const workerParis = new Worker("worker-paris.js");

      workerParis.addEventListener("message", (e) => {
          console.log("Message retourné par le worker Paris");
          console.log(e);
          console.log(e.data);
      });

      workerParis.postMessage("getData");
    };

    return {
        doAnimation,
        doThreadBusy,
        doWorkerBusy,
        getParisData,
    };

}());
