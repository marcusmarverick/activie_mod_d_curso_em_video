// Variaveis da pagina
function carregar() {
  var msg = window.document.getElementaryById('msg')
  var img = window.document.getElementaryById('imagem')
  var data = new Date()
  var hora + data.getHours()
  msg.innerHTML = `Agora são ${hora} horas!`

  if (hora >=0 && <12) {
    // Bom dia! // Goog Morning! // Guten Mogen!
        img.src='manha-removebg-preview.png'
        document.body.style.backgroud = '#'
  } else if (hora >= 12 && hora <=18) {
    // Boa Tarde! // Good Afternoon! // Guten Tagen!
        img.src='tarde-removebg-preview.png'
        document.body.style.backgroud = '#'
  } else {
    // Boa Noite! // Good Evening! // Guten Abend!
        img.src='noite-removebg-preview.png'
        document.body.style.backgroud = '#'
  }
} 

