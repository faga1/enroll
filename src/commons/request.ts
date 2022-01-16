import axios from 'axios'

interface Data{
    code:number,
    data:any,
    message:string
}
const request = axios.create({
    baseURL: 'http://4c7705577i.picp.vip',
})

export async function sendResume(form:any){
    const { data } = await request.post('/interviewee', form)
    console.log(data);
    return data
}