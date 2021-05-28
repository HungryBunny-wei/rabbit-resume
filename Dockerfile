FROM node

COPY ./ /rabbit-resume

WORKDIR /rabbit-resume/resume-front-angular
CMD npm install
CMD npm start -- --host 0.0.0.0 --disableHostCheck

EXPOSE 4200