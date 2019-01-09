import moment from 'moment'

export const formatDate = {
  methods: {
    formatDate (date, format) {
      return moment(String(date)).format(format)
    }
  }
}
