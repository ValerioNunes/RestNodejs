const mongoose = require('mongoose');
const User = mongoose.model('Users')

module.exports = {
    // async listAll (req,res){
    //     const response = await User.find(); 
    //     res.json(response);
    // },

    async listAll (req,res){
        const {page} = req.query;
        const response = await User.paginate({},{page : page, limit :3}); 
        res.json(response);
    },

    async store (req,res){
        const payload = await req.body;
        payload2 = await User.create(payload);
        res.json(payload2);

    },
    async listById(req,res){
      const {id}  = await req.params;
      const response = await User.findOne({'_id' : id});
      res.json(response);
    },


}