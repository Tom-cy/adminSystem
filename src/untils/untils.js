export default {

    gettime(time) {
        console.log(time)
        let date = new Date()
        return date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate()+'  '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    }
}