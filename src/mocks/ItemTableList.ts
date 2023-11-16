export interface Item {
    id: number
    dataRemoved: string
    link: string
    source: string
    action: boolean
    isSelected: boolean
}

const generateRandomNumber = (): number => {
    return Math.floor(Math.random() * 9000) + 1000
}

function getRandomDate() {
    const start = new Date(2023, 10, 1)
    const end = new Date(2023, 10, 31)
    const today = new Date()
    const formattedDate = today.toLocaleDateString()

    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    return `${randomDate.getDate()} ${getMonthName(
        randomDate.getMonth()
    )} ${randomDate.getFullYear()}`
}

function getMonthName(month: number) {
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

export const ItemList: Item[] = [
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Twitter',
        action: true,
        isSelected: true,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: false,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Twitter',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: false,
        isSelected: true,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Twitter',
        action: false,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: false,
        isSelected: true,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Twitter',
        action: false,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Twitter',
        action: false,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Twitter',
        action: false,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Twitter',
        action: false,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Twitter',
        action: false,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Twitter',
        action: false,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Google',
        action: true,
        isSelected: false,
    },
    {
        id: generateRandomNumber(),
        dataRemoved: getRandomDate(),
        link: 'https://google.com',
        source: 'Reddit',
        action: true,
        isSelected: false,
    },
]