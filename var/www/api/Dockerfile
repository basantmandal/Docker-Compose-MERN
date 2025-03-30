FROM node:18

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json .

# Install dependecies
RUN npm install

# Bundle app source into container
COPY . .

# Expose the port the app runs in
ARG PORT
EXPOSE $PORT

# Serve the app
CMD ["npm", "start"] 
