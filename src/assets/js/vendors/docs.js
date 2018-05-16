

// docform
var selector = document.querySelector('#docform__selector');
var docModalButton = document.querySelectorAll('.docmodal__button');
var outputDiv = document.querySelector('.docmodal__card');

var yakovlev = ['Яковлев Игорь Васильевич' , 'http://localhost:8000/assets/img/doctor__yakovlev.jpg' , 'Врач-нейрохирург'];
var belousova = ['Белоусова Ольга Николаевна' , 'http://localhost:8000/assets/img/doctor__belousova.jpg' , 'Врач-УЗИ'];
var hazov = ['Хазов Алексей Петрович' , 'http://localhost:8000/assets/img/doctor__hazov.jpg' , 'Врач-ревматолог'];
var zaharova = ['Захарова Алла Ивановна' , 'http://localhost:8000/assets/img/doctor__zaharova.jpg' , 'Врач-гинеколог'];
var zolotova = ['Золотова Людмила Николаевна' , 'http://localhost:8000/assets/img/doctor__zolotova.jpg' , 'Врач-гастроэнтеролог'];
var arseneva = ['Арсеньева Елена Борисовна' , 'http://localhost:8000/assets/img/doctor__arseneva.jpg' , 'Врач-эндокринолог'];
var mazkevich = ['Мацкевич Маргарита Леонидовна' , 'http://localhost:8000/assets/img/doctor__mazkevich.jpg' , 'Врач-невролог'];
var temarcev = ['Темарцев Александр Александрович' , 'http://localhost:8000/assets/img/doctor__temarcev.jpg' , 'Врач функциональной диагностики'];
var batushkina = ['Батушкина Валентина Петровна' , 'http://localhost:8000/assets/img/doctor__batushkina.jpg' , 'Врач-гастроэнтеролог'];
var goncharova = ['Гончарова Татьяна Васильевна' , 'http://localhost:8000/assets/img/doctor__goncharova.jpg' , 'Врач-терапевт'];
var mohova = ['Мохова Наталия Константиновна' , 'http://localhost:8000/assets/img/doctor__mohova.jpg' , 'Врач-гинеколог'];
var rastrigina = ['Расстрыгина Людмила Николаевна' , 'http://localhost:8000/assets/img/doctor__rastrigina.jpg' , 'Кардиолог'];
var kozlova = ['Козлова Козлина Козлиевна' , 'http://localhost:8000/assets/img/doctor__kozlova.jpg' , 'Врач-УЗИ'];
var kaverina = ['Каверина Галина Николаевна' , 'http://localhost:8000/assets/img/doctor__kaverina.jpg' , 'Врач-УЗИ'];
var dolgushin = ['Долгушин' , 'http://localhost:8000/assets/img/doctor__dolgushin.jpg' , 'Гирудотерапевт'];


var docName = document.createElement('h3');
docName.className = 'docmodal__name';
var docHiddenInput = document.createElement('input');
docHiddenInput.type = 'hidden';
var docImg = document.createElement('img');
docImg.className = 'docmodal__img';
var docInfo = document.createElement('span');
var hiddenDiv = document.querySelector('.docmodal__hidden');


if(selector) {

  var currentDoc = (selector[0].value);
  docSwitcher(currentDoc);

  console.log(selector.length);

  if(selector.length == 1) {
    selector.disabled = 'true';
  }

  selector.addEventListener('change' , function(e){
    var currentDoc  = selector[selector.selectedIndex].value;
    docSwitcher(currentDoc);
  });
}

docModalButton.forEach(function(elem){
  elem.addEventListener('click' , function(e){
    var currentDoc  = elem.dataset.doc;
    docSwitcher(currentDoc);
  })
});



function docSwitcher(currentDoc){

    switch(currentDoc) {


        case "yakovlev":
            outputDoc(yakovlev);
            break;
        case "hazov":
            outputDoc(hazov);
            break;
        case "belousova":
            outputDoc(belousova);
            break;
        case "zaharova":
            outputDoc(zaharova);
            break;
        case "rastrigina":
            outputDoc(rastrigina);
            break;
        case "kozlova":
            outputDoc(kozlova);
            break;
        case "zolotova":
            outputDoc(zolotova);
            break;
        case "arseneva":
            outputDoc(arseneva);
            break;
        case "mazkevich":
            outputDoc(mazkevich);
            break;
        case "temarcev":
            outputDoc(temarcev);
            break;
        case "batushkina":
            outputDoc(batushkina);
            break;
        case "goncharova":
            outputDoc(goncharova);
            break;
        case "mohova":
            outputDoc(mohova);
            break;
        case "kaverina":
            outputDoc(kaverina);
            break;
        case "dolgushin":
            outputDoc(dolgushin);
            break;
        default:
            currentDoc = 0;
    }
}

function outputDoc(currentDoc){
  docName.innerHTML = currentDoc[0];
  docImg.src = currentDoc[1];
  docInfo.innerHTML = currentDoc[2];
  docHiddenInput.name = currentDoc[0];
  document.querySelector('.docmodal__imgbox').appendChild(docImg);
  document.querySelector('.docmodal__infobox').appendChild(docName);
  document.querySelector('.docmodal__infobox').appendChild(docInfo);
  if(hiddenDiv) {
    hiddenDiv.appendChild(docHiddenInput);
    console.log('hidden div');
  }
}
