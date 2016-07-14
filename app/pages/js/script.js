
(function (output) {
  var xhr = false,
    xPos,
    yPos;

  attachEvent();

  function attachEvent() {
    var allLinks = document.getElementsByTagName("a");
    for (var i = 0; i < allLinks.length; i += 1) {
      allLinks[i].onmouseover = ajaxSend;
    }
  }

  function ajaxSend(e) {
    var url = e.target;
    xPos = e.clientX;
    yPos = e.clientY;
    xhr = new XMLHttpRequest();
    if (xhr) {
      xhr.onload = showContents;
      xhr.open("GET", url, true);
      xhr.send(null);
    }
    else {
      alert("Ваш сервер не поддерживает Аякс технологию");
    }
  }

  function showContents() {
    if (xhr.status == 200) {
      var outMsg = xhr.responseText;
    }
    else {
      var outMsg = "Все плохо. Какая-то ошибка :( " + xhr.status;
    }
    var prevWin = document.getElementById(output);
    prevWin.innerHTML = outMsg;
    prevWin.style.top = parseInt(yPos) + 2 + "px";
    prevWin.style.left = parseInt(xPos) + 2 + "px";
    prevWin.style.visibility = "visible";
    prevWin.onmouseout = function () {
      document.getElementById(output).style.visibility = "hidden";
    }
  }
} ("previewWin"));

