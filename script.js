let desenho = document.getElementById('desenho');
if (desenho.getContext) {
  let contexto = desenho.getContext('2d');

  // Desenhar um retângulo azul
  contexto.fillStyle = 'blue';
  contexto.fillRect(10, 10, 170, 100);

  contexto.fillStyle = 'blue';
  contexto.fillRect(230, 10, 170, 100);

  // Desenhar um círculo vermelho
  contexto.beginPath();
  contexto.arc(200, 60, 50, 0, Math.PI * 2, true);
  contexto.fillStyle = 'red';
  contexto.fill();
  

  contexto.beginPath();
  contexto.arc(10, 60, 50, 0, Math.PI * 2, true);
  contexto.fillStyle = 'red';
  contexto.fill();

  
  

}