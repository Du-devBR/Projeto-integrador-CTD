# Use the latest Node.js version as the base image
FROM node:latest

# Set the working directory for the application
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY Dh-booking/package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY Dh-booking/. .

# Build the app
RUN npm run build

# Set environment variables
# ENV NODE_ENV=production

# Expose the server port
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]