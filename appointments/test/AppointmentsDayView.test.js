import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Appointment, AppointmentsDayView } from '../src/AppointmentsDayView';
import { at, sampleAppointments } from '../src/sampleData';

describe('Appointment', () => {
  let container;
  let customer;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) => ReactDOM.render(component, container);

  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer first name', () => {
    customer = { firstName: 'Jordan' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Jordan');
  });
});

describe('AppointmentsDayView', () => {
  const today = new Date();
  const appointments = [
    {
      startsAt: today.setHours(12, 0),
      customer: { firstName: 'Ashley' },
    },
    {
      startsAt: today.setHours(13, 0),
      customer: { firstName: 'Jordan' },
    },
  ];
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) => ReactDOM.render(component, container);

  it('renders a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
  });

  it('renders multiple appointments in an ol element', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector('ol')).not.toBeNull();
    expect(container.querySelector('ol').children).toHaveLength(2);
  });

  it('renders each appointment in an li', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
    expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');
    expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
  });

  it('initially shows a message saying there are no appointments today', () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent).toMatch('There are no appointments scheduled for today.');
  });

  it('selects the first appointment by default', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.textContent).toMatch('Ashley');
  });

  it('has a button element in each li', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll('li > button')).toHaveLength(2);
    expect(container.querySelectorAll('li > button')[0].type).toEqual('button');
  });

  it('renders another appointment when selected', () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll('button')[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch('Jordan');
  });
});

describe('AppointmentsDetailsView', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) => ReactDOM.render(component, container);

  function createFakeAppointments({ startsAt, firstName, ...rest }) {
    return { startsAt: at(startsAt), customer: { firstName, ...rest } };
  }

  it('renders a table', () => {
    render(<AppointmentsDayView appointments={sampleAppointments} />);
    const table = container.querySelectorAll('table');
    expect(table.length).toEqual(1);
  });
  it('renders the first appointment time by default as table head', () => {
    render(
      <AppointmentsDayView
        appointments={[createFakeAppointments({ startsAt: 11, firstName: ['Last name', 'Charlie'] })]}
      />
    );
    expect(container.querySelectorAll('th').length).toEqual(1);
    expect(container.querySelector('th').textContent).toEqual('11:00');
  });
  it('renders another first appointment time by default as table head', () => {
    render(
      <AppointmentsDayView
        appointments={[createFakeAppointments({ startsAt: 10, firstName: ['Last name', 'Charlie'] })]}
      />
    );
    expect(container.querySelectorAll('th').length).toEqual(1);
    expect(container.querySelector('th').textContent).toEqual('10:00');
  });
  it('renders another first appointment time by default as table head', () => {
    render(<AppointmentsDayView appointments={sampleAppointments} />);
    expect(container.querySelectorAll('th').length).toEqual(1);
    expect(container.querySelector('th').textContent).toEqual('09:00');
  });

  it('renders the customer last name inside', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({ startsAt: 10, firstName: 'Charlie', lastName: ['Last name', 'Brown'] }),
        ]}
      />
    );
    expect(container.querySelectorAll('td')[0].textContent).toEqual('Last name');
    expect(container.querySelectorAll('td')[1].textContent).toEqual('Brown');
  });
  it('renders another customer last name inside', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({ startsAt: 10, firstName: 'Orange', lastName: ['Last name', 'Mechanical'] }),
        ]}
      />
    );
    expect(container.querySelectorAll('td')[0].textContent).toEqual('Last name');
    expect(container.querySelectorAll('td')[1].textContent).toEqual('Mechanical');
  });

  it('renders the customer phone number', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: 'Orange',
            lastName: ['Last name', 'Mechanical'],
            phoneNumber: ['Phone number', '0636656565'],
          }),
        ]}
      />
    );
    expect(container.querySelectorAll('td')[2].textContent).toEqual('Phone number');
    expect(container.querySelectorAll('td')[3].textContent).toEqual('0636656565');
  });

  it('renders another customer phone number', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: 'Orange',
            lastName: ['Last name', 'Mechanical'],
            phoneNumber: ['Phone number', '3434343434'],
          }),
        ]}
      />
    );
    expect(container.querySelectorAll('td')[2].textContent).toEqual('Phone number');
    expect(container.querySelectorAll('td')[3].textContent).toEqual('3434343434');
  });

  it('renders the customer stylist', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: 'Orange',
            lastName: ['Last name', 'Mechanical'],
            phoneNumber: ['Phone number', '3434343434'],
            stylist: ['Stylist', 'Georgina'],
          }),
        ]}
      />
    );
    expect(container.querySelectorAll('td')[4].textContent).toEqual('Stylist');
    expect(container.querySelectorAll('td')[5].textContent).toEqual('Georgina');
  });

  it('renders another customer stylist', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: 'Orange',
            lastName: ['Last name', 'Mechanical'],
            phoneNumber: ['Phone number', '3434343434'],
            stylist: ['Stylist', 'P!nk'],
          }),
        ]}
      />
    );
    expect(container.querySelectorAll('td')[4].textContent).toEqual('Stylist');
    expect(container.querySelectorAll('td')[5].textContent).toEqual('P!nk');
  });

  it('renders the customer service', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: 'Orange',
            lastName: ['Last name', 'Mechanical'],
            phoneNumber: ['Phone number', '3434343434'],
            stylist: ['Stylist', 'P!nk'],
            service: ['Service', 'Beard trim'],
          }),
        ]}
      />
    );
    expect(container.querySelectorAll('td')[6].textContent).toEqual('Service');
    expect(container.querySelectorAll('td')[7].textContent).toEqual('Beard trim');
  });

  it('renders another customer service', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: 'Orange',
            lastName: ['Last name', 'Mechanical'],
            phoneNumber: ['Phone number', '3434343434'],
            stylist: ['Stylist', 'P!nk'],
            service: ['Service', 'Hair cut'],
          }),
        ]}
      />
    );
    expect(container.querySelectorAll('td')[6].textContent).toEqual('Service');
    expect(container.querySelectorAll('td')[7].textContent).toEqual('Hair cut');
  });
  it('renders the customer note', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: 'Orange',
            lastName: ['Last name', 'Mechanical'],
            phoneNumber: ['Phone number', '3434343434'],
            stylist: ['Stylist', 'P!nk'],
            service: ['Service', 'Beard trim'],
            note: ['Note', 'Private note'],
          }),
        ]}
      />
    );
    expect(container.querySelectorAll('td')[8].textContent).toEqual('Note');
    expect(container.querySelectorAll('td')[9].textContent).toEqual('Private note');
  });

  it('renders another customer note', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: 'Orange',
            lastName: ['Last name', 'Mechanical'],
            phoneNumber: ['Phone number', '3434343434'],
            stylist: ['Stylist', 'P!nk'],
            service: ['Service', 'Hair cut'],
            note: ['Note', 'Another Private note'],
          }),
        ]}
      />
    );
    expect(container.querySelectorAll('td')[8].textContent).toEqual('Note');
    expect(container.querySelectorAll('td')[9].textContent).toEqual('Another Private note');
  });
});
