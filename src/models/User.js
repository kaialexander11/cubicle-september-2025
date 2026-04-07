const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    //username: String,
    username: {

        type: String,
        required: [true, 'Username is required!'],
        minLength: [3, 'Username is too short!'],
        match: [/^[A-Za-z0-9]+$/, 'Username must be alphanumeric!'],
        unique: {
            value: true,
            message: 'Username already exists!',
        }

    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: {
            validator: function(value) {
                //return this.repeatPassword === value;
                return /^[A-Za-z0-9]+$/.test(value);
            },
            message:  `Invalid password characters!`
        },
        minLength: 8,
    }
});

userSchema.path('username').validate(function(value) {
    const user = mongoose.model('User').findOne({ username: value });

    return !!user;
}, 'Username already exists!');

userSchema.virtual('repeatPassword')

    .set(function(value) {
        if (value !== this.password) {
            //throw new mongoose.MongooseError('Password missmatch!'); 
            throw new Error('Password missmatch!'); 
        }
    });

// userSchema.pre('validate', function() {
//     if (this.repeatPassword !== this.password) {
//         throw new mongoose.MongooseError('Password missmatch!');
//     }
// });

// TODO: validate if user exists!

userSchema.pre('save', async function() {

    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;

});

const User = mongoose.model('User', userSchema);

module.exports = User;

