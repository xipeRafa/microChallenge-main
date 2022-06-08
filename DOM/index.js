function tipoNodo() {

  let lista = document.getElementById('bloque')

  for(let x=0; x < lista.childNodes.length-1; x++) {

    if (lista.childNodes[x].nodeType==Node.TEXT_NODE){
      console.log("Nodo tipo Texto")
    }

    if (lista.childNodes[x].nodeType==Node.ELEMENT_NODE){
      console.log("Nodo tipo Elemento")
    } 

  }
  
}

function sumarUno(){
  let obj=document.getElementById('contador')
  let sum = obj.childNodes[0].nodeValue 
  obj.childNodes[0].nodeValue = parseInt(sum)+1
}

function cambiarTexto() {
  let tit=document.getElementById('titulo')
  tit.childNodes[0].nodeValue='Ahora vemos el nuevo título'
}

function cambiarTamFuente() {

  let parent = document.getElementById('parrafo1').parentNode

   parent.style.fontSize='8px'  

}

function proximoParrafo(){
  let puntero1=document.getElementById('parrafos')
  let puntero2=puntero1.firstChild

  while (puntero2!=null){
      if (puntero2.nodeType==Node.ELEMENT_NODE)
      console.log('log1:', puntero2.childNodes[0].nodeValue)
                  puntero2=puntero2.nextSibling
  }
}

function parrafoAnterior(){
  let puntero1=document.getElementById('parrafos')
  let puntero2=puntero1.lastChild

  while (puntero2!=null){
    if (puntero2.nodeType==Node.ELEMENT_NODE)
      console.log(puntero2.childNodes[0].nodeValue)
         puntero2=puntero2.previousSibling
  }
}

function ocultarParrafos(){
  let obj=document.getElementById("bloque2")
  let lista=obj.getElementsByTagName('p')

    for(f=0; f< lista.length; f++) {
      lista[f].style.display='none'
    }
}


            let contadorx = 0

            function agregar(){
              contadorx++
                let nt=document.createTextNode(' Nuevo texto '+contadorx+' - ')
                let nparrafo=document.getElementById('parrafo')

                nparrafo.appendChild(nt)

                
            }

            let contadora=1

            function agregar(){
              let nt=document.createTextNode('Nuevo texto ' + contadora + ' - ')
              let nparrafo=document.getElementById('parrafoa')
              nparrafo.appendChild(nt)
              contadora++
            }

            function eliminar(){
              let nparrafo=document.getElementById('parrafoa')

              if (nparrafo.hasChildNodes()){
                 nparrafo.removeChild(nparrafo.lastChild)
                 contadora--
              }
            }            

function eliminarAtributo(){
    let puntero=document.getElementById('enlace1')
    puntero.removeAttribute('href')
    puntero=document.getElementById('enlace2')
    puntero.removeAttribute('href')
  }

  function inicializarAtributo(){
    let puntero=document.getElementById('enlace1')
    puntero.setAttribute('href','http://www.google.com.ar')
    puntero=document.getElementById('enlace2')
    puntero.setAttribute('href','http://www.yahoo.com.ar')
  }

function definirAtributo(){
    let reftabla=document.getElementById('tabla1')
    reftabla.setAttribute('border','5')
  }

  function borrarAtributo(){
      let reftabla=document.getElementById('tabla1')
      reftabla.removeAttribute('border')   
  }



  function recuperarAtributo(){
 
    let puntero1=document.getElementById('enlace1')
    let puntero2=document.getElementById('enlace2')
   
    console.log('GOOGLE 1:', puntero1.getAttribute('href'))
    console.log(' YAHOO 1:', puntero2.getAttribute('href'))

    puntero2.setAttribute('href',puntero1.getAttribute('href'))

    console.log('GOOGLE 2:', puntero1.getAttribute('href'))
    console.log(' YAHOO 2:', puntero2.getAttribute('href'))

}

function cambiarAtributo()
{
  let reftabla=document.getElementById('tabla11')
  if (reftabla.hasAttribute('border'))
    reftabla.removeAttribute('border')
  else
    reftabla.setAttribute('border','1')
}


function aumentarBorde(){

    let reftabla=document.getElementById('tabla12')

    if (reftabla.hasAttribute('border')){
        let valor=reftabla.getAttribute('border')
        valor++
        reftabla.setAttribute('border',valor)
    } else {
        reftabla.setAttribute('border','10')
      }           
}

function moverItem(){
    let ref1=document.getElementById('lista1')
    let refHijo=ref1.firstElementChild

    let ref2=document.getElementById('lista2')
    ref2.appendChild(refHijo)
}

function clonarNodo()
{
  let id=document.getElementById('titulo')
  let nuevos=id.cloneNode(true)
  nuevos.style.id=nuevos.style.id + 'b'
  id=document.getElementById("region")
  id.appendChild(nuevos)
}

/* function tipoDeNodos()
{
  let puntero=document.getElementById('grupo')
  console.log(puntero.nodeName + " es de tipo " + puntero.nodeType)
  let hijo=puntero.childNodes[0]
  console.log(hijo.nodeName + " es de tipo " + hijo.nodeType)
  let nieto=hijo.childNodes[0]
  console.log(nieto.nodeName + " es de tipo " + nieto.nodeType)
} */

function tipoDeNodos()
{
  let puntero=document.getElementById('parrafo')
  for(f=0; f<puntero.childNodes.length; f++)
  {  
    console.log(puntero.childNodes[f].nodeName + " es de tipo " + puntero.childNodes[f].nodeType)
  }
}


/* ---------------------------------- */

function cambiarColorFondo()
{
  let pun=document.getElementById('colorfondo')
  let punrec=document.getElementById('recuadro')
  punrec.style.backgroundColor=pun.value
}

function cambiarColorFuente()
{
  let pun=document.getElementById('colorfuente')
  let punrec=document.getElementById('recuadro')
  punrec.style.color=pun.value
}

function cambiarTamanoFuente()
{
  let pun=document.getElementById('tamanofuente')
  let punrec=document.getElementById('recuadro')
  punrec.style.fontSize=pun.value
}

function cambiarTipoFuente()
{
  let pun=document.getElementById('tipofuente')
  let punrec=document.getElementById('recuadro')
  punrec.style.fontFamily=pun.value
}

function cambiarEstiloFuente()
{
  let pun=document.getElementById('estilofuente')
  let punrec=document.getElementById('recuadro')
  punrec.style.fontStyle=pun.value
}

function cambiarPesoFuente()
{
  let pun=document.getElementById('pesofuente')
  let punrec=document.getElementById('recuadro')
  punrec.style.fontWeight=pun.value
}

function cambiarAlineacionFuente()
{
  let pun=document.getElementById('alineacionfuente')
  let punrec=document.getElementById('recuadro')
  punrec.style.textAlign=pun.value
}

function cambiarDecoracionFuente()
{
  let pun=document.getElementById('decoracionfuente')
  let punrec=document.getElementById('recuadro')
  punrec.style.textDecoration=pun.value
}

function cambiarEspacioLetras()
{
  let pun=document.getElementById('espacioletras')
  let punrec=document.getElementById('recuadro')
  punrec.style.letterSpacing=pun.value
}

function cambiarEspacioPalabras()
{
  let pun=document.getElementById('espaciopalabras')
  let punrec=document.getElementById('recuadro')
  punrec.style.wordSpacing=pun.value
}

function cambiarTransformacionTexto()
{
  let pun=document.getElementById('transformaciontexto')
  let punrec=document.getElementById('recuadro')
  punrec.style.textTransform=pun.value
}

function cambiarAnchoBorde()
{
  let pun=document.getElementById('anchoborde')
  let punrec=document.getElementById('recuadro')
  punrec.style.borderWidth=pun.value
}

function cambiarEstiloBorde()
{
  let pun=document.getElementById('estiloborde')
  let punrec=document.getElementById('recuadro')
  punrec.style.borderStyle=pun.value
}

function cambiarColorBorde()
{
  let pun=document.getElementById('colorborde')
  let punrec=document.getElementById('recuadro')
  punrec.style.borderColor=pun.value
}

function cambiarPadding()
{
  let pun=document.getElementById('padding')
  let punrec=document.getElementById('recuadro')
  punrec.style.padding=pun.value
}

function cambiarMargin()
{
  let pun=document.getElementById('margin')
  let punrec=document.getElementById('recuadro')
  punrec.style.margin=pun.value
}

/* -------- */

function cambiarEstiloLista()
{
  let pun=document.getElementById('listapaises')
  let punselect=document.getElementById('estilolista')
  pun.style.listStyleType=punselect.value
}



function crearText() 
{
  let actuales=document.getElementById('seccion')
  let cant=actuales.childNodes.length
  for(f=0; f< cant; f++)
  {
    actuales.removeChild(actuales.childNodes[0])
  }
  let se=document.getElementById('seleccion')
  let cantidad=0
  for(f=0; f< se.value; f++)
  {
    cantidad++
    let nuevohijo = document.createElement('input')
    nuevohijo.type = 'text'
    nuevohijo.name = 'nombre' + cantidad
    nuevohijo.id = 'nombre' + cantidad
    document.getElementById('seccion').appendChild(nuevohijo)
    document.getElementById('seccion').appendChild(document.createElement('br'))
  }
}

 
function mostrarAtributos(objeto)
{
  let ref=document.getElementById('titulo11')
  ref.firstChild.nodeValue='Name:'+objeto.name+' Id:'+objeto.id+' Value:'+objeto.value
}

window.addEventListener('load',inicializarEventos,false)

function inicializarEventos()
{
  let ob1=document.getElementById('boton1')
  ob1.addEventListener('click',crearEnlaces,false)
}

function crearEnlaces(e)
{
  //Utilizando el innerHTML
  let ob1=document.getElementById("enlaces1")
  ob1.innerHTML='<a href="'+document.getElementById('text1').value+'">Enlace 1</a><br>'+'<a href="'+document.getElementById('text2').value+'">Enlace 2</a>'

  //Utilizando los métodos para crear nodos de elemento y texto
  let elemento=document.createElement('a')
  let puntero=document.getElementById('enlaces2')
  puntero.appendChild(elemento)
  let nodotexto=document.createTextNode('Enlace 1')
  elemento.appendChild(nodotexto)
  elemento.setAttribute('href',document.getElementById('text1').value)
  puntero.appendChild(document.createElement('br'))  
  elemento=document.createElement('a')
  puntero.appendChild(elemento)
  nodotexto=document.createTextNode('Enlace 2')
  elemento.appendChild(nodotexto)
  elemento.setAttribute('href',document.getElementById('text2').value)
}

window.addEventListener('load',inicializarEventos2,false)

function inicializarEventos2()
{
  let enlaces=document.getElementsByTagName('a')
  for(f=0; f< enlaces.length; f++)
  {
    enlaces[f].addEventListener('click',enlaceSeleccionado,false)
  }
}

function enlaceSeleccionado(e)
{
  let check=document.getElementById('check1')
  if (check.checked)
  {
    let enlace
    enlace=e.target
    e.preventDefault()        
    window.open(enlace.getAttribute('href'))
  }
}


 /*  window.addEventListener('load',inicializarEventos3,false)

function inicializarEventos3(e)
{
  let ob=document.createElement('div')
  ob.style.left='0px'
  ob.style.top='0px'
  ob.style.width='100px'
  ob.style.height='100px'
  ob.style.background='#ff0'
  ob.style.position='relative'
  let x=document.getElementsByTagName('body')
  x[0].appendChild(ob)
  let recu1=new Recuadro(ob)
}


Recuadro=function(div)
{
    let tX=0
    let tY=0
    let difX=0
    let difY=0

    div.addEventListener('mousedown',inicioDrag,false)


    function coordenadaX(e)
    {
      return e.pageX
    }

    function coordenadaY(e)
    {
      return e.pageY
    }

    function inicioDrag(e) 
    {
      let eX=coordenadaX(e)
      let eY=coordenadaY(e)
      let oX=parseInt(div.style.left)
      let oY=parseInt(div.style.top)
      difX=oX-eX
      difY=oY-eY
      document.addEventListener('mousemove',drag,false)
      document.addEventListener('mouseup',soltar,false)

    }

    function drag(e) 
    { 
      tX=coordenadaY(e)+difY+'px'
      tY=coordenadaX(e)+difX+'px'
      div.style.top=tX 
      div.style.left=tY 
    }
  

    function soltar(e)
    { 
      document.removeEventListener('mousemove',drag,false)
      document.removeEventListener('mouseup',soltar,false)
    }
}
 */