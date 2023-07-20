import { UserEntity } from "../../../../domain/entity/User";
import { Connection } from "./connection";
import { UserModel } from "./model/userModel";
import { toUserEntity } from "./transformer/user";

async function getAllUsers(): Promise<UserEntity[] | null> {
    const repository = await Connection.getRepository(UserModel)
    const result = await repository.find()

    return result ? result.map((u: UserModel) => toUserEntity(u)) : []
}

async function getUserById(id: number): Promise<UserEntity | null> {
    const repository = await Connection.getRepository(UserModel)
    const result = await repository.findOneBy({ ID: id })

    return result ? toUserEntity(result) : null
}

async function createUser(name: string, email: string, password: string, birthday: Date): Promise<UserEntity | null> {
    const repository = await Connection.getRepository(UserModel)
    
    const result = await repository.save({
        name,
        email,
        password,
        birthday,
        created_at: new Date(),
        updated_at: new Date()
    })

    return result ? toUserEntity(result) : null
}

export {
    getAllUsers,
    getUserById,
    createUser
}