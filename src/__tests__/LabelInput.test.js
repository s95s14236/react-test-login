import { render, screen, fireEvent } from '@testing-library/react';
import LabelInput from '../components/LabelInput';

describe('LabelInput component', () => {
    test('renders input with label and handles show/hide password', () => {
        render(<LabelInput label="Password" type="password" isPassword />);

        expect(screen.getByText('Password')).toBeInTheDocument();

        const inputElement = screen.getByLabelText('Password');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.type).toBe('password');

        const checkboxElement = screen.getByLabelText('Show password');
        expect(checkboxElement).toBeInTheDocument();

        fireEvent.click(checkboxElement);
        expect(inputElement.type).toBe('text');
    });
});