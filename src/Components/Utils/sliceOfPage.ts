export const sliceOfPage = (items: any, page: number, itemsPerPage: number): any => {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return items.slice(startIndex, endIndex)
}
