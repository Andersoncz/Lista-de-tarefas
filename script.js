const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa() {

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()

}
   
 function mostrarTarefas() {
  
    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {

    novaLi = novaLi + ` 

        <li class="task ${item.concluida && "done"}">
           <img src="./imagens/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
           <p>${item.tarefa} </p>
           <img src="./imagens/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
          
        </li> `
           
           

        

    })
    
    listaCompleta.innerHTML = novaLi
    
    }
    function concluirTarefa(posicao){
        minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

        mostrarTarefas()

    }

    function deletarItem(posicao){
        minhaListaDeItens.splice(posicao, 1)   
        
        mostrarTarefas()
    }
    
    button.addEventListener('click', adicionarNovaTarefa)

  
        









