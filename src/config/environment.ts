export class Environment {
  public static Port: number;
  public static Hash: string;
  public static StatusCodeSuccess: number;
  public static StatusCodeNotPermission: number;
  public static StatusCodeBadRequest: number;
  public static StatusCodeNotContent: number;

  public static async register() {
    Environment.Port = Number(process.env.PORT);
    Environment.Hash = process.env.HASH_AUTH;
    Environment.StatusCodeSuccess = 200;
    Environment.StatusCodeNotPermission = 403;
    Environment.StatusCodeBadRequest = 500;
    Environment.StatusCodeNotContent = 204;
  }
}
