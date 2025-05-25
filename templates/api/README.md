# Documentación de Endpoints de API

## Módulo de Eventos

### Operaciones de Eventos

- **Crear Evento**

  - **Método**: POST
  - **URL**: `/api/events`
  - **Descripción**: Crea un nuevo evento.
  - **Estructura JSON**: Consulte `event.json`

- **Obtener Todos los Eventos**

  - **Método**: GET
  - **URL**: `/api/events`
  - **Descripción**: Recupera todos los eventos.

- **Obtener Evento por ID**

  - **Método**: GET
  - **URL**: `/api/events/:id`
  - **Descripción**: Recupera un evento por su ID.

- **Crear Tipo de Evento**

  - **Método**: POST
  - **URL**: `/api/events/types`
  - **Descripción**: Crea un nuevo tipo de evento.
  - **Estructura JSON**: Consulte `event.json`

- **Obtener Todos los Tipos de Evento**

  - **Método**: GET
  - **URL**: `/api/events/types`
  - **Descripción**: Recupera todos los tipos de evento.

- **Obtener Tipo de Evento por ID**
  - **Método**: GET
  - **URL**: `/api/events/types/:id`
  - **Descripción**: Recupera un tipo de evento por su ID.

## Módulo de Escuelas

### Operaciones de Escuelas

- **Crear Escuela**

  - **Método**: POST
  - **URL**: `/api/schools`
  - **Descripción**: Crea una nueva escuela.
  - **Estructura JSON**: Consulte `school.json`

- **Obtener Todas las Escuelas**

  - **Método**: GET
  - **URL**: `/api/schools`
  - **Descripción**: Recupera todas las escuelas.

- **Obtener Escuela por ID**

  - **Método**: GET
  - **URL**: `/api/schools/:id`
  - **Descripción**: Recupera una escuela por su ID.

- **Actualizar Escuela**

  - **Método**: PATCH
  - **URL**: `/api/schools/:id`
  - **Descripción**: Actualiza la información de una escuela.
  - **Estructura JSON**: Consulte `school.json`

- **Eliminar Escuela**
  - **Método**: DELETE
  - **URL**: `/api/schools/:id`
  - **Descripción**: Elimina una escuela por su ID.

### Operaciones de Carreras

- **Crear Carrera**

  - **Método**: POST
  - **URL**: `/api/schools/:schoolId/careers`
  - **Descripción**: Crea una nueva carrera dentro de una escuela.
  - **Estructura JSON**: Consulte `career.json`

- **Obtener Todas las Carreras por Escuela**

  - **Método**: GET
  - **URL**: `/api/schools/:schoolId/careers`
  - **Descripción**: Recupera todas las carreras para una escuela específica.

- **Obtener Carrera por ID**

  - **Método**: GET
  - **URL**: `/api/schools/careers/:id`
  - **Descripción**: Recupera una carrera por su ID.

- **Actualizar Carrera**

  - **Método**: PATCH
  - **URL**: `/api/schools/careers/:id`
  - **Descripción**: Actualiza la información de una carrera.
  - **Estructura JSON**: Consulte `career.json`

- **Eliminar Carrera**
  - **Método**: DELETE
  - **URL**: `/api/schools/careers/:id`
  - **Descripción**: Elimina una carrera por su ID.

## Módulo de Reportes

### Operaciones de Reportes

- **Crear Reporte**

  - **Método**: POST
  - **URL**: `/api/reports`
  - **Descripción**: Crea un nuevo reporte.
  - **Estructura JSON**: Consulte `report.json`

- **Obtener Todos los Reportes**

  - **Método**: GET
  - **URL**: `/api/reports`
  - **Descripción**: Recupera todos los reportes.

- **Obtener Reporte por ID**

  - **Método**: GET
  - **URL**: `/api/reports/:id`
  - **Descripción**: Recupera un reporte por su ID.

## Módulo de Correos

### Operaciones de Correos

- **Enviar Correo de Restablecimiento de Contraseña**

  - **Método**: POST
  - **URL**: `/api/mail/send-password-reset`
  - **Descripción**: Envía un correo de restablecimiento de contraseña al usuario.
  - **Estructura JSON**: Consulte `mail.json`

## Módulo de PDF

### Operaciones de PDF

- **Generar PDF de Eventos de Usuario**

  - **Método**: GET
  - **URL**: `/api/pdf/usuario-eventos`
  - **Descripción**: Genera un PDF de eventos y asistencias del usuario.
  - **Estructura JSON**: Consulte `pdf.json`

## Módulo de Usuarios

### Operaciones de Usuarios

- **Crear Usuario**

  - **Método**: POST
  - **URL**: `/api/user`
  - **Descripción**: Crea un nuevo usuario.
  - **Estructura JSON**: Consulte `user.json`

- **Obtener Todos los Usuarios**

  - **Método**: GET
  - **URL**: `/api/user`
  - **Descripción**: Recupera todos los usuarios.

- **Obtener Usuario por ID**

  - **Método**: GET
  - **URL**: `/api/user/:id`
  - **Descripción**: Recupera un usuario por su ID.

- **Actualizar Usuario**

  - **Método**: PUT
  - **URL**: `/api/user/:id`
  - **Descripción**: Actualiza la información de un usuario.
  - **Estructura JSON**: Consulte `user.json`

- **Eliminar Usuario**

  - **Método**: DELETE
  - **URL**: `/api/user/:id`
  - **Descripción**: Elimina un usuario por su ID.

- **Obtener Perfil de Usuario**

  - **Método**: GET
  - **URL**: `/api/user/profile/:id`
  - **Descripción**: Recupera el perfil de un usuario.

- **Obtener Historial de Eventos de Usuario**
  - **Método**: GET
  - **URL**: `/api/user/:id/event-history`
  - **Descripción**: Recupera el historial de eventos de un usuario.

## Módulo de Historial

### Operaciones de Historial

- **Crear Historial**

  - **Método**: POST
  - **URL**: `/api/history`
  - **Descripción**: Crea un nuevo registro de historial.
  - **Estructura JSON**: Consulte `history.json`

- **Obtener Todos los Historiales**

  - **Método**: GET
  - **URL**: `/api/history`
  - **Descripción**: Recupera todos los registros de historial.

- **Obtener Historial por ID**

  - **Método**: GET
  - **URL**: `/api/history/:id`
  - **Descripción**: Recupera un registro de historial por su ID.

## Módulo de Certificados

### Operaciones de Certificados

- **Crear Certificado**

  - **Método**: POST
  - **URL**: `/api/certificates`
  - **Descripción**: Crea un nuevo certificado.
  - **Estructura JSON**: Consulte `certificate.json`

- **Obtener Todos los Certificados**

  - **Método**: GET
  - **URL**: `/api/certificates`
  - **Descripción**: Recupera todos los certificados.

- **Obtener Certificado por ID**

  - **Método**: GET
  - **URL**: `/api/certificates/:id`
  - **Descripción**: Recupera un certificado por su ID.

- **Obtener Certificados por ID de Usuario**

  - **Método**: GET
  - **URL**: `/api/certificates/user/:userId`
  - **Descripción**: Recupera certificados por ID de usuario.

- **Actualizar Certificado**

  - **Método**: PATCH
  - **URL**: `/api/certificates/:id`
  - **Descripción**: Actualiza la información de un certificado.
  - **Estructura JSON**: Consulte `certificate.json`

- **Eliminar Certificado**
  - **Método**: DELETE
  - **URL**: `/api/certificates/:id`
  - **Descripción**: Elimina un certificado por su ID.

## Módulo de Autenticación

### Operaciones de Autenticación

- **Registrar Usuario**

  - **Método**: POST
  - **URL**: `/api/auth/register`
  - **Descripción**: Registra un nuevo usuario.
  - **Estructura JSON**: Consulte `auth.json`

- **Iniciar Sesión de Usuario**

  - **Método**: POST
  - **URL**: `/api/auth/login`
  - **Descripción**: Inicia sesión un usuario.
  - **Estructura JSON**: Consulte `auth.json`

- **Olvidó Contraseña**

  - **Método**: POST
  - **URL**: `/api/auth/forgot-password`
  - **Descripción**: Envía un correo de restablecimiento de contraseña.
  - **Estructura JSON**: Consulte `auth.json`

- **Autenticación de Google**

  - **Método**: GET
  - **URL**: `/api/auth/google`
  - **Descripción**: Inicia la autenticación de Google.

- **Callback de Autenticación de Google**

  - **Método**: GET
  - **URL**: `/api/auth/google/callback`
  - **Descripción**: Maneja el callback de autenticación de Google.

## Módulo de Asistencia

### Operaciones de Asistencia

- **Crear Asistencia**

  - **Método**: POST
  - **URL**: `/api/attendance`
  - **Descripción**: Crea un nuevo registro de asistencia.
  - **Estructura JSON**: Consulte `attendance.json`

- **Obtener Todas las Asistencias**

  - **Método**: GET
  - **URL**: `/api/attendance`
  - **Descripción**: Recupera todos los registros de asistencia.

- **Obtener Asistencia por ID**

  - **Método**: GET
  - **URL**: `/api/attendance/:id`
  - **Descripción**: Recupera un registro de asistencia por su ID.

- **Actualizar Asistencia**

  - **Método**: PATCH
  - **URL**: `/api/attendance/:id`
  - **Descripción**: Actualiza un registro de asistencia.
  - **Estructura JSON**: Consulte `attendance.json`

- **Eliminar Asistencia**
  - **Método**: DELETE
  - **URL**: `/api/attendance/:id`
  - **Descripción**: Elimina un registro de asistencia por su ID.

## Módulo de Anuncios

### Operaciones de Anuncios

- **Crear Anuncio**

  - **Método**: POST
  - **URL**: `/api/announcements`
  - **Descripción**: Crea un nuevo anuncio.
  - **Estructura JSON**: Consulte `announcement.json`

- **Enviar Anuncio a la Escuela**

  - **Método**: POST
  - **URL**: `/api/announcements/send-to-school`
  - **Descripción**: Envía un anuncio a una escuela específica.
  - **Estructura JSON**: Consulte `announcement.json`

- **Obtener Todos los Anuncios**

  - **Método**: GET
  - **URL**: `/api/announcements`
  - **Descripción**: Recupera todos los anuncios.

- **Obtener Anuncio por ID**

  - **Método**: GET
  - **URL**: `/api/announcements/:id`
  - **Descripción**: Recupera un anuncio por su ID.

- **Actualizar Anuncio**

  - **Método**: PATCH
  - **URL**: `/api/announcements/:id`
  - **Descripción**: Actualiza la información de un anuncio.
  - **Estructura JSON**: Consulte `announcement.json`

- **Eliminar Anuncio**
  - **Método**: DELETE
  - **URL**: `/api/announcements/:id`
  - **Descripción**: Elimina un anuncio por su ID.
