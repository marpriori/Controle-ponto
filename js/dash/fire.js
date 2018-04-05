  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBMQBwk6D6dZXMVD1GeMHRZmHQbNmPgD2w",
    authDomain: "astral-depth-160210.firebaseapp.com",
    databaseURL: "https://astral-depth-160210.firebaseio.com",
    projectId: "astral-depth-160210",
    storageBucket: "astral-depth-160210.appspot.com",
    messagingSenderId: "1096861308264"
  };
firebase.initializeApp(config);

var database = firebase.database();

function getValueFromInputId(id){
  return document.getElementById(id).value
}

function salvar() {
  saveOnFirebase(
    'user/', 
    getValueFromInputId('iduser'),
    {
      'nome': getValueFromInputId('nome'),
      'email': getValueFromInputId('email')
    }
  );
  bindToTable('user','tableUser');
}

function bindToTable(table, idTable){
  var resultHtml = '';  
  var query = firebase.database().ref(table).limitToFirst(20);
  console.log(query);
  query
    .then(function(snapshot) {
      snapshot.forEach(renderSingleSnapshot);
    }).then(function(){
      document.getElementById(idTable).getElementsByTagName('tbody')[0].innerHTML = resultHtml;
    });
  
  var renderSingleSnapshot = function(referenceItem){
    var item = referenceItem.val();
    console.log(referenceItem);
    console.log(item);
    resultHtml += '<tr>'+ JSON.stringify(item) + '</tr>';
  }
}

function saveOnFirebase(url, id, data){
  database.ref(url + id).set(data);
}

document.getElementById('saveTest').onclick = salvar;
