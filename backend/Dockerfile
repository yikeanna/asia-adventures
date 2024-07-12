FROM node:18.17.1
# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the image
COPY package*.json ./

# Install the application's dependencies inside the Docker image
RUN npm install

# Copy the rest of the application's code into the image
COPY . .

# Set environment variable in Dockerfile (Not recommended for sensitive information)
ENV MONGODB_URI=mongodb+srv://yikeanna:Byfe03UNsro1pyoa@cluster0.srsx14a.mongodb.net/?retryWrites=true&w=majority

# Run script.js when the Docker container starts
CMD [ "node", "script.js" ]