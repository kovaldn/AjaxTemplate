; (function () {

  attachEvent();

  function attachEvent() {
    var getXmlSend = document.getElementById("getXmlSend"),
      getJsonSend = document.getElementById("getJsonSend"),
      postJson = document.getElementById("postJson"),
      formGetXml = document.getElementById("formGetXml"),
      formGetJson = document.getElementById("formGetJson"),
      formPostJson = document.getElementById("formPostJson");
    // вешаем обработчики на наши кнопки и самостоятельно будем формировать Аякс-запрос
    getXmlSend.addEventListener('click', function (e) {
      ajaxSend(e, formGetXml, 'GET', 'xml');
    });
    getJsonSend.addEventListener('click', function (e) {
      ajaxSend(e, formGetJson, 'GET');
    });
    postJson.addEventListener('click', function (e) {
      ajaxSend(e, formPostJson, 'POST');
    });

  }


  function ajaxSend(e, fromForm, method, _format) {
    var format = _format || "json",
      xhr,
      url = {
        'GET': {
          'xml': "ajaxXML.php?",
          'json': "ajaxJson.php?"
        },
        'POST': {
          'json': "ajaxPOST.php"
        }
      },
      sendVar = "",
      txt1 = fromForm.querySelector("#textOne"),
      txt2 = fromForm.querySelector("#textTwo");

    if (txt1.value == "" || txt2.value == "") {
      alert("Не заполнено поле");
      return false;
    }

    xhr = new XMLHttpRequest();

    if (!xhr) {
      window.alert("Ваш веб-браузер не поддерживает технологию Ajax");
      return false;
    }

    sendVar += "text1=" + encodeURIComponent(txt1.value);
    sendVar += "&text2=" + encodeURIComponent(txt2.value);

    if (method === "GET") {
      // Подготовка асинхронного запроса методом GET
      xhr.open('GET', url[method][format] + sendVar, true);
      xhr.onload = function () {
        switch (format) {
          case 'xml':
            requestXML(xhr);
            break;
          default:
            requestJson(xhr);
        }
      };
      xhr.send(null); // Отправляем запрос
    } else {
      xhr.open('POST', url[method][format], true);
      // Добавляем HTTP-заголовок
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        requestPost(xhr);
      };
      xhr.send(sendVar); // Отправляем запрос
    }
    document.getElementById("otvet").innerHTML = "Загрузка...";
    txt1.value = "";
    txt2.value = "";
  }

  function requestXML(xhr) {
    // Обрабатываем асинхронный запрос
    if (xhr.status == 200) { // Запрос успешно обработан
      var xml = xhr.responseXML;
      var otvet = xml.getElementsByTagName("otvet");
      var text1 = otvet.item(0).getElementsByTagName("text1").item(0);
      var text2 = otvet.item(0).getElementsByTagName("text2").item(0);
      var msg = text1.firstChild.data + "<br>" + text2.firstChild.data;
      document.getElementById("otvet").innerHTML = msg;
    }
    else {
      document.getElementById("otvet").innerHTML = "Ошибка";
    }
  }

  function requestJson(xhr) {
    // Обрабатываем асинхронный запрос
    if (xhr.status == 200) { // Запрос успешно обработан
      var json = xhr.responseText;
      var otvet = JSON.parse(json);
      var msg = 'First:' + otvet.text1 + "<br>" + 'Second:' + otvet.text2;
      document.getElementById("otvet").innerHTML = msg;
    }
    else {
      document.getElementById("otvet").innerHTML = "Ошибка";
    }
  }

  function requestPost(xhr) {
    // Обрабатываем асинхронный запрос
    if (xhr.status == 200) { // Запрос успешно обработан
      var otvet = xhr.responseText;
      document.getElementById("otvet").innerHTML = otvet;
    }
    else {
      document.getElementById("otvet").innerHTML = "Ошибка";
    }
  }
})();