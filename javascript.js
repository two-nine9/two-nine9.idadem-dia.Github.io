// Função para verificar idade
function verificarIdade(idade) {
    if (idade >= 18) {
      return "Você é maior de idade.";
    } else {
      return "Você é menor de idade.";
    }
  }
  
  // Página web simples com a função verificar idade
  <!DOCTYPE html>
  <html>
  <head>
    <title>Verificar Idade</title>
    <script>
      function verificarIdade(idade) {
        if (idade >= 18) {
          return "Você é maior de idade.";
        } else {
          return "Você é menor de idade.";
        }
      }
  
      function verificar() {
        var idade = document.getElementById("idade").value;
        var resultado = verificarIdade(idade);
        document.getElementById("resultado").innerText = resultado;
      }
    </script>
  </head>
  <body>
    <label for="idade">Digite sua idade: </label>
    <input type="number" id="idade">
    <button onclick="verificar()">Verificar</button>
    <p id="resultado"></p>
  </body>
  </html>
  