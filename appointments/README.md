# Appointments

This is the example application for the book _Mastering Test-Driven Development for React_.

Your source code should go in the `src` directory and your tests in `test`.

# Prerequisities

You'll need to have [Node](http://nodejs.org), including NPM, installed on your machine.

Run `npm install` before attempting any of the instructions below.

You may also wish to run `npm upgrade` to ensure your Node installation is up-to-date.

# Running tests

Use the following command to run all tests.

    npm test

You can also run tests in a single test file:

    npm test test/AppointmentsDayView.test.js

# Building and running the application

Build the application using this command:

    npm run build

Then you can open the app by browsing to `dist/index.html`.

# Exercice 1

- Rename Appointment.js and Appointment.test.js to AppointmentsDayView.js and AppointmentsDayView.test.js.
  While it's fine to include multiple components in one file if they form a hierarchy, you should always name the file after the root component for that hierarchy.

Complete the Appointment component by displaying the following fields on the page. You should use a table HTML element to give the data some visual structure.

This shouldn't affect how you write your tests:

- Customer last name, using the lastName field
- Customer telephone number, using the phoneNumber field Stylist name, using the stylist field
- Salon service, using the service field
- Appointment notes, using the notes field
- Add a heading to Appointment to make it clear which appointment time is being viewed.

There is some repeated sample data. We've used sample data in our tests and we also have sampleAppointments in src/sampleData.js, which we used to manually test our application. Do you think it is worth drying this up? If so, why? If not, why not?
