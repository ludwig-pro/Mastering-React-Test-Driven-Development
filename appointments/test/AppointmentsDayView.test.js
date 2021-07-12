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
    customer = { label: 'First name', value: 'Ashley' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer first name', () => {
    customer = { label: 'First name', value: 'Jordan' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Jordan');
  });

  function createFakeAppointments({ startsAt, firstName, ...rest }) {
    return { startsAt: at(startsAt), customer: { firstName }, ...rest };
  }

  it('renders a table', () => {
    render(<AppointmentsDayView appointments={sampleAppointments} />);
    const table = container.querySelectorAll('table');
    expect(table.length).toEqual(1);
  });
  it('renders the first appointment time by default as table head', () => {
    render(<AppointmentsDayView appointments={[createFakeAppointments({ startsAt: 11, firstName: 'Charlie' })]} />);
    expect(container.querySelectorAll('th').length).toEqual(1);
    expect(container.querySelector('th').textContent).toEqual('11:00');
  });
  it('renders another first appointment time by default as table head', () => {
    render(<AppointmentsDayView appointments={[createFakeAppointments({ startsAt: 10, firstName: 'Charlie' })]} />);
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
          createFakeAppointments({
            startsAt: 10,
            firstName: { label: 'First name', value: 'Charlie' },
            lastName: { label: 'Last name', value: 'Brown' },
          }),
        ]}
      />
    );
    expect(container.textContent).toMatch('Last name');
    expect(container.textContent).toMatch('Brown');
  });
  it('renders another customer last name inside', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: { label: 'First name', value: 'Orange' },
            lastName: { label: 'Last name', value: 'Mechanical' },
          }),
        ]}
      />
    );
    expect(container.textContent).toMatch('Last name');
    expect(container.textContent).toMatch('Mechanical');
  });

  it('renders the customer phone number', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: { label: 'First name', value: 'Orange' },
            lastName: { label: 'Last name', value: 'Mechanical' },
            phoneNumber: { label: 'Phone number', value: '0636656565' },
          }),
        ]}
      />
    );
    expect(container.textContent).toMatch('Phone number');
    expect(container.textContent).toMatch('0636656565');
  });

  it('renders another customer phone number', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: { label: 'First name', value: 'Orange' },
            lastName: { label: 'Last name', value: 'Mechanical' },
            phoneNumber: { label: 'Phone number', value: '3434343434' },

            phoneNumber: { label: 'Phone number', value: '3434343434' },
          }),
        ]}
      />
    );
    expect(container.textContent).toMatch('Phone number');
    expect(container.textContent).toMatch('3434343434');
  });

  it('renders the customer stylist', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: { label: 'First name', value: 'Orange' },
            lastName: { label: 'Last name', value: 'Mechanical' },
            phoneNumber: { label: 'Phone number', value: '3434343434' },
            stylist: { label: 'Stylist', value: 'Georgina' },
          }),
        ]}
      />
    );
    expect(container.textContent).toMatch('Stylist');
    expect(container.textContent).toMatch('Georgina');
  });

  it('renders another customer stylist', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: { label: 'First name', value: 'Orange' },
            lastName: { label: 'Last name', value: 'Mechanical' },
            phoneNumber: { label: 'Phone number', value: '3434343434' },
            stylist: { label: 'Stylist', value: 'P!nk' },
          }),
        ]}
      />
    );
    expect(container.textContent).toMatch('Stylist');
    expect(container.textContent).toMatch('P!nk');
  });

  it('renders the customer service', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: { label: 'First name', value: 'Orange' },
            lastName: { label: 'Last name', value: 'Mechanical' },
            phoneNumber: { label: 'Phone number', value: '3434343434' },
            stylist: { label: 'Stylist', value: 'P!nk' },
            service: { label: 'Service', value: 'Beard trim' },
          }),
        ]}
      />
    );
    expect(container.textContent).toMatch('Service');
    expect(container.textContent).toMatch('Beard trim');
  });

  it('renders another customer service', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: { label: 'First name', value: 'Orange' },
            lastName: { label: 'Last name', value: 'Mechanical' },
            phoneNumber: { label: 'Phone number', value: '3434343434' },
            stylist: { label: 'Stylist', value: 'P!nk' },
            service: { label: 'Service', value: 'Hair cut' },
          }),
        ]}
      />
    );
    expect(container.textContent).toMatch('Service');
    expect(container.textContent).toMatch('Hair cut');
  });
  it('renders the customer note', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: { label: 'First name', value: 'Orange' },
            lastName: { label: 'Last name', value: 'Mechanical' },
            phoneNumber: { label: 'Phone number', value: '3434343434' },
            stylist: { label: 'Stylist', value: 'P!nk' },
            service: { label: 'Service', value: 'Hair cut' },
            note: { label: 'Note', value: 'Private note' },
          }),
        ]}
      />
    );
    expect(container.textContent).toMatch('Note');
    expect(container.textContent).toMatch('Private note');
  });

  it('renders another customer note', () => {
    render(
      <AppointmentsDayView
        appointments={[
          createFakeAppointments({
            startsAt: 10,
            firstName: { label: 'First name', value: 'Orange' },
            lastName: { label: 'Last name', value: 'Mechanical' },
            phoneNumber: { label: 'Phone number', value: '3434343434' },
            stylist: { label: 'Stylist', value: 'P!nk' },
            service: ['Service', 'Hair cut'],
            note: { label: 'Note', value: 'Another Private note' },
          }),
        ]}
      />
    );
    expect(container.textContent).toMatch('Note');
    expect(container.textContent).toMatch('Another Private note');
  });
});

describe('AppointmentsDayView', () => {
  const today = new Date();
  const appointments = [
    {
      startsAt: today.setHours(12, 0),
      firstName: { label: 'First name', value: 'Ashley' },
    },
    {
      startsAt: today.setHours(13, 0),
      firstName: { label: 'First name', value: 'Jordan' },
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
