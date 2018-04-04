<?php

function getNames() {
    return [
        ["Ralph", 0],
        ["Seya", 1],
        ["Megamind", 0],
        ["Mario", 2],
        ["Link", 2],
        ["Totoro", 1],
        ["Guts", 1]
    ];
}

function getGenres() {
    return [
        0 => "Animé",
        1 => "Manga",
        2 => "Jeu video",
    ];
}

function setPersos($names, $genres) {
    $persos = array();
    for ($i = 0; $i < count($names); $i += 1) {
        // count() en php === persos.length en js
        $persos[] = (object)[];
        // équivaut à =>
        // $persos[] = new stdClass();
        $persos[$i]->name = $names[$i][0];
        $persos[$i]->genre = $genres[$names[$i][1]];
    }
    return $persos;
}

function getPersos() {
    return setPersos(getNames(), getGenres());
}

function getPersosAjax() {
    $users = setPersos(getNames(), getGenres());
    echo json_encode($users);
}


if (isset($_GET["ajax"]) && $_GET["ajax"] === "persos") {
    getPersosAjax();
}
