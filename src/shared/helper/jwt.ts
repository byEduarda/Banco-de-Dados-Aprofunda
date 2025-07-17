import Jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'undefined';

export function gerarToken(payload: object): string {
    return Jwt.sign(payload, JWT_SECRET, { expiresIn '1h' });
}

export function verificarToken(token: string): any {
    return jwt.verify(token, JWT_SECRET);
}