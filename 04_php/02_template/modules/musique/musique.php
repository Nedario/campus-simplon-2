<div id="music_engine" class="musique-engine">
  <h2 class="title">Music API</h2>
  <input id="get_music" class="btn" type="submit" value="get music !">
</div>

<script>
  const musiqueEngine = (function musiqueEngine() {
    "use strict";
    let baseUrl = "http://api.music-story.com/";

    function getAccessToken(clbk) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "modules/musique/token_generator.php");

      xhr.onload = function getOauthSignature(e) {
        console.log(this.response);
        // console.log(JSON.parse(this.response));
        // clbk(JSON.parse(this.response).data)
      }

      xhr.send();
    }

    function getMusic(credentials) {
      const url = `${baseUrl}/artist/search?name=Bob%20Marley&oauth_token=${credentials.token}&oauth_signature=${credentials.token_secret}`;
      const xhr = new XMLHttpRequest();
      console.log(credentials)
      console.log(url)
      // return;
      xhr.open("GET", url);
      xhr.onload = function getData() {
        console.log(this.response);
      }
      // xhr.send();
    }

    document.getElementById("get_music").onclick = function setup() {
      getAccessToken(getMusic);
    }

  }());


</script>
