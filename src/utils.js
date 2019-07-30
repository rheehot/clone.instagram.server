import dotenv from 'dotenv';
import path from 'path';
import nodemailer from 'nodemailer';
import {
  adjectives,
  nouns,
} from './words';


dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = (email) => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD,
    },
  };
  const client = nodemailer.createTransport(options);
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: 'kgbum2222@gmail.com',
    to: address,
    subject: 'Login Secret for Instragram-clone-coding',
    html: `Hello! Your login secret it ${secret}. <br/> Copy paste on the app to log in `,
  };
  return sendMail(email);
};
