// export class TestData {
//     public  getData  = (data : string) => {
//         return new Promise((resolve)=>{
//             setTimeout(() => {
//                 resolve(data + "==>")
//             }, 1000)
//         })
//     }
//     public async printData(data: string){
//         const value =  await this.getData(data);
//         return value + "12345";
//     }       
// }

// import axios from "axios";

// const swapiGetter = (id : string) => {
//     return axios.get(`https://swapi.dev/api/people/${id}/`).then(response => {
//         return response.data.name
//     }).catch(err => {
//         return err
//     })
// }

// export default swapiGetter

export class Car{
    
    public fetch(url : string){
        return new Promise((resolve , reject) => {
            return setTimeout(() => {
                resolve({
                    url : url,
                    name : "amir",
                    age : 20,
                    university : "FSG"
                })
            }, 500)
        })
    }

    public async getData(url : string){
        const data = await this.fetch(url);
        return data;
    }
    
}