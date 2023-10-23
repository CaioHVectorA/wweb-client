const nomes = document.getElementById("nome");
const selectElement  = document.getElementById("salas");

selectElement.addEventListener("change", function() {
    const selectedValue = selectElement.value;

    switch (selectedValue) {
        case "1":
            nomes.textContent = "Zephyr";
            break;
        case "2":
            nomes.textContent = "Celestia";
            break;
        case "3":
            nomes.textContent = "Quasar";
            break;
        case "4":
            nomes.textContent = "Xerxes";
            break;
        case "21":
            nomes.textContent = "Nebula";
            break;
        case "22":
            nomes.textContent = "Luna";
            break;
        case "23":
            nomes.textContent = "Orion";
            break;
        case "24":
            nomes.textContent = "Draven";
            break;
        case "31":
            nomes.textContent = "Seraphina";
            break;
        case "32":
            nomes.textContent = "Ragnarok";
            break;
        case "33":
            nomes.textContent = "Ozymandias";
            break;
        case "34":
            nomes.textContent = "Zephyra";
            break;
        default:
            nomes.textContent = "sem nome";
    }
});
 let imagemAtual = 1;

function myFunction(){
   


        const pessoas = document.getElementById("pessoas");

        if (imagemAtual === 1) {
            pessoas.src = "./img/sidebar/do-utilizador (3) 1.png";
            pessoas.alt = "Imagem 2";
            pessoas.width = 30
            imagemAtual = 2;
        } else {
            pessoas.src = "./img/sidebar/do-utilizador (2) 1.png";
            pessoas.width = 30
            pessoas.alt = "Imagem 1";
            imagemAtual = 1;
        }
}

