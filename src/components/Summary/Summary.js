export default {
  name: 'Summary',
  data () {
    return {
      items: this.$store.state.items,
      likeCount: Object.keys(this.$store.state.items).filter(key => this.$store.state.items[key].status === 'Like').length,
      unlikeCount: Object.keys(this.$store.state.items).filter(key => this.$store.state.items[key].status === 'UnLike').length,
      upArrow: 'http://tablesorter.com/themes/blue/asc.gif',
      downArrow: 'http://tablesorter.com/themes/blue/desc.gif',
      isSort: false
    }
  },
  methods: {
    navigate: function (id) {
      this.$router.push({ name: 'joke', params: {id} })
    },
    filterBy: function (event) {
      const totalItems = this.$store.state.items
      const value = event.target.value
      this.items = value === 'All' ? totalItems : Object.keys(totalItems)
        .filter(key => totalItems[key].status === value)
        .reduce((obj, key) => {
          obj[key] = totalItems[key]
          return obj
        }, {})
    },
    filterDate: function () {
      const totalItems = this.items
      this.isSort = !this.isSort
      this.items = Object.keys(totalItems)
        .sort((a, b) => {
          return this.isSort ? (totalItems[a].timeStamp > totalItems[b].timeStamp ? -1
            : totalItems[a].timeStamp < totalItems[b].timeStamp ? 1 : 0)
            : (totalItems[a].timeStamp < totalItems[b].timeStamp ? -1
              : totalItems[a].timeStamp > totalItems[b].timeStamp ? 1 : 0)
        })
        .reduce((obj, key) => {
          obj[key] = totalItems[key]
          return obj
        }, {})
    }
  }
}
