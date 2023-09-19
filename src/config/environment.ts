export class Environment {
  public static Port: number;
  public static SecretKeyHash: string;
  public static StatusCodeSuccess: number;
  public static StatusCodeNotPermission: number;
  public static StatusCodeBadRequest: number;
  public static StatusCodeNotContent: number;
  public static StatusCodeUnauthorized: number;

  public static async register() {
    Environment.Port = Number(process.env.PORT);
    Environment.SecretKeyHash = process.env.HASH_AUTH;
    Environment.StatusCodeSuccess = 200;
    Environment.StatusCodeNotPermission = 403;
    Environment.StatusCodeBadRequest = 500;
    Environment.StatusCodeNotContent = 204;
    Environment.StatusCodeUnauthorized = 401;
  }
}
