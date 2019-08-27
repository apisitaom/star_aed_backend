const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Helper = {
    //HASH PASSWORD
    hashPassword(password){
        return bcrypt.hashSync(password,bcrypt.genSaltSync(8))
    },
    //COMPARE PASSWORD
    comparePassword(hashPassword,password){
        return bcrypt.compareSync(password,hashPassword)
    },
    //CHECK PATTERN EMAIL
    isValidEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    },
    //GEN TOKEN 
    generateToken(id){
        const token = jwt.sign({
            userId : id
        },
        process.env.SECRET,{expiresIn:'1d'}
        )
        return token;
    }
}

module.exports = {Helper}