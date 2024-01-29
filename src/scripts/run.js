const dataEvento = new Date("December 6, 2024 16:30:00")
const eventInMillis = dataEvento.getTime();

let tipo = true

const minutoEmMs = 1000 * 60;
const horaEmMs = minutoEmMs * 60;
const diaEmMs = horaEmMs * 24;

const contador = document.getElementById('contador');

const contadorAction = setInterval(() => {
    const diff = eventInMillis - new Date().getTime();

    const diasParaEvento = Math.floor(diff / diaEmMs);
    const mesesParaEvento = Math.floor(diasParaEvento / 30);
    const horasParaEvento = Math.floor(diff % diaEmMs / horaEmMs);
    const minutoParaEvento = Math.floor(diff % horaEmMs / minutoEmMs);
    const segundosParaEvento = Math.floor(diff % minutoEmMs / 1000);

    console.log(segundosParaEvento)
    // console.log(mesesParaEvento);

    if (tipo) {
        contador.innerHTML = `${diasParaEvento}d ${horasParaEvento}h ${minutoParaEvento}m ${segundosParaEvento}s`
    } else {
        contador.innerHTML = `${mesesParaEvento}m ${diasParaEvento - (mesesParaEvento * 30)}d ${horasParaEvento}h ${minutoParaEvento}m ${segundosParaEvento}s`
    }

    if (diff < 0) {
        clearInterval(contadorAction)
        contador.innerHTML = "06/12/2023"
        document.getElementById('contador-aux').innerHTML = "já aconteceu";
    }
}, 1000); // a cada segundo

contador.addEventListener('click', () => {
    tipo = !tipo;
});