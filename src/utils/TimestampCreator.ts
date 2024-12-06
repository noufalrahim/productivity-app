export function TimestampCreator(date: Date, time: Date): number {
    const year = date.getFullYear();
    const month = date.getMonth();

    const day = date.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const combinedDateTime = new Date(year, month, day, hours, minutes, seconds);

    console.log('log/TimestampCreator/func: ', combinedDateTime.getTime());
    return combinedDateTime.getTime();
}
