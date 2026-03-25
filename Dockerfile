# Stage 1: Build the Next.js app (Builder)
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of your project code
COPY . .

# Build the Next.js project (This will create the 'out' folder)
RUN npm run build


# Stage 2: Server the app with Nginx (Production)
FROM nginx:alpine

# Copy the static 'out' folder from the builder stage to Nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 so Render can route traffic to it
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]