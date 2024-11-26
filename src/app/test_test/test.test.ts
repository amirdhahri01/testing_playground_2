// import { TestData } from "../test/test";

// const getDataMock = jest.fn()

// jest.mock("../test/test", () => {
//     const originalModule = jest.requireActual("../test/test");
//     return {
//         ...originalModule, 
//         TestData: jest.fn().mockImplementation(() => ({
//             ...new originalModule.TestData(),
//             getData: getDataMock,
//         })),
//     };
// });


// describe.only("test test suite", () => {

//     let sut : TestData;

//     beforeEach(() => {
//         sut = new TestData();
//     })

//     afterEach(() => {
//         jest.clearAllMocks();
//     })

//     it("Should be amir dhahri ==>",  async() => {
//         getDataMock.mockResolvedValueOnce("amir dhahri ==> ") 
//         const data = await sut.getData("Amir Dhahri")
//         const actual = sut.printData(data as any)
//         const expected = "Amir Dhahri ==> 123";
//         expect(actual).toBe(expected)
//     })

// })

import swapiGetter from "../test/test"
import axios from "axios"
const mockAxios = axios as jest.Mocked<typeof axios>
jest.mock("axios" , () => {
   return {
        __esModule : true,
        default : {
            get : jest.fn().mockResolvedValue({data :  {  name: "Luke Skywalker" }})
        }
    }
})

mockAxios.get.mockResolvedValue({
    data: {
        name: "Luke Skywalker"
    }
})

describe("SwappGetter test suite", () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
 
    it("Should return a name", async () => {
        const result = await swapiGetter("1");
        const actual = "Luke Skywalker"
        expect(result).toBe(actual)
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    })

    it("Should return a name", async () => {
        const result = await swapiGetter("1");
        const actual = "Luke Skywalker"
        expect(result).toBe(actual)
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    })
})
