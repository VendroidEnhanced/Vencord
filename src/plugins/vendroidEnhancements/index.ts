/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

export default definePlugin({
    name: "VendroidEnhancements",
    description: "Makes Vendroid usable.",
    required: true,
    authors: [Devs.nin0dev, Devs.Sqaaakoi],
    patches: [
        // Disable DevTools footer button without needing to disable isStaff, by Sqaaakoi
        {
            find: ".DevToolsLayerProvider,",
            replacement: [{
                match: /(\(0,\i\.jsx)\)(\("div",\{className\:\i\.container,children:\(0,\i\.jsx\)\(\i\.Clickable,\{onClick\:\i\.toggleDisplayDevTools)/,
                replace: "$1,()=>null)$2"
            }]
        },
        // Disable legacy chat input, also by sqaaakoi
        {
            find: "chat input type must be set",
            replacement: [{
                match: /(UseLegacyChatInput\.useSetting\(\))&&!\(0\,\i\.isAndroidWeb\)\(\)/,
                replace: "$1"
            }]
        },
        // Fix GIF picker
        {
            find: "Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL",
            replacement: [{
                match: /\!\i\.isMobile/,
                replace: "true"
            }]
        },
    ]
});
