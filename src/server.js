const app=require("./index.js")

const port = process.env.PORT || 3000


const connect=require("./config/db.js")


app.listen(port,async()=>
{
    try{
        await connect();
        console.log("Listening at port 2345")
    }catch(e)
    {
        console.log(e.message);
    }
})