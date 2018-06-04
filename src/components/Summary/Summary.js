import { mapGetters } from 'vuex'
export default {
  name: 'Summary',
  data () {
    return {
      items: this.$store.state.summary.items,
      upArrow: 'http://tablesorter.com/themes/blue/asc.gif',
      downArrow: 'http://tablesorter.com/themes/blue/desc.gif'
    }
  },
  mounted () {
    this.$store.dispatch('selectStatus', 'All')
  },
  methods: {
    navigate: function (id) {
      this.$router.push({ name: 'joke', params: { id } })
    },
    filterBy: function (event) {
      this.$store.dispatch('selectStatus', event.target.value)
      this.items = this.filterItems
    },
    filterDate: function () {
      this.$store.dispatch('sortOrder')
      this.items = this.sortByTime
    }
  },
  computed: {
    ...mapGetters([
      'likeCount',
      'unlikeCount',
      'totalCount',
      'sortByTime',
      'isSort',
      'filterItems'])
  }
}
