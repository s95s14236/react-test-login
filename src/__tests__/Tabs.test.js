import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/Tabs';

describe('Tabs component', () => {
    test('renders tabs with default value and triggers tab switch', () => {
        render(
            <Tabs defaultValue="tab1">
                <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Content for Tab 1</TabsContent>
                <TabsContent value="tab2">Content for Tab 2</TabsContent>
            </Tabs>
        );

        expect(screen.getByText('Tab 1')).toHaveClass('tabActive');
        expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Tab 2'));

        expect(screen.getByText('Tab 2')).toHaveClass('tabActive');
        expect(screen.getByText('Content for Tab 2')).toBeInTheDocument();
    });

});