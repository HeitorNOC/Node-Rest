import * as pg from 'pg'
import { DataSource } from 'typeorm'
import { UserModel } from './model/userModel'

pg.types.setTypeParser(pg.types.builtins.TIMESTAMP, (stringValue: string) => new Date(`${stringValue}Z`))

class DataSourceBuilder {

    static async builderDatasource() {
        return new DataSource({
            type: 'postgres',
            url: process.env.POSTGRESQL_URI,
            synchronize: false,
            entities: [
                UserModel
            ]
          })
    }
}
let dataSource: DataSource

async function getDataSource() {
if (!dataSource) {
    dataSource = await DataSourceBuilder.builderDatasource()
}

return dataSource
}

export {
    getDataSource
}