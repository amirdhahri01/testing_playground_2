export class TestData {

    public printData(data : string) : string {
        return data + "123";
    }

    public getData  = (data : string) => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(data + "==>")
            }, 1000)
        })
    }

}

