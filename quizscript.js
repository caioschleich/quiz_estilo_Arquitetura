const botaoenviar = document.querySelector('#botaoenviar')

const exibeDiv = function () {
  document.getElementById('answers-visible').style.visibility = 'visible'
}

botaoenviar.addEventListener('click', exibeDiv, false)

document.getElementById('form').onsubmit = function () {
  color = parseInt(
    document.querySelector('input[name = "color"]:checked').value
  )

  chair = parseInt(
    document.querySelector('input[name = "chair"]:checked').value
  )

  film = parseInt(document.querySelector('input[name = "film"]:checked').value)

  art = parseInt(document.querySelector('input[name = "art"]:checked').value)

  total = (color + chair + film + art) / 4

  //document.getElementById('answerscore').innerHTML = total

  if (total <= 1.5) {
    document.getElementById('answerhead').innerHTML =
      'Você combina com o estilo:'
    document.getElementById('answertitle').innerHTML = 'Clássico'
    document.getElementById('answertxt').innerHTML =
      'Elegante, regrado e muito ornamentado, o estilo Clássico resgata a pureza e a proporção da Antiguidade e do Renascimento, com cores neutras, sobretudo em paletas monocromáticas, utlizando regras matemáticas para desenhar cada elemento do espaço.'
    document.getElementById('answerimg').src = './img/resultclassico.jpg'
    document.getElementById('answercall').innerHTML =
      'Gostou? Se sim ou se não, entre em contato com o <a href="https://www.hiper.arq.br" target="_blank" id="answerspan">Hiperespaço Arquitetura</a> para conhecer ainda mais o que combina com você!'
  }

  if (total > 1.5 && total <= 2.25) {
    document.getElementById('answerhead').innerHTML =
      'Você combina com o estilo:'
    document.getElementById('answertitle').innerHTML = 'Industrial'
    document.getElementById('answertxt').innerHTML =
      'Urbano e despojado, o estilo Industrial se popularizou com os lofts de artistas de Nova Iorque nos anos 60. Utiliza objetos e materiais duráveis e de fácil manutenção, além de buscar novos significados e usos para elementos produzidos em série.'
    document.getElementById('answerimg').src = './img/resultindustrial.jpg'
    document.getElementById('answercall').innerHTML =
      'Gostou? Se sim ou se não, entre em contato com o <a href="https://www.hiper.arq.br" target="_blank" id="answerspan">Hiperespaço Arquitetura</a> para conhecer ainda mais o que combina com você!'
  }

  if (total > 2.25 && total <= 3) {
    document.getElementById('answerhead').innerHTML =
      'Você combina com o estilo:'
    document.getElementById('answertitle').innerHTML = 'Moderno'
    document.getElementById('answertxt').innerHTML =
      'O estilo Moderno explora o que cada material tem de melhor, revelando particularidades e potências de cada elemento. A ornamentação e estamparia são substituídas por formas gemoétricas puras, curvas sinuosas, cores neutras ou primárias e planos ortogonais.'
    document.getElementById('answerimg').src = './img/resultmoderno.jpg'
    document.getElementById('answercall').innerHTML =
      'Gostou? Se sim ou se não, entre em contato com o <a href="https://www.hiper.arq.br" target="_blank" id="answerspan">Hiperespaço Arquitetura</a> para conhecer ainda mais o que combina com você!'
  }
  if (total > 3) {
    document.getElementById('answerhead').innerHTML =
      'Você combina com o estilo:'
    document.getElementById('answertitle').innerHTML = 'Contemporâneo'
    document.getElementById('answertxt').innerHTML =
      'Aprofundado e cada vez mais aplicado dia após dia, o estilo Contemporâneo ainda conta com muitas heranças do estilo Moderno, porém abre mão da simplicidade excessiva para buscar formas, materiais e texturas que tragam ornamentação à composição, de forma sutil e elegante.'
    document.getElementById('answerimg').src = './img/resultcontemp.jpg'
    document.getElementById('answercall').innerHTML =
      'Gostou? Se sim ou se não, entre em contato com o <a href="https://www.hiper.arq.br" target="_blank" id="answerspan">Hiperespaço Arquitetura</a> para conhecer ainda mais o que combina com você!'
  }

  return false
}
