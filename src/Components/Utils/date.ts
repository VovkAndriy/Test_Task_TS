export function getRandomDate() {
    const start = new Date(2023, 10, 1)
    const end = new Date(2023, 11, 31)
    const today = new Date()

    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    return `${randomDate.getDate()} ${getMonthName(
        randomDate.getMonth()
    )} ${randomDate.getFullYear()}`
}

export function getCurrentDate() {
    const today = new Date()
    return `${today.getDate()} ${getMonthName(today.getMonth())} ${today.getFullYear()}`
}

export function getMonthName(month: number) {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
    return months[month]
}

export const getMonthIndex = (month: any) => {
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
    return monthNames.indexOf(month)
}
