// WHAT IS PRINTED ?

function log(data) {
    console.log(data);
}

var cat, tableau, nombre;
/* 1 */
//log(helloWorld);
/* 2 */
log(true + true);

/* 3 */
log(cat);

/* 4 */
log(123 >= 1);

/* 5 */
log(tableau);

/* 6 */
log(1 * 'dix');

cat = {};

/* 7 */
log(1 / '3,0');

/* 8 */
log(1 / '3.0');

cat = {
    name: 'Kitty'
}; /* que fait-on ici ? */

cat.color = 'black';
cat.eyeColor = 'yellow';
cat.mammifere = true;

/* 9 */
log ( isNaN(23) );

/* 10 */
log ( !isNaN('23') );

/* 11 */
log( true + false === 1 );

/* 12 */
log( cat );

/* 13 */
log( !cat.mammifere );
log( cat.eyColor );
