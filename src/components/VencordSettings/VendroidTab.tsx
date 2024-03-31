/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Flex } from "@components/Flex";
import { Link } from "@components/Link";
import { classes } from "@utils/misc";
import { Button, Card, Text } from "@webpack/common";

import { SettingsTab, wrapTab } from "./shared";

function VendroidTab() {
    return (
        <SettingsTab title="Vendroid Settings">
            <Card className={classes("vc-settings-card", "info-card")}>
                <Flex flexDirection="column">
                    <Text style={{ fontWeight: "bold", marginBottom: "3px" }}>Configure Vendroid</Text>
                    <Text>You can click on the button below to open the Vendroid settings screen.</Text>
                    <Button
                        color={Button.Colors.BRAND}
                        style={{ marginTop: "3px" }} href="https://vendroid.nin0dev.com/settings">
                        Open settings
                    </Button>
                </Flex>
            </Card>
            <Card className={classes("vc-settings-card", "info-card")}>
                <Flex flexDirection="column">
                    <Text style={{ fontWeight: "bold", marginBottom: "3px" }}>Updater</Text>
                    <Text>Currently, Vencord isn't auto-updated to save data. However, you can enable automatic update checking for Vendroid itself in <Link href="https://vendroid.nin0dev.com/settings">the app settings.</Link></Text>
                    <Flex flexDirection="row">
                        <Button
                            color={Button.Colors.TRANSPARENT}
                            style={{ marginTop: "3px" }} href="https://vendroid.nin0dev.com/settings">
                            Update Vencord
                        </Button>
                        <Button
                            color={Button.Colors.TRANSPARENT}
                            style={{ marginTop: "3px" }} href="https://vendroid.nin0dev.com/settings">
                            Check for Vendroid updates
                        </Button>
                    </Flex>
                </Flex>
            </Card>
        </SettingsTab>

    );
}

export default wrapTab(VendroidTab, "Vendroid Settings");
