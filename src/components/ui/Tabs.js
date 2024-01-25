import { useContext, useState } from "react";
import { TabContext } from "../../contexts/Context";

import styles from './Tabs.module.css';

/**
 * Provides a tabbed interface with Tabs, TabsList, TabsTrigger, and TabsContent components
 *
 * @component
 * @example
 * // Example usage of Tabs component
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content for Tab 1</TabsContent>
 *   <TabsContent value="tab2">Content for Tab 2</TabsContent>
 * </Tabs>
 *
 * @param {Object} props - The component properties
 * @param {string} [props.defaultValue] - The default active tab value
 * @param {ReactNode} props.children - The child components (TabsList, TabsTrigger, TabsContent)
 * @returns {JSX.Element} - The rendered Tabs component.
 */
function Tabs({ defaultValue, children }) {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    );
}

function TabsList({ className, children }) {
    return <div className={`${styles.tabList} ${className}`}>{children}</div>;
}

function TabsTrigger({ value, className, children }) {
    const { activeTab, setActiveTab } = useTabContext();

    function handleTabClick() {
        setActiveTab(value);
    }

    return (
        <div className={`center ${styles.tabTrigger} ${activeTab === value ? styles.tabActive : ""} ${className}`} onClick={handleTabClick}>
            {children}
        </div>
    );
}

function TabsContent({ value, children }) {
    const { activeTab } = useTabContext();
    return <>{activeTab === value && <div>{children}</div>}</>;
}

function useTabContext() {
    const context = useContext(TabContext);
    return context;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
