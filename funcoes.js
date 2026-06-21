function validarPrompt(prompt) {
    return prompt.trim() !== "";
}

function extrairResposta(data) {
    return data.candidates[0].content.parts[0].text;
}

module.exports = {
    validarPrompt,
    extrairResposta
};