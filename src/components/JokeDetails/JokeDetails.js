import { mapGetters } from 'vuex'
export default {
  name: 'JokeDetails',
  mounted () {
    if (!this.$route.params.id) {
      this.$store.dispatch('getJoke')
    }
  },
  methods: {
    serviceCall: function (status) {
      const info = !this.$route.params.id ? this.info : this.items[this.$route.params.id]
      this.$store.dispatch('rateJoke', {
        ...info,
        status
      })
      if (!this.$route.params.id) {
        this.$store.dispatch('getJoke')
      } else {
        this.$router.push({ name: 'JokeDetails' })
      }
    },
    navigate: function () {
      this.$router.push({ name: 'Summary' })
    }
  },
  computed: {
    ...mapGetters(['items', 'currentJoke', 'info'])
  }
}
