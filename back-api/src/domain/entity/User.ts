class UserEntity {
    public ID: number | null
    public name: string
    public email: string
    public password: string
    public birthday: Date
    public created_at: Date
    public updated_at: Date

    constructor(ID: number | null, name: string, email: string, password: string, birthday: Date, created_at: Date, updated_at: Date) {
        this.ID = ID
        this.name = name
        this.email = email
        this.password = password
        this.birthday = birthday
        this.created_at = created_at
        this.updated_at = updated_at
    }
}

export {
    UserEntity
}