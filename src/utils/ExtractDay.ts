enum DayType {
    TODAY = 'Today',
    TOMORROW = 'Tomorrow',
    YESTERDAY = 'Yesterday',
    MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    THURSDAY = 'Thursday',
    FRIDAY = 'Friday',
    SATURDAY = 'Saturday',
    SUNDAY = 'Sunday',
}

export const ExtractDay = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const day = date.getDay();
    const isToday = new Date().toDateString() === date.toDateString();
    const isTomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toDateString() === date.toDateString();
    const isYesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toDateString() === date.toDateString();
    const isWithinAWeek = new Date(new Date().setDate(new Date().getDate() + 7)).toDateString() >= date.toDateString();
    if (isToday) {
        return DayType.TODAY;
    }
    if (isTomorrow) {
        return DayType.TOMORROW;
    }
    if (isYesterday) {
        return DayType.YESTERDAY;
    }
    if (isWithinAWeek) {
        switch (day) {
            case 0:
                return DayType.SUNDAY;
            case 1:
                return DayType.MONDAY;
            case 2:
                return DayType.TUESDAY;
            case 3:
                return DayType.WEDNESDAY;
            case 4:
                return DayType.THURSDAY;
            case 5:
                return DayType.FRIDAY;
            case 6:
                return DayType.SATURDAY;
            default:
                return '';
        }
    }
    const dayShort = date.toDateString().split(' ')[0];
    const month = date.toDateString().split(' ')[1];
    const dayNum = date.toDateString().split(' ')[2];
    return `${dayShort}, ${month} ${dayNum}`;
};
