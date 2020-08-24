import {IAuthenticationProvider} from "../IAuthenticationProvider";
import { sign, verify } from 'jsonwebtoken';

const authConfig = require('../../config/auth.json')


class JWTAuthenticator implements IAuthenticationProvider{
    async authenticate(email: string): Promise<string> {
        return sign({email}, authConfig.secret, {
            expiresIn: 84600
        });
    }

    async isAuthenticated(type:string, credential: string): Promise<boolean> {
        if( !/^Bearer$/i.test(type)) {
            throw new Error('Token malformed');
        }
        return verify(credential, authConfig.secret);
    }
}

const JWT = new JWTAuthenticator();

export {JWT}