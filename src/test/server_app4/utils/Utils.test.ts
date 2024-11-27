import { getRequestBody } from "../../../app/server_app/utils/Utils"

const requestMock = {
    on : jest.fn()
}

const someObject = {
    name : "Amir",
    age : 30, 
    city : "Paris"
}

const someObjectAsString : string = JSON.stringify(someObject)

describe("getRequestBody test sutie" , () => {

    it("Should return an object of a valid JSON" , async () => {
        requestMock.on.mockImplementation((event , cb) => {
            if(event === "data"){
                cb(someObjectAsString)
            }else{
                cb()
            }
        });
        const actual = await getRequestBody(
            requestMock as any 
        )
        expect(actual).toEqual(someObject)
    })  

    it("Should throw an error of an invalid JSON" , async () => {
        requestMock.on.mockImplementation((event , cb) => {
            if(event === "data"){
                cb("&" + someObjectAsString)
            }else{
                cb();
            }
        });
        await expect(getRequestBody(requestMock as any)).rejects.toThrow("Unexpected token '&', \"&{\"name\":\"\"... is not valid JSON");
    })

    it("Should throw an error of an unexpected error" , async () => {
        const someError = new Error("Somthing went wrong!");
        requestMock.on.mockImplementation((event , cb) => {
            if(event === "error"){
                cb(someError)
            }
        });
        await expect(getRequestBody(requestMock as any)).rejects.toThrow(someError.message);
    })
})