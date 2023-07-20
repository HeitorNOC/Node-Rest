import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users', schema: 'users' })
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

    @Column({ type: 'timestamp', name: 'created_at' })
    public created_at: Date

    @Column({ type: 'timestamp', name: 'updated_at'})
    public updated_at: Date

    constructor(ID: number, name: string, email: string, password: string, birthday: Date, created_at: Date, updated_at: Date) {
        this.ID = ID,
        this.name = name,
        this.email = email
        this.password = password
        this.birthday = birthday
        this.created_at = created_at
        this.updated_at = updated_at
    }
}

export {
    UserModel
}