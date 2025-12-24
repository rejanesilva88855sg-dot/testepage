
const OWNER="SEU_USUARIO";
const REPO="SEU_REPOSITORIO";
const PATH="config/site.json";
const TOKEN="SEU_TOKEN";

async function salvar(){
 const data={
  titulo:titulo.value,
  descricao:descricao.value,
  botao_texto:botaoTexto.value,
  botao_link:botaoLink.value,
  banner:banner.value,
  cor_fundo:corFundo.value
 };

 const f=await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`).then(r=>r.json());

 await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`,{
  method:"PUT",
  headers:{
   Authorization:`token ${TOKEN}`,
   "Content-Type":"application/json"
  },
  body:JSON.stringify({
   message:"update painel",
   content:btoa(JSON.stringify(data,null,2)),
   sha:f.sha
  })
 });

 alert("Atualizado");
}
