import React from 'react';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';

describe('CustomerForm', () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const getFormById = (id) => container.querySelector(`form[id="${id}"]`);

  const expectToBeInputFieldOfTypeText = (field) => {
    expect(field).not.toBeNull();
    expect(field.tagName).toBe('INPUT');
    expect(field.type).toEqual('text');
  };

  const getFirstNameField = () => getFormById('customer').elements.namedItem('firstName');

  const labelFor = (formElement) => container.querySelector(`label[for="${formElement}"]`);

  it('renders a form', () => {
    render(<CustomerForm />);
    expect(getFormById('customer')).not.toBeNull();
  });

  it('renders the first name field as a text box', () => {
    render(<CustomerForm />);
    const field = getFirstNameField();
    expectToBeInputFieldOfTypeText(field);
  });

  it('includes the existing value for the first name', () => {
    render(<CustomerForm firstName="Ashley" />);
    const field = getFirstNameField();
    expect(field.value).toEqual('Ashley');
  });

  it('renders a label for the first name field', () => {
    render(<CustomerForm />);
    expect(labelFor('firstName')).not.toBeNull();
    expect(labelFor('firstName').textContent).toEqual('First name');
  });
  it('assigns an id that matches the label id to the first name field', () => {
    render(<CustomerForm />);
    expect(getFirstNameField().id).toEqual('firstName');
  });
});
