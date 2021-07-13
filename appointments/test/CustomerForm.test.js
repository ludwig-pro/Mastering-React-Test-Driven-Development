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
  it('renders a form', () => {
    render(<CustomerForm />);
    expect(getFormById('customer')).not.toBeNull();
  });

  it('renders the first name field as a text box', () => {
    render(<CustomerForm />);
    const field = getFormById('customer').elements.namedItem('firstName');
    expectToBeInputFieldOfTypeText(field);
  });
});
