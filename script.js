function verificarToken() {
    const token = document.getElementById('tokenInput').value;
    if (token === 'admin123') {
      document.getElementById('adminArea').style.display = 'block';
      alert('Token válido! Acesso concedido.');
    } else {
      alert('Token inválido.');
    }
  }
  function liberarPlano() {
    const user = document.getElementById('userGratis').value;
    const plano = document.getElementById('planoGratis').value;
    if (user) {
      alert(`Plano ${plano.toUpperCase()} liberado para ${user} com sucesso!`);
    } else {
      alert('Por favor, preencha o nome ou ID do usuário.');
    }
  }
  function verificarToken() {
    const token = document.getElementById('tokenInput').value;
    if (token === 'admin123') {
      document.getElementById('adminArea').style.display = 'block';
      alert('Token válido! Acesso concedido.');
    } else {
      alert('Token inválido.');
    }
  }
  
  function liberarPlano() {
    const user = document.getElementById('userGratis').value;
    const plano = document.getElementById('planoGratis').value;
    if (user) {
      alert(`Plano ${plano.toUpperCase()} liberado para ${user}!`);
    } else {
      alert('Preencha o nome ou ID do usuário.');
    }
  }
  
  function banirUsuario() {
    const user = document.getElementById('userBan').value;
    if (user) {
      alert(`Usuário ${user} banido com sucesso.`);
    } else {
      alert('Informe o ID do usuário para banir.');
    }
  }
  
  function atribuirCargo() {
    const user = document.getElementById('userCargo').value;
    const cargo = document.getElementById('cargoUsuario').value;
    if (user) {
      const lista = document.getElementById('listaEquipe');
      const novoMembro = document.createElement('li');
      novoMembro.innerHTML = `<strong>${user}</strong> - ${cargo.toUpperCase()}`;
      lista.appendChild(novoMembro);
      alert(`Cargo ${cargo.toUpperCase()} atribuído a ${user}`);
    } else {
      alert('Informe o usuário.');
    }
  }
  function gerarToken() {
    const nome = document.getElementById('nomeToken').value;
    if (!nome) {
      alert('Informe o nome do usuário.');
      return;
    }
  
    const token = nome + '-' + Math.random().toString(36).substr(2, 8);
    document.getElementById('tokenGerado').innerHTML = 
      `<strong>Token gerado:</strong> <code>${token}</code><br><button onclick="copiarToken('${token}')">Copiar Token</button>`;
  }
  
  function copiarToken(token) {
    navigator.clipboard.writeText(token).then(() => {
      alert('Token copiado para a área de transferência!');
    });
  }
  