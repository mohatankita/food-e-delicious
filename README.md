# FoodEDelicious

## Project Description -
The aim of the project is to create Zomato kind of application using Angular. You will be using Zomato’s API as your backend and the frontend application that is to be created by you must have all the features mentioned later. Application UI should be designed by yourself using Bootstrap. You are not allowed to use bootstrap template available on internet. The code should be entirely yours. Before we jump into the feature list, let's look at our API and how to use it.
About the API -
Zomato API is an open source API which gives you access to all the data that is used by Zomato website. Here is how you can use the API -
  Step 1 - Go to https://developers.zomato.com/api and click on Request An API Key.
  Step 2 - Once you have signed up.
  Step 3 - Follow this API Documentation to select the suitable API for your application feature.

## Features of the Application
1) Home page - On Home page landing you should first detect the user location or asked for enter manual location like city. According to city or location (latitude and longitude) you should show the restaurants in card list format with image and brief details. There should be one search bar. Where user can search the restaurants with location. After clicking on particular restaurant detailed page should be open.
2) Details View - This view should contain all information like images, menu address with google map and other information related to restaurant. And bottom you should show the restaurant review in proper format like list view.
3) Error Views - If API is failed or restaurant not found that time you should show appropriate error page with decent design. Note: Application should be fully responsive and intuitive.

## A few important conditions:
1) Design of the application must be done entirely by you from scratch using Bootstrap. You are not allowed to use templates that are already available on internet. Use of such templates will be considered plagiarism and your submission will be
rejected.
2) You must follow all the industry practices taught to you in the training. You have to structure your application in the same way and write all the components and services yourself. You have to take a call on how many components and services should be there.
3) Rate limiting - You as a frontend developer have to ensure that your application is fast enough for good user experience. For quick response from API, rate limiting is suggested. You have to decide based on your judgement and your training on rate
limit of each of the APIs you are using.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
