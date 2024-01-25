import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs";
import { VERSION } from "../utils/constants";
import LabelInput from "../components/ui/LabelInput";
import Button from "../components/ui/Button";
import Icons from "../components/ui/Icons";
import useAuthContext from "../hooks/useAuthContext";

import styles from './Info.module.css';

export default function Info() {
    const { user } = useAuthContext();
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    function handleDropdownClick() {
        setIsDropdownActive(state => !state);
    }

    return (
        <div className={styles.info}>
            <Button className={styles.dropdownBtn} variant="outline" onClick={handleDropdownClick}>
                <div>
                    Show the info
                </div>
                <Icons.TriangleDown />
            </Button>
            {isDropdownActive &&
                <div className={styles.dropdownContent}>
                    <Tabs defaultValue="version">
                        <TabsList className={styles.tabList}>
                            <TabsTrigger value="version">Version</TabsTrigger>
                            <TabsTrigger value="userinfo">UserInfo</TabsTrigger>
                        </TabsList>
                        <TabsContent value="version">
                            <div className={styles.tabContent}>
                                Version：{VERSION}
                            </div>
                        </TabsContent>
                        <TabsContent value="userinfo">
                            <div className={styles.tabContent}>
                                <div className={styles.userinfo}>
                                    <LabelInput className={styles.userinfoInput} label="Username" value={user.username} disabled />
                                    <LabelInput className={styles.userinfoInput} label="Password" value={user.password} disabled />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            }
        </div>
    );
}
