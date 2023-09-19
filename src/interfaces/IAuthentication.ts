export interface IAuthentication {
  body: {
    Nome: string;
    Email: string;
    Uuid: string;
    Enable: boolean;
    CreatedAt: Date;
    Id: number;
  };
  token: string;
}

export interface IPayloadAuthentication {
  Email: string;
  Password: string;
}
