var API_KEY = "";

function enviarRequisicao(){
    var promptUsuario = document.getElementById("txtPrompt").value + ". na resposta trazida elimine os asteriscos que você utiliza para as formatações do texto"
    
    if(promptUsuario.trim() === "") {
        alert("o campo de prompt não pode estar vazio!")
        return
    }

    document.getElementById("txtResposta").innerText = "Carregando..."

    var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY;
    var payload = {
        contents: [{ parts: [{ text: promptUsuario }] }]
    }

    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
    .then(function(response) { return response.json() })
    .then(function(data){
        var textoResposta = data.candidates[0].content.parts[0].text;
        document.getElementById("txtResposta").innerText = textoResposta;
    })
    .catch(function(error){
        document.getElementById("txtResposta").innerText = "Ocorreu um erro: " + error;
    })
    
}