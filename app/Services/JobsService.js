import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"
import { api } from "./AxiosService.js"

class JobsService{
     
    constructor() {
        this.getAllJobs()
        console.log('got jobs from api')
    }
     
    async createJob(rawJob) {
        const res = await api.post('jobs', rawJob)
        ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
     }
    
    async deleteJob(jobId) {
        const res = await api.delete('jobs/' + jobId)
        ProxyState.jobs = ProxyState.jobs.filter(j => j.id != jobId)
    }

   async getAllJobs() {
       const res = await api.get('jobs')
       ProxyState.jobs = res.data.map(job => new Job(job))
    }
 }

 export const jobsService = new JobsService()