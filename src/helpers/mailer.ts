// import nodemailer from 'nodemailer';
// import User from '@/models/userModel';
// import bcryptjs from 'bcryptjs';


// interface SendEmailParams {
//     email: string;
//     emailType: "VERIFY" | "RESET";  // or other types you expect
//     userId: string;
//   }

// // export const sendEmail=async({email,emailType,userId}:any)=>{
//     try {export const sendEmail = async ({ email, emailType, userId }: SendEmailParams) => {
//         const hashedToken = await bcryptjs.hash(userId.toString(), 10);


//        if(emailType === "VERIFY"){
//         await User.findByIdAndUpdate(userId,{verifyToken:hashedToken,verifyTokenExpiry:Date.now()+
//             3600000})
//        }else if(emailType === "RESET"){
//         await User.findByIdAndUpdate(userId,{forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry:Date.now()+
//             3600000})
//        }


//     const transport = nodemailer.createTransport({
//             host: "sandbox.smtp.mailtrap.io",
//             port: 2525,
//             auth: {
//               user: "1310511514148d",
//               pass: "df523cd64614af"

            
//             }
//           });
// const mailOptions={
//     from:'abinahla2@gmail.com',
//     to:email,
//     subject:emailType === "VERIFY" ? "Verify your email":"Reset your password",
// html:`<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to $
// {emailType === "VERIFY" ? "Verify your email" :
// "reset your password"}</p>`
// }

// const mailresponse = await transport.sendMail(mailOptions);

// return mailresponse;

//     }catch (error:any) {
//         throw new Error(error.message);
        
//     }
// }



import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

interface SendEmailParams {
  email: string;
  emailType: "VERIFY" | "RESET";  // or other types you expect
  userId: string;
}

export const sendEmail = async ({ email, emailType, userId }: SendEmailParams) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    // Update user's tokens based on emailType
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 });
    }

    // Nodemailer setup
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "1310511514148d",
        pass: "df523cd64614af",
      },
    });

    const mailOptions = {
      from: 'abinahla2@gmail.com',
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "reset your password"}</p>`,
    };

    // Send email
    const mailresponse = await transport.sendMail(mailOptions);

    return mailresponse;

} catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
