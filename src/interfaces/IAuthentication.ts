export interface IAuthentication {
    body: {
        Nome: string,
        Email: string,
        Uuid: string,
        Enable: boolean,
        CreatedAt: Date
    },
    token: string
}