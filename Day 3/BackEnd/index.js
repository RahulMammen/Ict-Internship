const express=require('express');//first express is the variable name you can give your own. The express inside the breackets is the package the format must be followed.
const app=new express();//this is the function that is called from the express package. This is the instance of the above express. A
const PORT=4000;
const movieModel=require('./model/movieData')
require('./connection');
//to fetch the movie data
app.get('/movies',async(req,res)=>{
    try{
        const response=await movieModel.find();
        res.send(data)
    }catch (error) {
        console.log(error)
    }
})


app.listen(PORT,()=>{
    console.log(`Server is running on port 4000`)
})