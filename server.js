const express=require('express');

const app=express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const parkingRouter=require('./routes/parking.router')
const db=require('./firebaseConfig')

const PORT=process.env.PORT || 8282



app.use(cors({
    origin: 'https://trk-p-new-git.onrender.com/', // Frontend URL
    credentials: true, // Allow cookies with credentials (if needed)
  }));

// app.use(cors());

  app.use(express.json());
  app.use(cookieParser());

 

  app.use('/api',parkingRouter);

  app.listen(process.env.PORT || PORT,()=>{
    console.clear();
    console.log(`server started at port ${PORT}!!!`)
  })

  app.use('/api', (req, res, next) => {
    console.log(`Request received at: ${req.method} ${req.url}`);
    next();
  });
