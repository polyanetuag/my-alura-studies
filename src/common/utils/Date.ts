export function timeForSeconds(time: string) {
    //separar o array em horas, minutos e segundos
    const [hour = '0', minutes = '0', seconds = '0'] = time.split(':');

    //conversão para segundos
    const timeInSeconds = Number(hour) * 3600
    const timeInMinutes = Number(minutes) * 60;

    return timeInSeconds + timeInMinutes + Number(seconds);
    
    
}