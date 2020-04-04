import { render } from '@testing-library/svelte';
import Header from './header.svelte';

test('should show passed string', () => {
    const { getByText } = render(Header, { name: 'header' });

    expect(getByText('header!')).toBeInTheDocument();
});
