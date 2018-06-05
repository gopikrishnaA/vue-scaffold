const items = {
  items: ({ summary: { items } }) => items,
  info: ({ info }) => info,
  currentJoke: ({ info }) => info.joke,
  likeCount: ({ summary: { items } }) => Object.keys(items).filter(key => items[key].status === 'Like').length,
  unlikeCount: ({ summary: { items } }) => Object.keys(items).filter(key => items[key].status === 'UnLike').length,
  totalCount: ({ summary: { items } }) => Object.keys(items).length,
  isSort: ({ summary: { isSort } }) => isSort,
  sortByTime: ({ summary: { items, isSort, status } }) => {
    const filteredItems = status === 'All' ? Object.keys(items) : Object.keys(items).filter(key => items[key].status === status)
    return filteredItems.sort((a, b) => {
      return isSort ? (items[a].timeStamp > items[b].timeStamp ? -1
        : items[a].timeStamp < items[b].timeStamp ? 1 : 0)
        : (items[a].timeStamp < items[b].timeStamp ? -1
          : items[a].timeStamp > items[b].timeStamp ? 1 : 0)
    })
      .reduce((obj, key) => {
        obj[key] = items[key]
        return obj
      }, {})
  },
  filterItems: ({ summary: { items, status } }) => {
    return status === 'All' ? items : Object.keys(items)
      .filter(key => items[key].status === status)
      .reduce((obj, key) => {
        obj[key] = items[key]
        return obj
      }, {})
  }
}

export default items
