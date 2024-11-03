const http=require('http');

const express=require('express')

const path=require('path')

const bodyParser=require('body-parser')

const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop')
const contactRouter=require('./routes/contact')

const app=express();


app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminRouter);
app.use('/shop',shopRouter);
app.use(contactRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
 
app.listen(4000)  