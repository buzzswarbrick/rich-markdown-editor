"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const outline_icons_1 = require("outline-icons");
const SSR = typeof window === "undefined";
const isMac = !SSR && window.navigator.platform === "MacIntel";
const mod = isMac ? "⌘" : "ctrl";
function blockMenuItems(dictionary) {
    return [
        {
            name: "heading",
            title: dictionary.h2,
            keywords: "h2 heading2",
            icon: outline_icons_1.Heading2Icon,
            shortcut: "^ ⇧ 2",
            attrs: { level: 2 },
        },
        {
            name: "heading",
            title: dictionary.h3,
            keywords: "h3 heading3",
            icon: outline_icons_1.Heading3Icon,
            shortcut: "^ ⇧ 3",
            attrs: { level: 3 },
        },
        {
            name: "separator",
        },
        {
            name: "bullet_list",
            title: dictionary.bulletList,
            icon: outline_icons_1.BulletedListIcon,
            shortcut: "^ ⇧ 8",
        },
        {
            name: "ordered_list",
            title: dictionary.orderedList,
            icon: outline_icons_1.OrderedListIcon,
            shortcut: "^ ⇧ 9",
        },
        {
            name: "separator",
        },
        {
            name: "blockquote",
            title: dictionary.quote,
            icon: outline_icons_1.BlockQuoteIcon,
            shortcut: `${mod} ]`,
        },
        {
            name: "hr",
            title: dictionary.hr,
            icon: outline_icons_1.HorizontalRuleIcon,
            shortcut: `${mod} _`,
            keywords: "horizontal rule break line",
        },
        {
            name: "hr",
            title: dictionary.pageBreak,
            icon: outline_icons_1.PageBreakIcon,
            keywords: "page print break line",
            attrs: { markup: "***" },
        },
        {
            name: "image",
            title: dictionary.image,
            icon: outline_icons_1.ImageIcon,
            keywords: "picture photo",
        },
        {
            name: "link",
            title: dictionary.link,
            icon: outline_icons_1.LinkIcon,
            shortcut: `${mod} k`,
            keywords: "link url uri href",
        },
    ];
}
exports.default = blockMenuItems;
//# sourceMappingURL=block.js.map