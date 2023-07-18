import { UserEntity } from "../../../../domain/entity/User";
import { Connection } from "./connection";
import { UserModel } from "./model/userModel";
import { toUserEntity } from "./transformer/user";

async function getAllUsers(): Promise<UserEntity[] | null> {
    const repository = await Connection.getRepository(UserModel)
    const result = await repository.find()

    return result ? result.map((u: UserModel) => toUserEntity(u)) : []
}

export {
    getAllUsers
}