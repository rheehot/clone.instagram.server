import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
import jwt from 'jsonwebtoken';
import {
  adjectives,
  nouns,
} from './words';

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = (email) => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD,
    },
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: process.env.HOST_EMAIL,
    to: address,
    subject: 'Login Secret for Bumkeyy\'s Instragram-clone-coding',
    html: `Hello! Your login secret is <strong>${secret}</strong>. <br/>Copy paste on the app/website to log in `,
  };
  return sendMail(email);
};

export const cleanNullArgs = (args) => {
  const notNull = {};
  Object.keys(args).forEach((key) => {
    if (args[key] !== null) {
      notNull[key] = args[key];
    }
  });
  return notNull;
};

export const generateToken = id => jwt.sign({
  id,
}, process.env.JWT_SECRET);
