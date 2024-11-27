// import { TestData } from "../test/test";
// import Print from "../test/test1";

// import { TestData } from "../test/test"

// jest.mock("../test/test", () => {
//      return {
//         default :{
//             getData : jest.fn().mockResolvedValue((data : string) => data)
//         }
//      }
// });


// describe.only("test test suite", () => {

//     let sut : Print;

//     beforeEach(() => {
//         sut = new Print();
//     })

//     afterEach(() => {
//         jest.clearAllMocks();
//     })

    // it("Should be amir dhahri ==>",  async() => {
    //     const data = await sut.getData("Amir Dhahri")
    //     const actual = sut.printData(data as any)
    //     const expected = "Amir Dhahri ==> 123";
    //     expect(actual).toBe(expected)
    // })

// })

// import swapiGetter from "../test/test"
// import axios from "axios"
// const mockAxios = axios as jest.Mocked<typeof axios>
// jest.mock("axios" , () => {
//    return {
//         __esModule : true,
//         default : {
//             get : jest.fn().mockResolvedValue({data :  {  name: "Luke Skywalker" }})
//         }
//     }
// })

// mockAxios.get.mockResolvedValue({
//     data: {
//         name: "Luke Skywalker"
//     }
// })

// describe("SwappGetter test suite", () => {
//     afterEach(() => {
//         jest.clearAllMocks();
//     })
 
//     it("Should return a name", async () => {
//         const result = await swapiGetter("1");
//         const actual = "Luke Skywalker"
//         expect(result).toBe(actual)
//         expect(mockAxios.get).toHaveBeenCalledTimes(1);
//     })

//     it("Should return a name", async () => {
//         const result = await swapiGetter("1");
//         const actual = "Luke Skywalker"
//         expect(result).toBe(actual)
//         expect(mockAxios.get).toHaveBeenCalledTimes(1);
//     })
// })

// describe("Test test suite" , () => {
//     let sut : TestData;
  
//     beforeEach(() => {
//         sut =  new TestData();
//         jest.spyOn(sut , 'getData').mockResolvedValue("amir==>")
//     })
//     afterEach(() => {
//         jest.clearAllMocks();
//     })
//     it("Should be amir==>12345" , async () => {
//         const actual = await sut.printData("amir");
//         const expected = "amir==>12345";
//         expect(actual).toBe(expected);
//     })
// })
import {Car} from "../test/test"

const fetchMock = jest.fn();
const getDataMock = jest.fn();

jest.mock("../test/test" , () => {
    return {
        Car : jest.fn().mockImplementation(() => {
            return {
                fetch : fetchMock,
            }
        })
    }
})

describe("Car test suite" , () => {
    let sut : Car;

    beforeEach(() => {
        sut = new Car();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    const url = "12347";

    it("Should return json object" , () => {
        fetchMock.mockResolvedValueOnce({
            url : url,
            name : "amir",
            age : 20,
            university : "FSG"
        })
        const actual = sut.getData(url);
        const ex  =  {
            url : url,
            name : "amir",
            age : 20,
            university : "FSG"
        };
        expect(actual).toEqual(ex);
         //const expected = sut.getData(url);
    })
    
})
