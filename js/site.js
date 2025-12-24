fetch('config/site.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('titulo').innerText = data.titulo;
    document.getElementById('descricao').innerText = data.descricao;
    document.getElementById('banner').src = data.banner;
    document.getElementById('botaoTexto').innerText = data.botao_texto;
    document.getElementById('botao').href = data.botao_link;
  });