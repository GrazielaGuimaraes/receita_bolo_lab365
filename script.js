
//Gerando a hora atual
let data = new Date()

const hora = data.getHours()

const minutos = data.getMinutes()

const segundos = data.getSeconds()

const horaAtual = hora+':'+minutos+":"+segundos

console.log('Hora atual: ' + horaAtual)

if(hora >= 6 && hora < 12){
     //06:00 && 11:59
     console.log('Bom dia')
} 
    else if(hora >= 12 && hora < 18){
         //12:00 && 17:59
        console.log('Boa tarde')
    }
      else if(hora >= 18 && hora < 24){
        //18:00 && 23:59
        console.log('Boa noite')
      }

      else if( hora >= 00 && hora < 6){
         //00:00 && 5:59
        console.log('Madrugada')
      }

      else{
        console.log('Erro')
      }
   

   /*Gera um pdf com os ingredientes e modo de preparo*/
  function  baixar() {

    let ingredientes = document.getElementById('lista-ingredientes').innerText
    let preparo = document.getElementById('lista-preparo').innerText

    let doc = new jsPDF()
    doc.text('Bolo de Milho', 10, 10)
    doc.text(ingredientes, 10, 30)
    doc.text('Modo de Preparo', 10, 90)
    doc.text(preparo, 10, 110)

    doc.save("receita_bolo_de_milho.pdf")

    }

 