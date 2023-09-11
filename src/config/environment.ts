export class Environment {
  public static Port: number;

  public static async register() {
    Environment.Port = 8080;
  }
}
