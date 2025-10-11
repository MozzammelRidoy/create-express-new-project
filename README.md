# Create Express New Project (Wrapper)

<!-- [![npm version](https://badge.fury.io/js/express-project-builder.svg)](https://badge.fury.io/js/express-project-builder)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/) -->

A powerful and professional [Express.js project generator CLI](https://www.npmjs.com/package/express-project-builder) that instantly scaffolds a production-ready backend with [TypeScript](https://www.typescriptlang.org), [Modular Architecture](#Folder-Structure), and built-in support for [MongoDB (Mongoose)](https://mongoosejs.com/) or [PostgreSQL (Prisma)](https://www.prisma.io/). Includes authentication, error handling, rate limiting, file upload, caching, and utility functions—so you can focus on building features instead of boilerplate. Perfect for kickstarting your next Express.js API project with best practices and modern tools.

## Table of contents

- [Quick Start](#Quick-Start)
- [Key Elements](#Key-Elements)
- [Folder Structure](#Folder-Structure)
- [Packages](#Packages)
- [Examples](#Examples)

# [Quick Start](#Quick-Start)

**You don't need to install this package globally. Use it directly with [npx](https://www.npmjs.com/package/npx) Wrapper :**

```bash
npx create-express-new-project my-test-project
```

**You can also install it globally if you want to use it more frequently:**

```bash
npm i -g express-project-builder
```

```bash
npx express-project-builder my-test-project
```

## [Key Elements](#Key-Elements)

- ### Node.js & Express.js
- ### JavaScript & TypeScript
- ### Mongoose & MongoDB
- ### Prisma & PostgreSQL
- ### Rate Limiting & Memory Caching (Node Cache)
- ### CORS & Cookie Parser
- ### Error Handling & Response Formatting
- ### Moduler Architecture & Folder Structure
- ### Security & Authentication (JWT)
- ### Middlewares & Common Utilities
- ### File Handling (Multer) & Zod Validation
- ### Query Builder & Email Sending (Nodemailer)
- ### Project Building & Formatting (Prettier & ESLint)

## [Folder Structure](#Folder-Structure)

```ts
my-test-project/
├── node_modules/
├── dist/
│ └── server.js
├── generated/
│ └── prisma/
├── prisma/
│ └── schema.prisma
├── src/
│ ├── app/
│ ├── builder/
│ │ ├── MongooseQueryBuilder.ts
│ │ └── PrismaQueryBuilder.ts
│ ├── config/
│ │ └── index.ts
│ ├── constants/
│ │ └── userRole_constant.ts
│ ├── errors/
│ │ ├── AppError.ts
│ │ ├── handleMongooseCastError.ts
│ │ ├── handleMongooseDuplicateError.ts
│ │ ├── handleMongooseValidationError.ts
│ │ ├── handlePrismaCastError.ts
│ │ ├── handlePrismaDuplicateError.ts
│ │ ├── handlePrismaValidationError.ts
│ │ └── handleZodValidationError.ts
│ ├── helpers/
│ ├── interfaces/
│ │ ├── emailFormat.ts
│ │ ├── errors.ts
│ │ ├── index.d.ts
│ │ ├── jwtToken_interface.ts
│ │ └── userRole_type.ts
│ ├── lib/
│ ├── middlewares/
│ │ ├── auth.ts
│ │ ├── bigIntSerializer.ts
│ │ ├── formDataToSetJSONformatData.ts
│ │ ├── globalErrorHandler.ts
│ │ ├── handleFileUpload.ts
│ │ ├── notFound.ts
│ │ ├── rateLimitingHandler.ts
│ │ └── validateRequest.ts
│ ├── modules/
│ │ └── demo_modules/
│ │ ├── demo_modules_constant.ts
│ │ ├── demo_modules_controller.ts
│ │ ├── demo_modules_helpers.ts
│ │ ├── demo_modules_interface.ts
│ │ ├── demo_modules_lib.ts
│ │ ├── demo_modules_model.ts
│ │ ├── demo_modules_route.ts
│ │ ├── demo_modules_service.ts
│ │ ├── demo_modules_utils.ts
│ │ └── demo_modules_validationZodSchema.ts
│ ├── routers/
│ │ └── index.ts
│ ├── schemas/
│ ├── seed/
│ ├── shared/
│ │ └── prisma.ts
│ ├── types/
│ ├── utils/
│ │ ├── catchAsync.ts
│ │ ├── commonUtils.ts
│ │ ├── date_Time_Validation.ts
│ │ ├── logger.ts
│ │ ├── node_cache.ts
│ │ ├── removeUploadedFiles.ts
│ │ ├── sendEmail.ts
│ │ └── sendResponse.ts
│ ├── app.ts
│ └── server.ts
├── .env
├── .env.example
├── .gitignore
├── .prettierrc.json
├── eslint.config.mjs
├── package-lock.json
├── package.json
└── tsconfig.json
```

## [Packages](#Packages)

### Dependencies

- [axios (1.12.2)](https://www.npmjs.com/package/axios)
- [bcryptjs (3.0.2)](https://www.npmjs.com/package/bcryptjs)
- [cookie-parser (1.4.7)](https://www.npmjs.com/package/cookie-parser)
- [cors (2.8.5)](https://www.npmjs.com/package/cors)
- [dotenv (16.6.1)](https://www.npmjs.com/package/dotenv)
- [eslint-plugin-prettier (5.5.4)](https://www.npmjs.com/package/eslint-plugin-prettier)
- [express (5.1.0)](https://www.npmjs.com/package/express)
- [jsonwebtoken (9.0.2)](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose (8.19.1)](https://www.npmjs.com/package/mongoose)
- [multer (2.0.2-lts.1)](https://www.npmjs.com/package/multer)
- [node-cache (5.1.2)](https://www.npmjs.com/package/node-cache)
- [nodemailer (7.0.6)](https://www.npmjs.com/package/nodemailer)
- [@prisma/client (6.16.1)](https://www.npmjs.com/package/@prisma/client)
- [zod (3.24.1)](https://www.npmjs.com/package/zod)

### Development Dependencies

- [@eslint/js (9.35.0)](https://www.npmjs.com/package/@eslint/js)
- [@types/cookie-parser (1.4.9)](https://www.npmjs.com/package/@types/cookie-parser)
- [@types/cors (2.8.19)](https://www.npmjs.com/package/@types/cors)
- [@types/express (5.0.3)](https://www.npmjs.com/package/@types/express)
- [@types/jsonwebtoken (9.0.10)](https://www.npmjs.com/package/@types/jsonwebtoken)
- [@types/multer (2.0.0)](https://www.npmjs.com/package/@types/multer)
- [@types/nodemailer (7.0.1)](https://www.npmjs.com/package/@types/nodemailer)
- [@typescript-eslint/eslint-plugin (8.43.0)](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser (8.43.0)](https://www.npmjs.com/package/@typescript-eslint/parser)
- [eslint (9.35.0)](https://www.npmjs.com/package/eslint)
- [eslint-config-prettier (10.1.8)](https://www.npmjs.com/package/eslint-config-prettier)
- [globals (16.4.0)](https://www.npmjs.com/package/globals)
- [prisma (6.16.1)](https://www.npmjs.com/package/prisma)
- [prettier (3.6.2)](https://www.npmjs.com/package/prettier)
- [ts-node-dev (2.0.0)](https://www.npmjs.com/package/ts-node-dev)
- [typescript (5.9.2)](https://www.npmjs.com/package/typescript)
- [typescript-eslint (8.43.0)](https://www.npmjs.com/package/typescript-eslint)

## [Examples](#Examples)

- /src/app/builder/**MongooseQueryBuilder.ts** <br/>
  A fluent API for building complex MongoDB queries with Mongoose. Simplifies dynamic query construction for search, filtering, sorting, pagination, and field selection in a chainable interface.

  ```typescript
  // In your controller/service:
  import MongooseQueryBuilder from "../../builder/MongooseQueryBuilder";

  // Extract query parameters from request (e.g., ?search=keyword&page=1&limit=10)
  const { page, limit, sort, search, fields, ...filters } = req.query;

  // Create a new query builder instance
  const docQuery = new MongooseQueryBuilder(YourModel.find(), req.query)

    // Search in specified text fields (e.g., name, description, category)
    .search(["name", "description", "category"])

    // Apply filters dynamically (e.g., status=active, category=tech)
    .filter()

    // Sort results (e.g., ?sort=name asc,sort=-createdAt desc)
    .sort()

    // Paginate results (e.g., ?page=1&limit=10)
    .paginate()

    // Select specific fields (e.g., ?fields=name,price,description)
    .fields();

  // Execute the query and get results
  const result = await docQuery.modelQuery;

  // Get pagination metadata (total count, page, limit, total pages)
  const meta = await docQuery.countTotal();

  // Return the results and metadata from service
  return {
    result,
    meta,
  };
  ```

- /src/app/builder/**PrismaQueryBuilder.ts** <br/>
  A fluent API for building complex SQL queries with Prisma. Simplifies dynamic query construction for search, filtering, sorting, pagination, and field selection in a chainable interface.

  ```typescript
  // In your controller/service:
  import PrismaQueryBuilder from "../../builder/PrismaQueryBuilder";

  // Extract query parameters from request (e.g., ?search=keyword&page=1&limit=10)
  const { page, limit, sort, search, fields, ...filters } = req.query;

  // Create a new query builder instance
  const docQuery = new PrismaQueryBuilder(YourModel.find(), req.query)

    // Search in specified text fields (e.g., name, description, category)
    .search(["name", "description", "category"])

    // Apply filters dynamically (e.g., status=active, category=tech)
    .filter()

    // Sort results (e.g., ?sort=name asc,sort=-createdAt desc)
    .sort()

    // Paginate results (e.g., ?page=1&limit=10)
    .paginate()

    // Select specific fields (e.g., ?fields=name,price,description)
    .fields();

  // Execute the query and get results
  const result = await docQuery.modelQuery;

  // Get pagination metadata (total count, page, limit, total pages)
  const meta = await docQuery.countTotal();

  // Return the results and metadata from service
  return {
    result,
    meta,
  };
  ```

- /src/**config/index.ts** <br/> Central configuration file that manages environment variables and application settings. This file provides a structured way to access environment variables throughout the application.

```typescript
// In config/index.ts
export default {
  // ... other env configurations

  // New Env file Setup after ensure your .env file same secret is declear.
  your_new_env_secret: ensureEnv("YOUR_NEW_ENV_SECRET"),
};

// Accessing the configuration in other files
import config from "../../config";

const your_new_env_secret = config.your_new_env_secret;
```

- /src/errors/**AppError.ts** <br/> Custom error class for handling application-specific errors. This class extends the built-in `Error` class and adds additional properties for HTTP status code and error path.

```typescript
// Accessing the AppError in other files
import AppError from "../../errors/AppError";

// Throw an application error with status code, path, and message
throw new AppError(404, "user", "User not found");
```

- /src/middlewares/**auth.ts**  
  Middleware for authenticating requests. This middleware checks for a valid JWT token in the request headers and verifies its authenticity. If the token is valid, the user information is added to the request object (`req.user`) for further processing.

```typescript
// In your route file
import auth from "../../middlewares/auth";

// Protect a route with specific roles
router.get(
  "/users",
  auth("user", "admin", "superAdmin", "developer"), // Only users with these roles can access
  UsersControllers.getAllUsers
);

// Protect a route without role checking (just verify token)
router.get(
  "/profile",
  auth("user", "admin", "superAdmin", "developer", true), // Any authenticated user can access
  UsersController.getUserProfile
);
```

- /src/middlewares/**bigIntSerializer.ts**  
  Middleware for serializing BigInt values to strings. This middleware ensures that BigInt values are correctly converted to strings when sending JSON responses to the client, preventing serialization errors.

```typescript
// In your app.ts file
import { bigIntSerializer } from "./app/middlewares/bigIntSerializer";

// Apply globally to all routes
app.use(bigIntSerialize
```

- /src/middlewares/**formDataToSetJSONformatData.ts**  
  Middleware for converting form data to JSON format. This middleware parses form data (typically from multipart/form-data requests) and converts it to a JSON object (`req.body`), making it easier to process in your route handlers.

```typescript
// In your route file
import formDataToSetJSONformatData from "../../middlewares/formDataToSetJSONformatData";

// Apply to routes that handle both file uploads and JSON data
router.post(
  "/create",
  handleFileUpload([{...}]), // First handle file uploads
  formDataToSetJSONformatData, // Then convert form data to JSON
  ProductControllers.createProduct // Finally process the request
);
```

- /src/middlewares/**globalErrorHandler.ts** && /src/middlewares/**notFound.ts**  
  Global error handling middlewares. `globalErrorHandler` catches and handles errors that occur during the request-response cycle, while `notFound` handles requests for routes that do not exist.

```typescript
// In your app.ts
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

// Apply to the app (order matters: notFound should be last)
app.use(globalErrorHandler as unknown as express.ErrorRequestHandler);
app.use(notFound as unknown as express.ErrorRequestHandler);
```
