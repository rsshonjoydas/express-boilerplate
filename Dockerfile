# //TODO: Stage 1: development
# Base on offical Node.js Alpine image
FROM node:16-alpine as development


# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json .

# Install dependencies
RUN yarn install && yarn cache clean

# Copy all files
COPY . .

# Build app
RUN yarn build

# //TODO: Stage 2: production
# Base on offical Nginx Alpine image
FROM node:16-alpine as production

WORKDIR /app

RUN chown -R node:node /app

USER node

COPY --chown=node:node --from=development /app/dist /app/dist

COPY --chown=node:node --from=development /app/package*.json /app/

RUN yarn install --only=production

# Run app with production mode
CMD ["node", "dist/server.js"]