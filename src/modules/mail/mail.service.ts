import { Injectable } from '@nestjs/common'
import * as nodemailer from 'nodemailer'
import { passwordResetTemplate } from './mail-template'

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  async sendPasswordReset(email: string, username: string, code: string) {
    const html = passwordResetTemplate({ username, email, code })
    console.log('Attempting to send email to:', email)
    await this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Restablece tu contraseña - UniEventos',
      html,
    })
  }
}
