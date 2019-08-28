FROM node:8.11.3-alpine

# Add project files
ADD . /catalog-service
WORKDIR /catalog-service

# Create catalog user
RUN adduser -S catalog ; \
    chown -R catalog /catalog-service
USER catalog

# Install dependencies
RUN npm install

EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
