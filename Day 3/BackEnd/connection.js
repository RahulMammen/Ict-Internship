const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://rahultommammen:LEGI0N1102@cluster0.sxgcvbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB is not connected')
})