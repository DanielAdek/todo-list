# 1. Base image
FROM node:24-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency files
COPY package.json yarn.lock ./

# 4. Install dependencies
RUN yarn install --frozen-lockfile

# 5. Copy source code
COPY . .

# 6. Build the app (babel: src → dist)
RUN yarn build

# 7. Expose app port
EXPOSE 3000

# 8. Run compiled app
CMD ["node", "dist/app"]
