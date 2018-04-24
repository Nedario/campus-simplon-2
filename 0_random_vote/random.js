/*jshint esversion: 6*/
var random = (function random() {
    "use strict";

    var btn, yesno, yes, no, reset, audio, body, content, initialize, list, simploniensHTML, stored, selectedSimplonien, simploniens = [{
            nom: "Ayaba",
            absent: false
        },
        {
            nom: "Adam",
            absent: false
        },
        {
            nom: "Bernard",
            absent: false
        },
        {
            nom: "Denis",
            absent: false
        },
        {
            nom: "Elias",
            absent: false
        },
        {
            nom: "Fatima",
            absent: false
        },
        {
            nom: "Farida",
            absent: false
        },
        {
            nom: "Fégan",
            absent: false
        },
        {
            nom: "Haroon",
            absent: false
        },
        {
            nom: "Jimmy",
            absent: false
        },
        {
            nom: "Kader",
            absent: false
        },
        {
            nom: "Laetitia",
            absent: false
        },
        {
            nom: "Laurie",
            absent: false
        },
        {
            nom: "Nakkib",
            absent: false
        },
        {
            nom: "Nathalie",
            absent: false
        },
        {
            nom: "Othman",
            absent: false
        },
        {
            nom: "Quentin",
            absent: false
        },
        {
            nom: "Richard",
            absent: false
        },
        {
            nom: "Sabuj",
            absent: false
        }
    ],
    copieSimploniens = simploniens.slice(),
    sounds = ["win1.mp3", "win2.mp3", "win3.mp3"];

    window.onload = function start() {
        body = document.querySelector("body");
        audio = document.getElementById("audio_win");
        btn = document.getElementById("random");
        content = document.getElementById("content");
        list = document.getElementById("list");
        yesno = document.getElementById("yesno");
        no = document.getElementById("no");
        yes = document.getElementById("yes");
        reset = document.getElementById("reset");

        initStudentList();

        reset.onclick = resetBg;
        yesno.onclick = getYesNo;
        yes.onclick = function() {
            getYesNo("yes");
        };

        no.onclick = function() {
            getYesNo("no");
        };

        btn.onclick = function randomVote() {
            var key = getRandom(simploniens);
            selectedSimplonien = simploniens[key].nom;
            simploniens.splice(key, 1);
            if (!simploniens.length) {
                simploniens = copieSimploniens.slice();
            }
            if (list.children.length <= 1) {
                initStudentList();
            }
            launchAnimation();
        };
    };

    function resetBg(m) {
        body.style.background = "none";
    }

    function getYesNo(m) {
        const mode = m ? "?force=" + m : null;
        var url = `https://yesno.wtf/api${mode}`;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function(data) {
            let d = JSON.parse(this.response);
            body.style.background = `url(${d.image})`;
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundSize = "cover";
        };
        xhr.send();
    }

    function getKeyFramesRules() {
        let keyframesRules = document.styleSheets[0].cssRules[8];
        // const keyframes = getKeyFramesRules();
        // console.log(keyframes);
        // keyframes.deleteRule(1);
        // keyframes.appendRule("");
        return keyframesRules;
    }


    function initStudentList() {
        // const duration = (simploniens.length * 13) / 60;
        // console.log(duration);
        console.log("populate");
        list.innerHTML = "";
        simploniens.forEach(function(s) {
            console.log(s);
            // if (!s.absent) {
                const li = document.createElement("li");
                li.className = "student";
                li.textContent = s.nom;
                list.appendChild(li);
            // }
        });
        return document.querySelectorAll(".simploniens .student");
    }

    function doSuspens() {
        audio.src = "audio/" + sounds[getRandom(sounds)];
        content.textContent = "Suspens ...";
        btn.disabled = true;
        list.classList.add("animate");
        content.classList.remove("is-result");
    }

    function doLaWin() {
        audio.play();
        list.classList.remove("animate");
        list.classList.remove("fade");
        content.classList.add("is-result");
        content.textContent = "YOU WIN !";
        btn.disabled = false;
    }

    function launchAnimation() {
        doSuspens((function(){
            return window.setTimeout(function() {
                list.classList.add("fade");
                return window.setTimeout(function() {
                    narowListElement();
                    return doLaWin();

                }, 1000);

            }, 4000);
        }()));
    }

    function narowListElement() {
        // console.log("narrow");
        // console.log(selectedSimplonien);
        list.innerHTML = `<li class="student chosen">${selectedSimplonien}</li>`;
    }

    function getRandom(source) {
        return Math.floor(Math.random() * source.length);
    }

}());
