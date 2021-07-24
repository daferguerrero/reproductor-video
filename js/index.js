const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pausa = document.querySelector('#pausa')
const $retroceder = document.querySelector('#retroceder')
const $avanzar = document.querySelector('#avanzar')



//Botones de play y pausa

$play.addEventListener('click', manejarPlay)
$pausa.addEventListener('click', manejarPausa)

function manejarPlay() {
    $video.play()
    $play.hidden = true
    $pausa.hidden = false
    console.log('Le diste clic al botón Play')
}

function manejarPausa() {
    $video.pause()
    $pausa.hidden = true
    $play.hidden = false
    console.log('Le diste clic al botón Pausa')
}



//Botones de retroceder y avanzar

retroceder.addEventListener('click', manejarRetroceder)
avanzar.addEventListener('click', manejarAvanzar)

function manejarRetroceder() {
     $video.currentTime = $video.currentTime - 10 // currentTime dice exactamente donde esta en segundos la reproducción del video
    console.log('Retroceder 10 segundos')
}

function manejarAvanzar() {
    $video.currentTime = $video.currentTime + 10 // currentTime dice exactamente donde esta en segundos la reproducción del video
    console.log('Avanzar 10 segundos', $video.currentTime)
}



//Barra progreso

const $progreso = document.querySelector('#progreso')
$video.addEventListener('loadedmetadata', manejarBarraProgreso)
$video.addEventListener('timeupdate', manejarTiempoActual)

function manejarBarraProgreso() {
    $progreso.max = $video.duration
    console.log('Se ha cargado el video', $video.duration)
}

function manejarTiempoActual() {
    $progreso.value = $video.currentTime
    // console.log('tiempo actual', $video.currentTime)
}

$progreso.addEventListener('input', manejarInput)

function manejarInput() {
    $video.currentTime = $progreso.value
    console.log($progreso.value)
}



//Botones de muted

// const $silenciarOn = document.querySelector('#silenciar-on')

// $silenciarOn.addEventListener('click', manejarMuteOn)

// function manejarMuteOn() {
//     $video.muted()
//     $video.muted = false
//     // $muteOff.muted = false
//     console.log('Le diste clic al botón silenciar')

