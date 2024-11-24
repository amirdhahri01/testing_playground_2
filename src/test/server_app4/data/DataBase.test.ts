import { DataBase } from "../../../app/server_app/data/DataBase"
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";

type someTypeWithID = {
    id : string , 
    name : string,
    color : string 
}

describe("Database test suite", () => {

    let sut : DataBase<someTypeWithID>;

    const fakedID = "1234";

    beforeEach(()=>{
        sut = new DataBase<someTypeWithID>();
        jest.spyOn(IdGenerator , "generateRandomId").mockReturnValue(fakedID);
    })

    it("Should return id after insert" , async () => {
        const actual = await sut.insert({id : ""} as any);
        expect(actual).toBe(fakedID)
    })


})