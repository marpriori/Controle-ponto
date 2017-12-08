  // Initialize Firebase
  var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
firebase.initializeApp(config);

var database = firebase.database();

function salvar() {
    var idUser = document.getElementById('iduser').value;
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    database.ref('user/' + idUser).set({
        'nome': nome,
        'email': email
    });
}

document.getElementById('saveTest').onclick = salvar;