# Use a Node base image to build the app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy `pnpm-lock.yaml` and other files needed for `pnpm install`
COPY pnpm-lock.yaml package.json .npmrc ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the app files
COPY . .

# Build the app for production
RUN pnpm run build

# Use a lighter base image for the production app
FROM nginx:alpine

# Copy the build app to the nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default nginx port
EXPOSE 80

# Default nginx command will start the server
CMD ["nginx", "-g", "daemon off;"]
