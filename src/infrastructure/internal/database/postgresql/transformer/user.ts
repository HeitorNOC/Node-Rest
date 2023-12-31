import { UserEntity } from "../../../../../domain/entity/User";
import { UserModel } from "../model/userModel";

function toUserEntity(u: UserModel): UserEntity {
    return new UserEntity(
        u.ID,
        u.name,
        u.email,
        u.password,
        u.birthday,
        u.created_at,
        u.updated_at
    )
}

function toUserModel(u: UserEntity): UserModel {
    if (u.ID == null) {
        throw new Error('ID null')
    }
    return new UserModel(
        u.ID,
        u.name,
        u.email,
        u.password,
        u.birthday,
        u.created_at,
        u.updated_at
    )
}

export {
    toUserEntity,
    toUserModel
}