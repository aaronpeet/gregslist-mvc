import { ProxyState } from "../AppState.js"
import { api } from "../Services/AxiosService.js"
import Home from "../Models/Home.js"


class HomesService{

    constructor() {
        this.getAllHomes()
    }

    async getAllHomes() {
        const res = await api.get('houses')
        ProxyState.homes = res.data.map(home => new Home(home))
    }

    async createHome(rawHome) {
        const res = await api.post('houses', rawHome)
        ProxyState.homes = [...ProxyState.homes, new Home(res.data)]
    }

    async deleteHome(homeId) {
        const res = await api.delete('houses/' + homeId)
        ProxyState.homes = ProxyState.homes.filter(h = h.id != homeId)
    }
}

export const homesService = HomesService()