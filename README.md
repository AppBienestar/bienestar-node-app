# Bienestar Node API

API backend desarrollada en **Node.js + Express**, siguiendo los principios de **Domain-Driven Design (DDD)**. Esta API está diseñada para servir como backend de una aplicación móvil desarrollada en Flutter.

---

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu_usuario/bienestar-node-app.git
cd bienestar-node-app

# Instalar dependencias
npm install

# Iniciar el servidor
npm start
```

> El servidor se ejecuta por defecto en `http://localhost:3000`

---

## 🧱 Estructura del proyecto

```
src/
│
├── config/                  # Configuración general (env, BD, etc.)
│
├── core/                   # Módulos por dominio
│   └── user/
│       ├── application/
│       │   └── register-user.usecase.js   # Casos de uso
│       ├── domain/
│       │   ├── users.entity.js            # Entidad de dominio
│       │   └── users.repository.js        # Repositorio (interfaz y lógica)
│       ├── interfaces/
│       │   ├── controllers/
│       │   │   └── user.controller.js     # Entrada de peticiones
│       │   └── dto/
│       │       └── create-user.dto.js     # Estructura esperada del request
│       └── user.routes.js                 # Rutas específicas del dominio
│
├── shared/                 # Middlewares, utilidades, helpers comunes
│
├── index.js                # App principal de Express
└── server.js               # Punto de entrada de la aplicación
```

---

## 🧺 Endpoints disponibles

### `POST /api/users/register`

Crea un nuevo usuario.

**Body esperado**:

```json
{
  "name": "Juan",
  "paternalSurname": "Pérez",
  "maternalSurname": "López",
  "email": "juan@example.com",
  "phone": "5551234567",
  "birthDate": "1990-05-15",
  "gender": "M",
  "role": 1
}
```

---

## ✨ ¿Cómo agregar un nuevo modelo?

Supongamos que quieres agregar el dominio `journalEntry`, sigue estos pasos:

### 1. Crear estructura de carpetas

```
src/core/journalEntry/
│
├── application/
│   └── register-journal-entry.usecase.js
├── domain/
│   ├── journal-entry.entity.js
│   └── journal-entry.repository.js
├── interfaces/
│   ├── controllers/
│   │   └── journal-entry.controller.js
│   └── dto/
│       └── create-journal-entry.dto.js
└── journal-entry.routes.js
```

### 2. Registrar la ruta en `index.js`

```js
const journalRoutes = require('./core/journalEntry/journal-entry.routes');
app.use('/api/journal', journalRoutes);
```

