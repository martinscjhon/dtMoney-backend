import { FindOneByEmailUser } from "../application/user";
import { ModuloError } from "../common/message";
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken'
import { IAuthentication } from "../interfaces/IAuthentication";

export class Authentication {
    async execute(email: string, password: string) {
        try {
            const user = await new FindOneByEmailUser().execute(email);
            if (email !== user.Email) return ModuloError.emailIncorrect;

            const passwordCorrect = await compare(password, user.Password)

            if (!passwordCorrect) return ModuloError.passwordIncorrect;

            const token = sign({ Nome: user.Nome, Email: user.Email }, "3f65242608461f33d24b493e4f2117f8", {
                subject: user.Uuid,
                expiresIn: "1d"
            });

            console.log(token)

            const result: IAuthentication = {
                token,
                body: {
                    CreatedAt: user.CreatedAt,
                    Email: user.Email,
                    Enable: user.Enable,
                    Nome: user.Nome, Uuid: user.Uuid
                }
            }

            return result
        } catch (error) {
            return error;
        }
    }

}
