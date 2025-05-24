export function passwordResetTemplate({ username, email, code }) {
  return `
  <div style="max-width:480px;margin:32px auto;padding:32px 24px 24px 24px;border-radius:12px;border:1px solid #e0e0e0;font-family:sans-serif;background:#fff;box-shadow:0 2px 8px #0001;">
    <div style="text-align:center;margin-bottom:16px;">
      <hr style="border:none;border-top:2px solid #3b5998;width:60px;margin:0 auto 16px auto;" />
      <h2 style="color:#23408e;margin:0 0 8px 0;">Hola, <span style="color:#23408e;">${username}</span></h2>
    </div>
    <div style="text-align:center;margin-bottom:24px;">
      <p style="margin:0 0 8px 0;font-size:16px;">Recibimos una solicitud para restablecer tu contraseña asociada con</p>
      <p style="margin:0 0 16px 0;font-size:16px;"><a href="mailto:${email}" style="color:#23408e;text-decoration:underline;">${email}</a>.</p>
      <p style="margin:0 0 8px 0;font-size:16px;">Ingresa el siguiente código para completar el proceso:</p>
      <div style="display:inline-block;padding:12px 32px;background:#eaf2fb;border-radius:8px;margin:16px 0;font-size:28px;letter-spacing:6px;color:#23408e;font-weight:bold;border:1px dashed #23408e;">${code}</div>
    </div>
    <div style="text-align:center;margin-bottom:16px;font-size:14px;color:#444;">
      Si no solicitaste este restablecimiento, ignora este correo o contacta soporte.
    </div>
    <div style="text-align:center;font-size:13px;color:#23408e;margin-bottom:8px;">
      <em>Nunca compartiremos tus credenciales ni pediremos información personal por este medio.</em>
    </div>
    <div style="text-align:center;font-size:12px;color:#888;margin-top:24px;">
      Este mensaje fue generado automáticamente.<br />
      © 2025 UniEventos. Todos los derechos reservados.
    </div>
  </div>
  `
}
