import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user', schema: 'user_model' })
class UserModel {
    @PrimaryGeneratedColumn('increment', { type: 'int', name: 'id' })
    public ID: number

    @Column({ type: 'varchar', length: '255' })
    public name: string

    @Column({ type: 'varchar', length: '255' })
    public email: string

    @Column({ type: 'varchar', length: '255' })
    public password: string

    @Column({ type: 'date', update: false, name: 'birthday' })
    public birthday: Date

    @Column({ type: 'timestamp', nullable: true, name: 'created_at' })
    public createdAt: Date

    @Column({ type: 'timestamp', nullable: true, name: 'updated_at'})
    public updatedAt: Date

    constructor(ID: number, name: string, email: string, password: string, birthday: Date, createdAt: Date, updatedAt: Date) {
        this.ID = ID,
        this.name = name,
        this.email = email
        this.password = password
        this.birthday = birthday
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export {
    UserModel
}