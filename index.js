function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  let mostrarReloj=()=>{
	let reloj=document.getElementById('reloj')
	let fec_Datos=document.getElementById('fec_Datos')
	let fecha =new Date();
	let hora=fecha.getHours()
	let minutos=fecha.getMinutes()
	let segundos=fecha.getSeconds()
	let mes=fecha.getMonth()
	let dia=fecha.getDate()
	let año=fecha.getFullYear()

	let dias=['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
	let meses=['diciembre','enero','febrero','marzo','abril','mayo','junnio','julio','agosto','septiembre','noviembre', 'diciembre']

	mes=meses[mes]
	let hr=(hora>12) ? hora-12 : hora
	let am=(hora<12)? 'AM' :'PM'
	if(hora<10){hora='0'+hora}
	if(minutos<10){minutos='0'+ minutos}
	if(segundos<1){segundos='0'+minutos}

	reloj.textContent=`${hr}:${minutos}:${segundos}:${am}`
	fec_Datos.textContent=`${dia} ${mes} del ${año}`
   }

   setInterval(mostrarReloj,1000)