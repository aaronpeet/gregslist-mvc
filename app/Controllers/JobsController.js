import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";

function _draw() {
    let template = ''
    ProxyState.jobs.forEach(job => {
        template += job.Template
    })
    document.getElementById('jobs').innerHTML = template
}

export default class JobsController{
    constructor() {
        ProxyState.on('jobs', _draw)
    _draw()
    }

    createJob() {
        event.preventDefault()
        let form = event.target
        let rawJob = {
            company: form.company.value,
            position: form.position.value,
            salary: form.salary.value,
            logo: form.logo.value,
            description: form.description.value
        }
        jobsService.createJob(rawJob)
        form.reset()
}

}