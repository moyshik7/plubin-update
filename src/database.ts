import { Collection, Db, DeleteResult, InsertOneResult, MongoClient, UpdateResult, WithId } from "mongodb"

export class Database {
    private client: MongoClient;
    private db: Db;
    private collection: Collection;
    constructor(client: MongoClient, db: Db, collection: string){
        this.client = client;
        this.db = db;
        this.collection = db.collection(collection)
    }

    static async connect(
        username: string,
        password: string,
        database: string,
        collection: string
    ): Promise<Database> {
        return new Promise((resolve, reject) => {
            const uri = `mongodb+srv://${username}:${password}@cluster0.hgpml.mongodb.net/`
            const client = new MongoClient(uri, {
                keepAlive: true,
                retryWrites: true
            })
            client.connect()
            .then(() => {
                const db = client.db(database)
                return resolve(new this(client, db, collection))
            })
            .catch(reject)
        })
    }

    /**
     * Add a new document
     * @param {any} value The value to add
     * @returns {InsertOneResult<Document>} The result data
     */
    async add(value): Promise<InsertOneResult<typeof value>> {
        return new Promise((resolve, reject) => {
            this.collection.insertOne(value)
            .then((res) => {
                resolve(res)
            }).catch(reject)
        })
    }

    /**
     * Create a new document
     * alias of add()
     * @param {any} value The value to add
     * @returns {InsertOneResult<Document>} The result data
     */
    async create(value): Promise<InsertOneResult<typeof value>>{
        return this.add(value)
    }

    /**
     * Append a new document
     * alias of add()
     * @param {any} value The value to add
     * @returns {InsertOneResult<Document>} The result data
     */
    async append(value): Promise<InsertOneResult<typeof value>>{
        return this.add(value)
    }

    /**
     * Deletes an element based on query
     * @param {any} query The query
     * @returns {void}
     */
    async delete(query): Promise<DeleteResult>{
        return new Promise((resolve, reject) => {
            this.collection.deleteOne(query)
            .then((res) => {
                resolve(res)
            }).catch(reject)
        })
    }

    /**
     * Pemoves an element based on query
     * Alias of delete()
     * @param {any} query The query
     * @returns {void}
     */
    remove(query): Promise<DeleteResult>{
        return this.delete(query)
    }

    async update(query, value): Promise<UpdateResult> {
        return new Promise((resolve, reject) => {
            this.collection.updateOne(
                query,
                {
                    $set: value
                }, {
                    upsert: true // Create doc if not exists
                }
            ).then((res) => {
                resolve(res)
            }).catch(reject)
        })
    }

    async get(query){
        return new Promise((resolve, reject) => {
            this.collection.findOne(query, {
                projection: { _id: 0 }
            })
            .then((res) => {
                resolve(res)
            }).catch(reject)
        })
    }

    close(){
        return this.client.close();
    }
}