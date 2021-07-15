import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';

describe('CustomerForm', () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const form = (id) => container.querySelector(`form[id="${id}"]`);

  const getFormField = (name) => form('customer').elements[name];

  const labelFor = (formElement) =>
    container.querySelector(`label[for="${formElement}"]`);

  const expectToBeInputFieldOfTypeText = (formElement) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual('INPUT');
    expect(formElement.type).toEqual('text');
  };

  const itRendersAsATextBox = (fieldName) =>
    it('renders as a text box', () => {
      render(<CustomerForm />);
      expectToBeInputFieldOfTypeText(getFormField(fieldName));
    });

  const itIncludesTheExistingValue = (fieldName) =>
    it('includes the existing value', () => {
      render(<CustomerForm {...{ [fieldName]: 'value' }} />);
      expect(getFormField(fieldName).value).toEqual('value');
    });

  const itRenderALabel = (fieldName, labelText) =>
    it('renders a label', () => {
      render(<CustomerForm />);
      expect(labelFor(fieldName)).not.toBeNull();
      expect(labelFor(fieldName).textContent).toEqual(labelText);
    });

  const itAssignsIdThatMatchesLabelId = (fieldName) =>
    it('assigns an id that matches the label id', () => {
      render(<CustomerForm />);
      expect(getFormField(fieldName).id).toEqual(fieldName);
    });

  const itSavesExistingValueWhenSubmitted = (fieldName, value) =>
    it('saves existing value when submitted', async () => {
      expect.hasAssertions();
      render(
        <CustomerForm
          {...{ [fieldName]: value }}
          onSubmit={(event) =>
            expect(event[fieldName]).toEqual(value)
          }
        />
      );
      await ReactTestUtils.Simulate.submit(form('customer'));
    });

  const itSavesNewValueWhenSubmitted = (fieldName, value) =>
    it('saves new value when submitted', async () => {
      expect.hasAssertions();
      render(
        <CustomerForm
          {...{ [fieldName]: 'aExistingValue' }}
          onSubmit={(event) =>
            expect(event[fieldName]).toEqual(value)
          }
        />
      );
      await ReactTestUtils.Simulate.change(
        getFormField(fieldName),
        {
          target: { value },
        }
      );
      await ReactTestUtils.Simulate.submit(form('customer'));
    });

  const itTestFormField = (fieldName, label) => {
    it('renders a form', () => {
      render(<CustomerForm />);
      expect(form('customer')).not.toBeNull();
    });

    itRendersAsATextBox(fieldName);

    itIncludesTheExistingValue(fieldName);

    itRenderALabel(fieldName, label);

    itAssignsIdThatMatchesLabelId(fieldName);

    itSavesExistingValueWhenSubmitted(fieldName, 'existingValue');

    itSavesNewValueWhenSubmitted('firstName', `newValue`);
  };

  describe('first name field', () => {
    itTestFormField('firstName', 'First name');
  });

  describe('last name field', () => {
    itTestFormField('lastName', 'Last name');
  });
  describe('phone number field', () => {
    itTestFormField('phoneNumber', 'Phone number');
  });
});
