// QU'AFFICHENT LES APPELS À

function log(data) {
    console.log(data);
}

var x, booleen, obj, n1, n2, n3;

booleen = 123 === '123';
n1 = 0;
n2 = 777;
n3 = 10/1;
obj = {
    name: 'objet simple',
    contenu: 23 * 10
};

/* 1 */
log(true && false);

/* 2 */
log(x);

/* 3 */
x = x && booleen;
x = !x;

log (n1 + n2);

/* 4 */
log(obj.name);

/* 5 */
log(obj.contenu + n3 > n2);

/* 6 */
log(x);

/* 7 */
log(x && booleen);

/* 8 */
log(x || booleen);

/* 9 */
log(obj.name + ' (la variable obj contient un objet "litéral")');

/* 10 */
log(typeof obj.contenu);
