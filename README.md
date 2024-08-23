
# Own Monorepo Starter

This project is a monorepo setup using TypeScript, React Native, and Next.js. It includes shared components, app-specific logic, and configurations optimized for both web and native development.

## Project Structure

```
root/
  packages/
    ui/         # Shared UI components
    app/        # App-specific logic
  apps/
    web/        # Next.js web application
    native/     # React Native application
  tsconfig.json # TypeScript configuration
  metro.config.js # Metro bundler configuration for React Native
  ...
```

## Features

- **Monorepo Setup**: Organize shared packages and apps within a single repository.
- **TypeScript**: Strongly-typed code for better development experience.
- **Next.js (Web)**: Server-side rendering, static site generation, and more for web.
- **React Native (Mobile)**: Cross-platform mobile app using Expo.
- **Shared UI Components**: Reuse UI components across web and native apps.
- **Metro Configuration**: Custom configuration for bundling React Native code in a monorepo environment.

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Yarn](https://yarnpkg.com/) (v1.22+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Build and link packages (if required):

   ```bash
   yarn build
   ```

### Running the Apps

#### Web (Next.js)

To run the web app:

```bash
cd apps/web
yarn dev
```

Visit `http://localhost:3000` to see the web app.

#### Native (React Native / Expo)

To run the native app:

```bash
cd apps/native
npx expo start
```

You can open the app in the Expo Go app on your phone, or run it in an emulator.

### Folder Structure

- **`packages/ui`**: Contains reusable UI components that can be shared between web and native apps.
- **`packages/app`**: Contains business logic, utilities, or any shared logic that is used across apps.
- **`apps/web`**: Contains the Next.js application for web.
- **`apps/native`**: Contains the Expo-based React Native application for mobile.

### Configuration

#### TypeScript

The project uses a shared TypeScript configuration with `baseUrl` and `paths` set up for module aliasing. You can find the configuration in the root `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "baseUrl": "./",
    "paths": {
      "ui/*": ["packages/ui/*"],
      "app/*": ["packages/app/*"]
    },
    "jsx": "react-jsx"
  },
  "exclude": ["node_modules", "packages/*/node_modules", "packages/*/dist"],
  "extends": "expo/tsconfig.base"
}
```

#### Metro (for React Native)

The Metro bundler is configured to support the monorepo structure:

```javascript
// apps/native/metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '../..');
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules')
];
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
```

### Troubleshooting

1. **Module Not Found Errors**: Make sure the modules are correctly installed in the root and that `yarn install` was run at the root level.
2. **Metro Bundler Issues**: If the Metro bundler fails to start, try clearing the cache:

   ```bash
   npx expo start -c
   ```

3. **TypeScript Path Issues**: Ensure that `baseUrl` and `paths` are set correctly in `tsconfig.json` for your monorepo structure.

### Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

### License

This project is licensed under the MIT License.
