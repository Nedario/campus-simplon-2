/*global self, console*/

(function workerDemo() {

    'use strict';

    var process = function () {
        var i, c;

        for (i = 0; i < 4000000000; i += 1) {
            c = i * 2;
        }

        return c;
    };

    self.addEventListener('message', function (e) {

        console.log('Message reçu par le worker');
        console.log(e);

        var result = process();

        self.postMessage({
            label: 'reponse worker',
            res: result
        });
    });

}());
