const mongoose=require('mongoose');
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    category:String,
    releaseYear:Number

})
const MovieData=mongoose.model('movie',movieSchema);//here the model name is giiven the name movie because when it reaches mongoosedb it adds an s to it and thus it becomes movies. Hence it is given the name movie.
module.exports=MovieData;