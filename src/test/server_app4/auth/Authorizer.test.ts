import { Authorizer } from "../../../app/server_app/auth/Authorizer"
import { SessionTokenDataAccess } from "../../../app/server_app/data/SessionTokenDataAccess"
import { UserCredentialsDataAccess } from "../../../app/server_app/data/UserCredentialsDataAccess"

//SessionTokenDataAccess mocks :

const isValidTokenMock = jest.fn();
const generateTokenMock = jest.fn();
const invalidateTokenMock = jest.fn();

jest.mock("../../../app/server_app/data/SessionTokenDataAccess" , () => {
    return {
        SessionTokenDataAccess : jest.fn().mockImplementation(() => {
            return {
                isValidToken : isValidTokenMock,
                generateToken : generateTokenMock,
                invalidateToken : invalidateTokenMock
            }
        })
    }
}) 

// UserCredentialsDataAccess mocks :

const addUserMock = jest.fn();
const getUserByUserNameMock = jest.fn();

jest.mock("../../../app/server_app/data/UserCredentialsDataAccess" , () => {
    return {
        UserCredentialsDataAccess : jest.fn().mockImplementation(() => {
            return {
                addUser : addUserMock,
                getUserByUserName : getUserByUserNameMock,
            }
        })
    }
}) 


describe("Authorizer test suite" , () => {

    let sut : Authorizer;

    const someId = "1234";
    const someUserName =  "someUserName";
    const somePassword = "somePassword";

    beforeEach(() => {
        sut = new Authorizer();
        expect(SessionTokenDataAccess).toHaveBeenCalledTimes(1)
        expect(UserCredentialsDataAccess).toHaveBeenCalledTimes(1)
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it("Should validate token" ,async () => {
        isValidTokenMock.mockResolvedValueOnce(false);
        const actual = await sut.validateToken(someId);
        expect(actual).toBeFalsy();
    })

    it("Should return id for new registered user" , async () => {
        addUserMock.mockResolvedValueOnce(someId);
        const actual = await sut.registerUser(someUserName , somePassword);
        expect(actual).toBe(someId);
        expect(addUserMock).toHaveBeenCalledWith({
            id : "",
            password : somePassword,
            userName :  someUserName
        })
    })

})