FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/angular-base-to-monster /usr/share/nginx/html




# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
# FROM node:latest as build
# COPY nginx.conf /etc/nginx/nginx.conf
# # Set the working directory
# WORKDIR /usr/local/app

# # Add the source code to app
# COPY ./ /usr/local/app/

# # Install all the dependencies
# RUN npm install

# # Generate the build of the application
# RUN npm run build


# # Stage 2: Serve app with nginx server

# # Use official nginx image as the base image
# FROM nginx:latest

# # Copy the build output to replace the default nginx contents.
# COPY --from=build /usr/local/app/dist/angular-base-to-monster /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80