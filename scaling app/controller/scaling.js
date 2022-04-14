const dotenv = require("dotenv");
dotenv.config();
console.log("I AM ON SCALING PAGE")
//console.log(process.env.url_db)
const { MongoClient } = require("mongodb");                                                                                                                                     
const url = `${process.env.url_db}`;
const client = new MongoClient(url);
 const dbName = "test";
 exports.scaling = (req, res) => {
    const { name, email,Behaviour,Academic,Sports,Language,Communication } = req.body;
    console.log(name, " ", email, " ", Behaviour," ",Academic," ",Sports," ",Language," ",Communication);
    let behaviour=parseInt(Behaviour);
    let academic=parseInt(Academic);
    let sports=parseInt(Sports);
    let language=parseInt(Language);
    let communication=parseInt(Communication);
    const avg_score=(behaviour+academic+sports+ language+communication)/5     
    console.log(avg_score);          
    async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("users");

         // Construct a document                                                                                                                                                              
         let personDocument = {
             "name": name,
             "email": email,                                                                                                                                
             "Behaviour": Behaviour,  
             "Academic": Academic,
             "Sports":Sports,
             "Language":Language,
             "Communication": Communication,                                                                                                                                
             "avg_score":avg_score
         }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(personDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);
         res.send(personDocument);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
//res.send(200);
 }