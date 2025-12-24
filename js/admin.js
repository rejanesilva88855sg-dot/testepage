const OWNER = "SEU_USUARIO";
const REPO = "SEU_REPOSITORIO";
const PATH = "config/site.json";
const TOKEN = "SEU_TOKEN_GITHUB";

async function salvar() {
  const novoJson = {
    titulo: document.getElementById("titulo").value,
    descricao: document.getElementById("descricao").value,
    banner: document.getElementById("banner").value,
    botao_texto: document.getElementById("botaoTexto").value,
    botao_link: document.getElementById("botaoLink").value
  };

  const getFile = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`
  ).then(r => r.json());

  await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Atualização via painel",
        content: btoa(JSON.stringify(novoJson, null, 2)),
        sha: getFile.sha
      })
    }
  );

  alert("Site atualizado com sucesso!");
}