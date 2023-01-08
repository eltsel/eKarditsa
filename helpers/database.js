
const database = {
    create:async (db,collection,body)=>{
        let dbo = db.db("ekarditsa")
        let result = await dbo.collection(collection).insertOne(body);
        return result;
    },
    get:async(db,collection,q)=>{
        let dbo = db.db("ekarditsa")
        let result = await dbo.collection(collection).find(q).toArray();
        return result;
    },
    update:async(db,collection,q,body)=>{
        let dbo = db.db("ekarditsa")
        let result = await dbo.collection(collection).updateOne(q,body);
        return result;
    },
    delete:async(db,collection,q,body)=>{
        let dbo = db.db("ekarditsa")
        let result = await dbo.collection(collection).deleteOne(q);
        return result;
    }
}

module.exports.dbfn = database;