const {
    validarPrompt,
    extrairResposta
} = require("../funcoes");

test("Prompt vazio deve retornar false", () => {
    expect(validarPrompt("")).toBe(false);
});

test("Prompt preenchido deve retornar true", () => {
    expect(validarPrompt("O que é Clean Code?")).toBe(true);
});

test("Deve extrair corretamente a resposta da API", () => {
    const respostaFake = {
        candidates: [
            {
                content: {
                    parts: [
                        {
                            text: "Clean Code é um conjunto de boas práticas."
                        }
                    ]
                }
            }
        ]
    };

    expect(extrairResposta(respostaFake))
        .toBe("Clean Code é um conjunto de boas práticas.");
});