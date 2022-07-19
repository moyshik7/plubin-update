import { Client } from "discord.js";
import { MongoClient } from "mongodb"

export class Database {
    private client: Client
    constructor(client, db, collection){
        this.client = client;
        this.db = db;
        this.collection = db.collection(collection)
    }

    /**
     * Create a new database instance
     * @param {string} username Database username
     * @param {string} password Database Password
     * @param {string} database Database name
     * @returns {Promise<Database>} A database object
     */
    static async connect(username, password, database, collection){
        return new Promise((resolve, reject) => {
            const uri = `mongodb+srv://${username}:${password}@cluster0.hgpml.mongodb.net/`
            const client = new MongoClient(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
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
    async add(value){
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
    async create(value){
        return this.add(value)
    }

    /**
     * Append a new document
     * alias of add()
     * @param {any} value The value to add
     * @returns {InsertOneResult<Document>} The result data
     */
    async append(value){
        return this.add(value)
    }

    /**
     * Deletes an element based on query
     * @param {any} query The query
     * @returns {void}
     */
    async delete(query){
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
    remove(query){
        return this.delete(query)
    }

    async update(query, value){
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