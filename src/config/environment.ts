export class Environment {
  public static Port: number;
  public static Typeorm_Connection: string;
  public static Typeorm_Host: string;
  public static Typeorm_Port: number;
  public static Typeorm_Username: string;
  public static Typeorm_Password: string;
  public static Typeorm_Datebase: string;
  public static Typeorm_Synchronize: boolean;
  public static Typeorm_Loading: boolean;
  public static Typeorm_Entities: string;
  public static Message_Start_Aplication: string;
  public static Message_Start_DataBase: string;
  public static Typeorm_Entities_Dir: string;
  public static Typeorm_Migrations: string;
  public static Typeorm_Migrations_Dir: string;

  public static async register() {
    Environment.Port = 8080;
    Environment.Typeorm_Connection = process.env.TYPEORM_CONNECTION;
    Environment.Typeorm_Host = process.env.TYPEORM_HOST;
    Environment.Typeorm_Port = Number(process.env.TYPEORM_PORT);
    Environment.Typeorm_Username = process.env.TYPEORM_USERNAME;
    Environment.Typeorm_Password = process.env.TYPEORM_PASSWORD;
    Environment.Typeorm_Datebase = process.env.TYPEORM_DATEBASE;
    Environment.Typeorm_Synchronize = true;
    Environment.Typeorm_Loading = true;
    Environment.Typeorm_Entities = process.env.TYPEORM_ENTITIES;
    Environment.Typeorm_Entities_Dir = process.env.TYPEORM_ENTITIES_DIR;
    Environment.Typeorm_Migrations = process.env.TYPEORM_MIGRATIONS;
    Environment.Typeorm_Migrations_Dir = process.env.TYPEORM_MIGRATIONS_DIR;
    Environment.Message_Start_Aplication = "Server is running";
    Environment.Message_Start_DataBase = "Initialize";
  }
}
