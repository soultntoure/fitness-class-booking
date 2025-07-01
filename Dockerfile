# Use an official Node runtime as a parent image
FROM node:18-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY server/package*.json ./server/

# Install dependencies
RUN npm install --prefix ./server

# Copy the rest of the application code
COPY ./server/ ./server/

# Use a minimal base image for the final stage
FROM node:18-alpine

WORKDIR /app

# Copy installed dependencies from the builder stage
COPY --from=builder /app/server/node_modules ./server/node_modules

# Copy application code
COPY ./server/ ./server/

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the application
CMD ["node", "server/server.js"]
