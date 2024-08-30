function converter() {
    let metros = parseFloat(document.getElementById('metros').value)
    let unidade = document.getElementById('unidade').value
    
    const metrosPorJarda = 1.094
    const metrosPorPe = 3.281
    const metrosPorPolegada = 39.37
    const metrosPorMilha = 0.000621
    
    let resultado
    switch (unidade) {
        case 'jarda':
            resultado = metros * metrosPorJarda
            break
        case 'pé':
            resultado = metros * metrosPorPe
            break
        case 'polegada':
            resultado = metros * metrosPorPolegada
            break
        case 'milha':
            resultado = metros * metrosPorMilha
            break
        default:
            resultado = 'Unidade não reconhecida.'
            break
    }
    
    document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(2)} ${unidade}(s)`
}

const botao = document.querySelector('#converterButton')

botao.addEventListener('click', () =>{
    converter()
})
