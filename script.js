document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enderecoForm");
  const cepInput = document.getElementById("cep");
  const logradouroInput = document.getElementById("logradouro");
  const numeroInput = document.getElementById("numero");
  const ufInput = document.getElementById("uf");

  // Máscara automática do CEP (00000-000)
  cepInput.addEventListener("input", function () {
    let cep = cepInput.value.replace(/\D/g, ""); // remove não dígitos
    if (cep.length > 5) {
      cep = cep.replace(/^(\d{5})(\d{1,3}).*/, "$1-$2");
    }
    cepInput.value = cep;
  });

  // Converter UF para maiúsculo automaticamente
  ufInput.addEventListener("input", function () {
    ufInput.value = ufInput.value.toUpperCase();
  });

  // Validação no submit
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const cep = cepInput.value.trim();
    const logradouro = logradouroInput.value.trim();
    const numero = numeroInput.value.trim();
    const uf = ufInput.value.trim();

    // Regex de validação
    const cepRegex = /^\d{5}-\d{3}$/;
    const logradouroRegex = /^.{5,}$/;
    const numeroRegex = /^[0-9]+$/;
    const ufRegex = /^[A-Z]{2}$/;

    if (!cepRegex.test(cep)) {
      alert("CEP inválido! Formato correto: 00000-000");
      return;
    }

    if (!logradouroRegex.test(logradouro)) {
      alert("O logradouro deve conter pelo menos 5 caracteres.");
      return;
    }

    if (!numeroRegex.test(numero)) {
      alert("O número deve conter apenas dígitos numéricos.");
      return;
    }

    if (!ufRegex.test(uf)) {
      alert("UF inválido! Use apenas 2 letras maiúsculas (ex: SP, RJ).");
      return;
    }

    alert("Endereço cadastrado com sucesso!");
    form.reset();
  });
});
