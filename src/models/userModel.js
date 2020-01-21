const mongoose =  require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: Number,
    cpf: String,
    
},{
    timestamps: true
});

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Users',userSchema);