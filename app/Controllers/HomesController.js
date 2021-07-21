import { ProxyState } from "../AppState.js"
import { homesService } from "../Services/HomesService.js"


function _draw() {
    let template = ''
    ProxyState.homes.forEach(home => {
        template += home.Template
    })
    document.getElementById('homes').innerHTML = template
}


export default class HomesController {

    constructor() {
        ProxyState.on('homes', _draw)

        _draw()
    }

    async createHome() {
        event.preventDefault()
        let form = event.target
        let rawHome = {
            year: form.year.value,
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            price: form.price.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value,
            levels: form.levels.value
        }
        await homesService.createHome(rawHome)
        form.reset()
    }

    deleteHome(homeId) {
        homesService.deleteHome(homeId)
    }
}