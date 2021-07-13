import React from 'react';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';

describe('CustomerForm', () => {
  let render, container;
  beforeEach(() => {
    ({ render, container } = createContainer());
  });
  const getFormById = (id) => container.querySelector(`form[id=${id}]`);
  it('renders a form', () => {
    render(<CustomerForm />);
    expect(getFormById('customer')).not.toBeNull();
  });
});
