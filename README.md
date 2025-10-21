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
- [Contributors](#Contributors)
- [Sponsors](#Sponsors)
- [Buy Me a Coffee](#Buy-Me-a-Coffee)
- [Reporting Issues](#Reporting-Issues)
- [Impotance](#Impotance)
- [License](#license)

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

- /src/middlewares/**handleFileUpload.ts**  
  Middleware for handling file uploads in multipart/form-data requests. Uses `multer` to process uploaded files and stores them in the specified directory. Returns an array of file objects (`req.files`) to the next middleware.

```typescript
// In your route file
import { handle_file_upload_middleware } from "../../middlewares/handleFileUpload";

// Apply the middleware to the route
router.post(
  "/create",
  handle_file_upload_middleware([
    {
      fieldName: "image", // Form field name for the file
      maxCount: 1, // Maximum number of files allowed
      fileType: "image", // Type of file (image, document, etc.)
      optional: false, // Whether the file is required,
      allowedImageTypes: [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "image/bmp",
        "image/svg+xml",
      ], // Allowed image types,
      maxImageSize: 1024 * 1024 * 2, // Maximum image size in bytes (2MB)
    },
  ]),
  formDataToSetJSONformatData, // Convert form data to JSON
  ProductController.createProduct
);
```

- /src/middlewares/**rateLimitingHandler.ts**  
  Rate limiting middleware to prevent API abuse. Implements progressive rate limiting that increases block duration for repeat offenders.

```typescript
// In your app.ts file for global rate limiting or
// In your route file for route-specific rate limiting

import { createProgressiveRateLimiter } from "../../middlewares/rateLimitingHandler";

// Create rate limiter instances with different configurations
const apiRateLimiter = createProgressiveRateLimiter({
  initialWindowMs: 60 * 1000, // 1 minute
  initialMax: 100, // limit each IP to 100 requests per windowMs
  initialBlockMs: 15 * 60 * 1000, // block for 15 minutes on first offense
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
  skipSuccessfulRequests: false,
  skipFailedRequests: false,
  // Custom keyGenerator to handle proxied requests
  keyGenerator: (req: Request) => {
    // Check for X-Forwarded-For header (common when behind proxy)
    const forwarded = req.headers["x-forwarded-for"] as string;
    if (forwarded) {
      // If multiple IPs, take the first one (client IP)
      return forwarded.split(",")[0].trim();
    }

    // Fallback to other methods
    return (
      req.ip ||
      req.socket?.remoteAddress ||
      req.connection?.remoteAddress ||
      "unknown"
    );
  },
});

// Apply rate limiter to a specific route
router.get("/products", apiRateLimiter, ProductControllers.getAllProducts);

// Apply rate limiter globally to all API routes
app.use("/v1/api/", apiRateLimiter, routers);
```

- /src/middlewares/**validateRequest.ts** <br/>
  Middleware for validating incoming requests using Zod schemas. It checks for required fields, data formats, and returns an error response if validation fails.

```typescript
// In your route file
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "../../app/models/product_validationZodSchema";

router.post(
  "/create",
  validateRequest(ProductValidation.createProduct_ValidationZodSchema),
  ProductControllers.createProduct
);

// /src/app/models/product_validationZodSchema.ts
import { z } from "zod";

const createProduct_ValidationZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    price: z.number({ required_error: "Price is required" }).positive(),
    category: z.string().optional(),
  }),
});

export const ProductValidation = {
  createProduct_ValidationZodSchema,
};
```

- /src/**routers/index.ts** <br/>
  Centralized router file for grouping and exporting all route modules.

```typescript
// In your src/routers/index.ts
import { ProductRoutes } from "../modules/product/product_route";

// Define all route modules with their paths
const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/new-route",
    route: NewRouteRoutes,
  },
];

// Creating a New Route Group
// Create new route file: src/routers/new-route.ts
import { Router } from "express";
const newRouters = Router();

// Define routes for this group
const moduleRoutes = [
  {
    path: "/new-version",
    route: newVersionRoutes,
  },
];

// Register routes in this group
moduleRoutes.forEach((route) => {
  newRouters.use(route.path, route.route);
});

export default newRouters;

// Applying in app.ts:
import routers from "./routers";
import newRouters from "./routers/new-route";

// Apply main routes with version prefix
app.use("/v1/api", routers);

// Apply new route group with different version
app.use("/v2/api", newRouters);
```

- /src/utils/**catchAsync.ts**  
  Utility function that wraps asynchronous route handlers to automatically catch errors and pass them to the next error-handling middleware.

```typescript
// In your Controller file , Like : product_controllet.ts
import catchAsync from "../../utils/catchAsync";

const get_All_Products = catchAsync(async (req, res) => {
  // Your async controller logic here
  const result = await Product_Services.get_All_Products_FromDB(
    req.body,
    req.query
  );

  res.status(200).json({
    data: result,
  });
});

export const Product_Controllers = {
  get_All_Products,
};
```

- /src/utils/**commonUtils.ts** <br/> Comprehensive utility functions for common tasks including OTP generation, phone/email validation, ID generation, and data formatting.

```typescript
// In your service file or any file
import {
  generateOTP,
  check_Input_isPhone_Or_isEmail,
  generateTransactionId,
  formatPhoneNumber,
  maskSensitiveInfo,
  isValidEmail,
  isValidPhone,
  generateRandomString,
  generateRandomBarcodeId,
  createToken,
  verifyToken,
} from "../../utils/commonUtils";

// Generate a 6-digit OTP
const otp = generateOTP(6); // Returns: "123456"

// Check if input is phone or email
const inputInfo = check_Input_isPhone_Or_isEmail(payload.credentials);
// Returns: { type: 'email', value: 'example@example.com' } or
// Returns: { type: 'phone', value: '01712345678' }

// Generate a unique transaction ID
const transactionId = generateTransactionId(12); // Returns: "1A2B3C4D5E6F"

// Format phone number
const formattedPhone = formatPhoneNumber(payload.phone, "international");
// Returns: "+8801712345678"

// Mask sensitive information
const maskedEmail = maskSensitiveInfo(payload.email, "email");
// Returns: "use***@example.com"

// Validate email format
const isEmailValid = isValidEmail(payload.email); // Returns: true

// Validate phone format
const isPhoneValid = isValidPhone(payload.phone); // Returns: true

// Generate random string
const randomString = generateRandomString(10, {
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: false,
}); // Returns: "Ab3D7fG9H2"

// Generate random barcode ID
const barcodeId = generateRandomBarcodeId(); // Returns: "153.04.55.022"

// JWT operations (if auth is enabled)
const token = createToken(
  { user_id: "123", role: "admin" },
  config.jwt_access_token_secret,
  config.jwt_access_token_expires_in
); // Returns JWT token

// JWT Token Verify and Decode
const decoded = verifyToken(token, config.jwt_access_token_secret);
// Returns: { userId: "123", role: "admin", iat: ..., exp: ... }
```

- /src/utils/**date_Time_Validation.ts** <br/> Utility functions for date and time validation, formatting, and manipulation.

```typescript
// In your service file or any file
import {
  isValidDate,
  Start_End_DateTime_Validation,
  isDateInRange,
  formatDateToISOString,
  getDateDifference,
} from "../../utils/date_Time_Validation";

// Validate if a date string is valid
const isDateValid = isValidDate(payload.date); // Returns: true
const isInvalid = isValidDate(payload.date); // Returns: false

// Validate and normalize start and end dates
const { start, end } = Start_End_DateTime_Validation(
  payload.start_date,
  payload.end_date
);
// Returns: { start: Date, end: Date } with proper date objects

// Check if a date is within a range
const inRange = isDateInRange(new Date(), payload.start_date, payload.end_date); // Returns: true

// Format date to ISO string without timezone
const isoDate = formatDateToISOString(new Date());
// Returns: "2023-12-31T12:34:56"

// Get difference between two dates
const daysDiff = getDateDifference(
  payload.start_date,
  payload.end_date,
  "days"
); // Returns: 9
```

- /src/utils/**node_cache.ts** <br/>  
  Utility functions for in-memory caching using Node.js. Provides simple methods to store, retrieve, and manage cached data with optional expiration.

```typescript
// In your service file or any file
import {
  create_cache_into_RAM,
  get_cache_from_RAM,
  delete_cache_from_RAM,
  clear_all_cache,
  has_cache_key,
  get_cache_stats,
  get_cache_ttl,
  get_all_cache_keys,
} from "../../utils/node_cache";

// Create cache entries
create_cache_into_RAM("user:123", { name: "John", age: 30 }, 3600); // With TTL
create_cache_into_RAM("config", { theme: "dark" }); // Without TTL

// Retrieve cached data
const user = get_cache_from_RAM("user:123"); // { name: "John", age: 30 }
const config = get_cache_from_RAM("config"); // { theme: "dark" }

// Check if cache key exists
const userExists = has_cache_key("user:123"); // true
const configExists = has_cache_key("config"); // true

// Get TTL for a key
const userTtl = get_cache_ttl("user:123"); // 3600 (seconds)
const configTtl = get_cache_ttl("config"); // 0 (no TTL)

// Get all cache keys
const allKeys = get_all_cache_keys(); // ["user:123", "config"]

// Get cache statistics
const stats = get_cache_stats(); // { keys: 2, hits: 0, misses: 0, ... }

// Delete specific cache entry
delete_cache_from_RAM("user:123"); // 1 (deleted)

// Clear all cache
clear_all_cache(); // Removes all entries
```

- /src/utils/**removeUploadedFiles.ts** <br/>  
   Utility functions for cleaning up uploaded files from local storage after cloud upload or error handling.

```typescript
// In your service file or any file
import {
  removeSingleUploadedFile,
  removeUploadedFiles,
  removeFilesFromFields,
  cleanUploadDirectory,
} from "../../utils/removeUploadedFiles";

// Remove a single file
await removeSingleUploadedFile("/path/to/file.jpg");

// Remove all uploaded files from multer request
await removeUploadedFiles(req.files);

// Remove files from specific fields only
await removeFilesFromFields(req.files, ["images", "documents"]);

// Clean entire upload directory
await cleanUploadDirectory("/path/to/uploads");
```

- /src/utils/**sendEmail.ts** <br/>  
  Utility functions for sending emails using Nodemailer with HTML content, attachments, and error handling.

```typescript
// In your service file or any file
import sendEmail, { testEmailConfig } from "../../utils/sendEmail";
import { TEmailFormat } from "../../interfaces/emailFormat";

// Send email with HTML content
const emailTemplate: TEmailFormat = {
  subject: "Welcome to Our Platform",
  emailBody: `
    <h1>Welcome!</h1>
    <p>Thank you for joining our platform.</p>
  `,
};

await sendEmail(payload.email, emailTemplate);

// Test email configuration
await testEmailConfig();
```

- /src/utils/**sendResponse.ts** <br/>  
  Utility function for sending standardized API responses with appropriate status codes, success flags, and data.

```typescript
// In your Controller file (e.g., product_controller.ts)
import sendResponse from "../../utils/sendResponse";

// Traditional approach without sendResponse utility
const get_AllProducts = catchAsync(async (req, res) => {
  const result = await Product_Services.fetch_AllProductsFromDB(
    req.params.user_id,
    req.query
  );

  res.status(200).json({
    success: true,
    message: "Products are retrieved successfully!",
    data: result.result,
    meta: result.meta,
  });
});

// Using sendResponse utility
const get_AllProducts = catchAsync(async (req, res) => {
  const result = await Product_Services.fetch_AllProductsFromDB(
    req.params.user_id,
    req.query
  );

  sendResponse(res, {
    status: 200,
    success: true,
    message: "Products are retrieved successfully!",
    data: result.result,
    meta: result.meta, // meta is optional object.
  });
});

export const Product_Controllers = {
  get_AllProducts,
};
```

## [Contributors](#Contributors)

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/MozzammelRidoy">
        <img src="https://res.cloudinary.com/dsh57dvqf/image/upload/v1735985475/dx8q2l2x1ekijvqpgnud.jpg" width="120" height="120" style="border-radius:50%;" alt="Mozzammel Ridoy"/>
      </a>
      <br/>
      <b><a href="https://github.com/MozzammelRidoy">Mozzammel Ridoy</a></b>
      <br/>
      💻 Code • ⚙️ Maintenance
    </td>
  </tr>
</table>

> 💡 Tip: Want to be here? Check out our [Contribution Guidelines](#Reporting-Issues)!
