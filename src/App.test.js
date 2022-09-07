import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {

  const mockFn = jest.fn();
  render(<App onSubmit = {mockFn}/>);

  const button = screen.getByRole("button", {name: "submit"}); 

  userEvent.click(button);

  expect(mockFn).toHaveBeenCalledWith('');

});


test.only('responds to text input', () => {

  const mockFn = jest.fn();
  render(<App onSubmit = {(data) => {

    console.log("gets here");
    mockFn(data); 
  }}/>);

  const text = screen.getByRole("textbox"); 
  userEvent.type(text, "foobar");

  const button = screen.getByRole("button", {name: "submit"}); 

  userEvent.click(button);

  expect(mockFn).toHaveBeenCalledWith('foobar');

});
