/**
 * Algoritmo de detecção de anagramas
 * 
 * Projeto executado em sala de aula
 * Fábrica de Programador https://fabricadeprogramador.com.br
 */

function verificar() {

    // Pegar as palavras
    // Faz conversão das letras para minúsculas (toLowerCase)
    // Converte a string para um array de caracteres (Array.from)
    let palavra1 = Array.from(document.getElementById("palavra1").value.toLowerCase())
    let palavra2 = Array.from(document.getElementById("palavra2").value.toLowerCase())

    // Flag para teste final
    let temDiferenca = false;

    // Percorrer a primeira palavra
    for (let i = 0; i < palavra1.length; i++) {
        let letra1 = palavra1[i]
        if (palavra2.includes(letra1)) {
            // Remover o achado
            palavra2.splice(palavra2.indexOf(letra1), 1)
        } else {
            temDiferenca = true
            break // Quando achar uma letra em palavra que não está na outra então não é anagrama
        }
    }

    // Verifica se temDiferenca
    if (!temDiferenca) {
        showAlert("Show! É anagrama")
    } else {
        showAlert("Ops, não é anagrama")
    }
}

function showAlert(msg) {
    let alert = document.querySelector('.alert')
    let alertCard = document.querySelector('.alert-card')
    let alertMsg = document.querySelector('.alert-message')
    
    alertMsg.innerHTML = msg
    alert.style.display = 'flex'
    alert.style.animation = 'fade-in .3s'

    setTimeout(() => {
        alertCard.style.animation = "pop-up .3s forwards"
    }, 300);
}

function closeAlert() {
    let alert = document.querySelector('.alert')
    let alertCard = document.querySelector('.alert-card')

    alertCard.style.animation = "pop-out .3s forwards"
    
    setTimeout(() => {
        alert.style.animation = 'fade-out .3s forwards'    
    }, 300);

    setTimeout(() => {
        alert.style.display = 'none' 
    }, 600);
}