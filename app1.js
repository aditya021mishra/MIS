const express = require('express');
const bodyParser=require('body-parser');
const path = require('path');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.urlencoded({
  extended: false
}))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
  
});

let Data = {};

//Post request for creating order and generating order id
app.post('/send', (req, res) => {
  Data.sem = req.body.Sem;
  Data.email = req.body.Email;
  Data.contact = req.body.Contact;


  console.log(req.body);

})

//Confirmation and database Updation



    //--->>This function can update in db 

    // const updateDoc=async(name)=>{
    //         try{
    //         const x=await User.updateOne({name},{
    //           $set:{fee:true}
    //         })
    //       }
    //       catch(err)
    //       {
    //         console.log(err)
    //       }
    //     }
    //       updateDoc(result[0].name)
    
app.listen(5000)


