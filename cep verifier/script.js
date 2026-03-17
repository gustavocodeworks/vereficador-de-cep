async function buscarCEP() {   //criar uma função asyc que diz que o codigo ira demorar a responder

    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`; // guardar a api em um var

    if(cep.length !== 8){
                alert("Cep Invalido, digite um cep com 8 caracteres");
                return; // se o cep for diferente de 8 caracteres, mostre um alerta e pare a função
        }
            const resp = await fetch(url); // depois de criar e estiver fucionando iremos dizer:
            const obj = await resp.json();  // se o status for ok espere o json

        if(obj.erro){
                alert("Cep Invalido, digite um cep valido");
                return; // se o json tiver um erro, mostre um alerta e pare a função
        }
            // depois de pegar o json, pegamos o id la em html e colocamos o valor do json la
        document.getElementById('rua').value = obj.logradouro; 
        document.getElementById('bairro').value = obj.bairro;
        document.getElementById('cidade').value = obj.localidade;
        document.getElementById('estado').value = obj.uf;
        
}