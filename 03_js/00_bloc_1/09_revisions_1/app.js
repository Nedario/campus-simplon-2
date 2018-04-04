/*jshint esversion: 6*/

var f = function () {
    alert("hellow");
};

var revisions1 = (function () {
    console.log("hello simplon !");
    var user = {
        name: null,
        age: null,
        hobbies: [],
        password: "OvO&JFK@LHO19_68"
    };

    function getUser() {
        return {
            name: user.name,
            age: user.age,
            hobbies: user.hobbies
        };
    }

    function setAge(a) {
        user.age = a;
    }

    function setHobbie(h) {
        user.hobbies.push(h);
    }

    function setName(n) {
        user.name = n;
    }

    window.onload = function() {
        console.log("document chargé à 100%");
        console.log("----------------------");
        var i, list = document.getElementById("todo_list");
        console.log("objet représentant la liste => ");
        console.log(list);
        console.log("enfants (children) de la liste => ");
        console.log(list.children);

        // prochain chapitre => les boucles !!! (loops)
        for (i = 0; i < list.children.length; i += 1) {
            console.log(list.children[i]);
        }
    };

    return {
        getUser: getUser,
        setAge: setAge,
        setName: setName,
        setHobbie: setHobbie
    };
}());
