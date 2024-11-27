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