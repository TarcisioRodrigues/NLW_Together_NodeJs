import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
interface IPayLoad {
  sub: string;
}
export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //Receber token
  const authToken = request.headers.authorization;
  //Validar se o toke está preenchido
  if (!authToken) {
    return response.status(401).end();
  }
  const [, token] = authToken.split(' ');
  try {
    //Validar se o token é valido
    const { sub } = verify(
      token,
      '144cb297d7f4f4dac90ac8e07ea6235e'
    ) as IPayLoad;
    request.user_id = sub;
    return next();
  } catch (error) {
    return response.status(401).end();
  }

  //Recuperar informaçõs do usuario
}
