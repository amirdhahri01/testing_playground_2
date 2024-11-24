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

    const someObject1 = {
        id : "" , 
        name : " ",
        color : "blue"
    }

    const someObject2 = {
        id : "" , 
        name : " ",
        color : "blue"
    }

    beforeEach(()=>{
        sut = new DataBase<someTypeWithID>();
        jest.spyOn(IdGenerator , "generateRandomId").mockReturnValue(fakedID);
    })

    it("Should return id after insert" , async () => {
        const id = await sut.insert(someObject1 as any);
        expect(id).toBe(fakedID)
    })

    it("Should get element after insert" , async () => {
        const id = await sut.insert(someObject1 as any);
        const actual = await sut.getBy("id" , id)
        expect(actual).toEqual(someObject1)
    })

    it("Should find all elements with the same property" , async () => {
        await sut.insert(someObject1 as any);
        await sut.insert(someObject2 as any);
        const expected = [someObject1 , someObject2];
        const actual = await sut.findAllBy("color" , "blue")
        expect(actual).toEqual(expected)
    })

    it("Should change color on object" , async () => {
        const id =  await sut.insert(someObject1 as any);
        const expectedColor = "red";
        await sut.update(id , "color" , expectedColor)
        const object = await sut.getBy("id" , id);
        const actualObject = object?.color;
        expect(actualObject).toBe(expectedColor)
    })

    it("Should delete object" , async () => {
        const id =  await sut.insert(someObject1 as any);
        await sut.delete(id);
        const actual = await sut.delete(id);
        expect(actual).toBeUndefined()
    })

    it("Should get all elements" , async () => {
        await sut.insert(someObject1 as any);
        await sut.insert(someObject2 as any);
        const expected = [someObject1 , someObject2]
        const actual = await sut.getAllElements();
        expect(actual).toEqual(expected)
    })
 
})