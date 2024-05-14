import { mongoose } from "mongoose";


const database = (mongo_uri) =>{
    try {
        mongoose.connect(mongo_uri,{useNewUrlParser:true}).then(()=>{
            console.log(`Mongo Connected`);
        }).catch(error=>{
            console.log(error);
        })
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default database