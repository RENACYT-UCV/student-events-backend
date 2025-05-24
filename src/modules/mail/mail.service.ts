import { Injectable } from '@nestjs/common'
import * as nodemailer from 'nodemailer'

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  async sendPasswordReset(email: string, resetToken: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // o el servicio que uses
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const resetUrl = `https://UCVEventos/reset-password?token=${resetToken}`

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Recupera tu contraseña',
      html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
             <a href="${resetUrl}">${resetUrl}</a>`,
    })
  }
}
