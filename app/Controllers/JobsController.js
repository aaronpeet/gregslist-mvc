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

  async  createJob() {
        event.preventDefault()
        let form = event.target
        let rawJob = {
            company: form.company.value,
            jobTitle: form.jobTitle.value,
            rate: form.rate.value,
            description: form.description.value,
            hours: form.hours.value
        }
      await  jobsService.createJob(rawJob)
        form.reset()
  }
    
    deleteJob(jobId) {
        jobsService.deleteJob(jobId)
    }

}