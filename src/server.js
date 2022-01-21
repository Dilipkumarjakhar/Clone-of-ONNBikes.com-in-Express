const app=require("./index.js")

const connect=require("./config/db.js")


app.listen(2345,async()=>
{
    try{
        await connect();
        console.log("Listening at port 2345")
    }catch(e)
    {
        console.log(e.message);
    }
})