const config = require("./dbConfiguration");
const sql = require("mssql/msnodesqlv8");

const bcrypt=require("bcrypt")
const saltRounds =10;

const saveMassage =async(data)=>{
    try {
        const pool= await sql.connect(config);
            pool.request().query(`INSERT INTO messages VALUES ('${data.name}','${data.email}',${data.number},'${data.message}')`);
            console.log('Server connected');
            return "successfull"   
    } catch (error) {
        return error;
    }
}

const singIn=async(data)=>{
    try {
        const pool= await sql.connect(config);
        const result=pool.request().query(`SELECT * FROM users WHERE username='${data}'`)
        return result;
    } catch (error) {
        return "connection error";
    }
}
// const singIn=async(data)=>{
//     try {
//         const pool= await sql.connect(config);
//         const result=pool.request().query(`INSERT INTO test VALUES('${data.username}','${data.password}')`);
//         //console.log(result);
//         return "Ok";
//     } catch (error) {
//         return `connection error`;
//     }
// }

const singUp=async(obj)=>{
    const pool= await sql.connect(config);
    const password=obj.password;

   const hashpassword= await bcrypt.hash(password,saltRounds)

    try{
        pool.request().query(`INSERT INTO users VALUES ('${obj.name}','${obj.email}','${obj.username}','${hashpassword}')`)
        return "successfull"

    }
    catch(err){
        console.log(err)
        return "querry error"
    }
}

module.exports={saveMassage,singIn,singUp}