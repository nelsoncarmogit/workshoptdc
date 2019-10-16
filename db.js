// Banco
var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb+srv://nelson:nelson@cluster0-c3mwl.mongodb.net/test?retryWrites=true&w=majority")
            .then(conn => global.conn = conn.db("workshoptdc"))
            .catch(err => console.log(err))

 	
function findAll(callback){  
  global.conn.collection("clientes").find({}).toArray(callback);
}

function insert(cliente, callback){
    global.conn.collection("clientes").insert(cliente, callback);
}

var ObjectId = require("mongodb").ObjectId;
function findOne(id, callback){  
    global.conn.collection("clientes").find(new ObjectId(id)).toArray(callback);
}

function update(id, cliente, callback){
    global.conn.collection("clientes").update({_id:new ObjectId(id)}, cliente, callback);
}

function deleteOne(id, callback){
    global.conn.collection("clientes").deleteOne({_id: new ObjectId(id)}, callback);
}
module.exports = { findAll, insert, findOne, update, deleteOne }
