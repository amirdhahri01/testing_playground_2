import { Authorizer } from "../../../app/server_app/auth/Authorizer";
import { RegisterHandler } from "../../../app/server_app/handlers/RegisterHandler"
import { IncomingMessage, ServerResponse } from "http";
import { HTTP_CODES, HTTP_METHODS } from "../../../app/server_app/model/ServerModel";
import { Account } from "../../../app/server_app/model/AuthModel";

const getRequestBodyMock = jest.fn();

jest.mock("../../../app/server_app/utils/Utils" , () =>({
    getRequestBody : () => getRequestBodyMock()
}))

describe("RegisterHandler test suite" , () => {

    let sut : RegisterHandler ;

    const request = {
        method : undefined 
    }

    const responseMock = {
        statusCode : 0 , 
        writeHead : jest.fn(),
        write : jest.fn()
    }

    const authorizerMock = {
        registerUser : jest.fn()
    }

    const someID = "1234";

    const someAccount : Account = {
        id : "" , 
        password : "somePassword",
        userName : "someUserName"
    }

    beforeEach(() => {
        sut = new RegisterHandler(request as IncomingMessage,  responseMock as any as ServerResponse, authorizerMock as any as Authorizer);
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it("Should register valid accounts in requests" , async () => {
        request.method = HTTP_METHODS.POST as any;
        getRequestBodyMock.mockResolvedValueOnce(someAccount)
        authorizerMock.registerUser.mockResolvedValueOnce(someID)
        await sut.handleRequest()
        expect(responseMock.statusCode).toBe(HTTP_CODES.CREATED)
        expect(responseMock.writeHead).toHaveBeenCalledWith(
            HTTP_CODES.CREATED,
            {"Content-Type": "application/json"}

        )
        expect(responseMock.write).toHaveBeenCalledWith(JSON.stringify({userId : someID}))
    })

    it("Should do nothing for not supported http methods" ,async () => {
        request.method = HTTP_METHODS.GET as any;
        await sut.handleRequest();
        expect(responseMock.writeHead).not.toHaveBeenCalled();
        expect(responseMock.write).not.toHaveBeenCalled();
        expect(getRequestBodyMock).not.toHaveBeenCalled();
    })
})