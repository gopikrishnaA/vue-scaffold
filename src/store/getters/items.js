export const items = ({ summary: { items } }) => items

export const info = ({ info }) => info

export const currentJoke = ({ info }) => info.joke

export const likeCount = ({ summary: { items } }) => Object.keys(items).filter(key => items[key].status === 'Like').length

export const unlikeCount = ({ summary: { items } }) => Object.keys(items).filter(key => items[key].status === 'UnLike').length

export const totalCount = ({ summary: { items } }) => Object.keys(items).length

export const isSort = ({ summary: { isSort } }) => isSort

export const sortByTime = ({ summary: { items, isSort, status } }) => {
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
}

export const filterItems = ({ summary: { items, status } }) => {
  return status === 'All' ? items : Object.keys(items)
    .filter(key => items[key].status === status)
    .reduce((obj, key) => {
      obj[key] = items[key]
      return obj
    }, {})
}
