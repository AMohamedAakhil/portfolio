"use server";

import { validateString, getErrorMessage } from "@/lib/utils";
import nodemailer from 'nodemailer';

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
        const emailSender = 'akhil@timescan.in';
        const emailPassword = process.env.EMAIL_PASS; 
        const emailReceiver = "a.aakhilmohamed@gmail.com";

        const subject = "Contact Form Submission from " + senderEmail;
        const body = message;

        // Create a nodemailer transporter
        let transporter = nodemailer.createTransport({
            host: "us3.smtp.mailhostbox.com",
            port: 587,
            secure: false,
            auth: {
                user: emailSender,
                pass: emailPassword
            },
            tls: {
                ciphers:'SSLv3'
            }
        });

        // Define email options
        let mailOptions = {
            from: emailSender,
            to: emailReceiver,
            subject: subject,
            text: body
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                data = error;
                console.log('Error occurred: ', error);
            } else {
                data = info.response;
                console.log('Email sent: ', info.response);
            }
        });

  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
