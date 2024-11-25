import { TestData } from "../test/test";

const getDataMock = jest.fn()

jest.mock("../test/test", () => {
    const originalModule = jest.requireActual("../test/test");
    return {
        ...originalModule, 
        TestData: jest.fn().mockImplementation(() => ({
            ...new originalModule.TestData(),
            getData: getDataMock,
        })),
    };
});


describe.only("test test suite", () => {

    let sut : TestData;

    beforeEach(() => {
        sut = new TestData();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it("Should be amir dhahri ==>",  async() => {
        getDataMock.mockResolvedValueOnce("amir dhahri ==> ") 
        const data = await sut.getData("Amir Dhahri")
        const actual = sut.printData(data as any)
        const expected = "Amir Dhahri ==> 123";
        expect(actual).toBe(expected)
    })

})


