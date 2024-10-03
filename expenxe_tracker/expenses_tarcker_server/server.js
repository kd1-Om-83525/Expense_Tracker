    const express=require('express');
    const cors=require('cors');

    const app=express();
    app.use(cors());
    app.use(express.json());

    const userRouter=require('./routes/user')
    app.use('/user',userRouter);

    app.listen(4000,'0.0.0.0',()=>{
        console.log(`server runing at port 4000`)
    })
    