/*jshint esversion: 6*/
const fileObjectApp = (function fileObjectApp() {
  "use strict";

  var bars = [], dom = {}, files;

  /*
    ##################################
  */

  const displayFiles = (fileList) => {

    Array.from(fileList).forEach((f, i) => {

      // param ci-dessous : file, index, élement parent des progress-bars
      const bar = new ProgressBar(f, i, dom.bars);
      dom.fileList.innerHTML += `<tr>
        <td>${ f.name }</td>
        <td>${ f.type }</td>
        <td>${ f.size }</td>
        <td>
          <button data-key="${i}" class="btn fa fa-eye"></button>
        </td>
      </tr>`;
    });

    dom.fileList.querySelectorAll(".btn").forEach(btn => {
      // btn.onmouseenter = showPreview;
      btn.onclick = showPreview;
    });
  };

  const handleDOMEvents = () => {

    dom.btnOpen.onclick = e => {
      dom.inputFile.click();
    };

    dom.inputFile.onchange = e => {
      files = e.target.files || e.srcElement.files;
      displayFiles(files);
    };
  };

  const init = () => {
    console.log("ready to rock !");

    setDOMElements(); // exécuter cette fonction d'abord ! (affecte les élément HTML)
    handleDOMEvents(); // pour écouter les events sur les éléments de l'UI
  };

  const setDOMElements = () => {
    dom.bars = document.getElementById("my_progress_bars");
    dom.btnOpen = document.getElementById("btn_open_file");
    dom.inputFile = document.getElementById("file_input");
    dom.imgPreview = document.getElementById("img_preview");
    dom.vidPreview = document.getElementById("vid_preview");
    dom.fileList = document.getElementById("file_list").children[0];
    dom.views = dom.fileList.getElementsByClassName("fa-eye");
  };

  const showPreview = (e) => {
    const reader = new FileReader();
    const target = e.target || e.srcElement;
    const key = Number(target.getAttribute("data-key"));
    const targetFile = files[key];

    if (targetFile.type.match("video")) {

        dom.vidPreview.src = (URL || webkitURL).createObjectURL(targetFile);
        dom.vidPreview.load();

    } else if (targetFile.type.match("image")) {

        reader.onload = e => {
          const target = e.target || e.srcElement;
          dom.imgPreview.src = target.result;
        };

        reader.readAsDataURL(targetFile);
    }
  };

  /*
    ##################################
  */

  window.addEventListener("DOMContentLoaded", init);

  return {};

}());
