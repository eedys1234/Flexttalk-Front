export default class ApiError extends Error {

    constructor(status, result, message) {
        super(message);
        this.result = result;
        this.status = status;
    }

    getStatus = () => {
        return this.status;
    }

    getMessage = () => {
        return this.message;
    }

    getResult = () => {
        return this.result;
    }
}