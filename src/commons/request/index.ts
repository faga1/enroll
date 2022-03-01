import axios from 'axios'
import { ElMessage } from 'element-plus'

interface Data{
    success:boolean,
    code:number,
    data:any,
    message:string
}
interface message {
    [index: number]:string
}
const codeMessage:message = {
	200: "服务器成功返回请求的数据。",
	201: "新建或修改数据成功。",
	202: "一个请求已经进入后台排队（异步任务）。",
	204: "删除数据成功。",
	400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
	401: "用户没有权限（令牌、用户名、密码错误）。",
	403: "用户得到授权，但是访问是被禁止的。",
	404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
	406: "请求的格式不可得。",
	410: "请求的资源被永久删除，且不会再得到的。",
	422: "当创建一个对象时，发生一个验证错误。",
	500: "服务器发生错误，请检查服务器。",
	502: "网关错误。",
	503: "服务不可用，服务器暂时过载或维护。",
	504: "网关超时。",
};
const request = axios.create({
    baseURL: 'http://4c7705577i.picp.vip',
})
request.interceptors.request.use((config) => {
    console.log(JSON.stringify(config));
    return config
})
request.interceptors.response.use((response) => {
    console.log(JSON.stringify(response));
    if (response.status !== 200){
        // ElMessage.error(codeMessage[response.status])
    }
    if (response.data.code !== 1){
        ElMessage.error(response.data.message)
    }
    return response
}, (error) => {
    if (error.response){
        ElMessage.error(codeMessage[error.response.status] || '未知错误')
    } else {
        ElMessage.error('请求异常')
    }
    return Promise.reject(error)
})
export async function searchInterviewee(phoneNumber: string): Promise<Data>{
    const { data }: Data = await request.get('/interviewee', {
        params: {
            phoneNumber
        }
    })
    return data
}
export async function sendResume(formData:any):Promise<Data>{
    const { data } = await request.post('/interviewee', formData)
    return data
}
export async function sendInterviewee(evaluation:string, isPass:boolean, id:any):Promise<Data>{
    const { data } = await request.post('/interviewer', { evaluation, isPass, id })
    return data
}
export async function interviewerLogin(code:string):Promise<Data>{
    const { data } = await request.get('/WXLogin', {
        params: { code }
    })
    return data;
}
export async function getStation():Promise<Data>{
    const { data } = await request.get('/administrator/station')
    return data;
}