# Use an official Node.js runtime as the base image
FROM node:18.17.1

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the Docker image
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application into the Docker image
COPY . .

# Expose port 3000 for the application
EXPOSE 5173

# Run the application
# CMD [ "node", "script.js" ]
CMD [ "npm", "run", "dev" ]