const express=require("express")
const router=express.Router()

require('./routes/user')(router)
require('./routes/mentor')(router)
//require('./routes/projects')(router)
//require('./routes/team')(router)

module.exports = router 
