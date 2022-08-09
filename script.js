var form={
nome:"",
apelido:"",
dnasc:"",
cpf:"",
time:"",
esporte:""
};

function enviar(){
form.nome = document.getElementById('name').value;
form.apelido = document.getElementById('nickname').value;
//form.dnasc = document.getElementById('day').value + "/" + document.getElementById('month').value + "/" + document.getElementById('year').value//
form.dnasc = document.getElementById('date').value;
form.cpf = document.getElementById('cpf').value;
form.time = document.getElementById('team_id').value;

//document.getElementById("resultado").innerHTML= "Nome: " + form.nome + "; Apelido: " + form.apelido + "; Data de Nascimento: " + form.dnasc + "; CPF: " + form.cpf + "; Time do Coração: " + form.time;
document.getElementById('resultado').innerHTML = JSON.stringify(form);
}
