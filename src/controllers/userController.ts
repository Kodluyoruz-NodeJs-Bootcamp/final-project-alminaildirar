import { RequestHandler } from 'express';
import { User } from '../entity/User';
import { hash } from 'bcrypt';

export const createUser: RequestHandler = async (req, res) => {
  try {
    //After validation process, get infos from body and save to database
    const { email, username, password } = req.body;
    const user = await User.create({
      username,
      email,
      password: await hash(password, 10),
    });
    await User.save(user);
    res.status(201).redirect('/login');
  } catch (Error) {
    throw new Error();
  }
};

export const logoutUser: RequestHandler = async (req, res) => {
  try {
    res.clearCookie('jwt');
    res.redirect('/login');
  } catch (error) {
    throw new Error();
  }
};
