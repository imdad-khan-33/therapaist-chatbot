import nodemailer from 'nodemailer'

const mailSender = async(email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
  // host: process.env.MAIL_HOST,
  // port: process.env.MAIL_HOST,
  // secure: false, // true for 465, false for other ports
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

    const info = await transporter.sendMail({
      from: `"Virtual Therapist" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });
    return info
    } catch (error) {
        console.log("Something went wrong while sending mail:", error.message);
        return null; // Return null to indicate failure
    }
}

export {mailSender}