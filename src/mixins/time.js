const time = {
  methods: {
    time() {
      const date = new Date(),
        day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`,
        month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
        year = date.getFullYear(),
        hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`,
        minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`

      return `${day}/${month}/${year} ${hours}:${minutes}`
    }
  }
}

export default time
