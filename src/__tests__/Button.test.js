import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button component', () => {
  test('renders primary button with correct styles', () => {
    render(<Button variant="primary">Click me</Button>);

    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn', 'primaryBtn');
  });

  test('renders outline button with correct styles', () => {
    render(<Button variant="outline">Click me</Button>);

    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn', 'outlineBtn');
  });

  test('renders button with additional className', () => {
    render(<Button className="customClass">Click me</Button>);

    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn', 'customClass');
  });

  test('renders button with triggers onClick event', () => {
    const onClickMock = jest.fn();

    render(<Button onClick={onClickMock}>Click me</Button>);

    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});