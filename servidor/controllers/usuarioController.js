const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req,response) =>{

    //revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ){
        return response.status(400).json({errores: errores.array()})
    }

    //Extraer emai y password
    const { email, password } = req.body; 

    try{
        let usuario = await Usuario.findOne( {email });

        if( usuario ) {
            return response.status(400).json({msg: 'El usuario ya exite' });
        }

        //Crea el nuevo usuario
        usuario = new Usuario(req.body);

        //Hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password =await bcryptjs.hash(password, salt)


        //guardar usuario
        await usuario.save();

        //Crear y firmar el JWT
        const payload = {
            usuario: {
                id:usuario.id
            }
        };

        //Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // 1hora
        },(error,token) => {
            
            if(error) throw error;

            //Mensaje de confirmacion
            response.json({ token });

        })


    }catch(error){
        console.log('error');
        response.status(400).send('Hubo un error');
    }
}