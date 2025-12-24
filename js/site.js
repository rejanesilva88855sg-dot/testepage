
fetch('config/site.json')
.then(r => r.json())
.then(d => {
 document.getElementById('titulo').innerText = d.titulo;
 document.getElementById('descricao').innerText = d.descricao;
 document.getElementById('botaoTexto').innerText = d.botao_texto;
 document.getElementById('botao').href = d.botao_link;
 document.getElementById('banner').src = d.banner;
 document.body.style.background = d.cor_fundo;
});
