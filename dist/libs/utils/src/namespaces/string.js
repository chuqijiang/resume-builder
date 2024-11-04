"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    extractUrl: function() {
        return extractUrl;
    },
    generateRandomName: function() {
        return generateRandomName;
    },
    getInitials: function() {
        return getInitials;
    },
    isEmptyString: function() {
        return isEmptyString;
    },
    isUrl: function() {
        return isUrl;
    },
    kebabCase: function() {
        return kebabCase;
    },
    parseLayoutLocator: function() {
        return parseLayoutLocator;
    },
    processUsername: function() {
        return processUsername;
    }
});
const _uniquenamesgenerator = require("unique-names-generator");
const getInitials = (name)=>{
    var _initials_shift, _initials_pop;
    // eslint-disable-next-line unicorn/better-regex
    const regex = new RegExp(RegExp("(\\p{L}{1})\\p{L}+", "gu"));
    const initials = [
        ...name.matchAll(regex)
    ];
    var _initials_shift_, _initials_pop_;
    return (((_initials_shift_ = (_initials_shift = initials.shift()) == null ? void 0 : _initials_shift[1]) != null ? _initials_shift_ : "") + ((_initials_pop_ = (_initials_pop = initials.pop()) == null ? void 0 : _initials_pop[1]) != null ? _initials_pop_ : "")).toUpperCase();
};
const isUrl = (string)=>{
    if (!string) return false;
    const urlRegex = /https?:\/\/[^\n ]+/i;
    return urlRegex.test(string);
};
const isEmptyString = (string)=>{
    if (string === "<p></p>") return true;
    return string.trim().length === 0;
};
const extractUrl = (string)=>{
    const urlRegex = /https?:\/\/[^\n ]+/i;
    const result = urlRegex.exec(string);
    return result ? result[0] : null;
};
const kebabCase = (string)=>{
    var _string_match;
    if (!string) return "";
    var _string_match_join_toLowerCase;
    return (_string_match_join_toLowerCase = (_string_match = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/gu)) == null ? void 0 : _string_match.join("-").toLowerCase()) != null ? _string_match_join_toLowerCase : "";
};
const generateRandomName = ()=>{
    return (0, _uniquenamesgenerator.uniqueNamesGenerator)({
        dictionaries: [
            _uniquenamesgenerator.adjectives,
            _uniquenamesgenerator.adjectives,
            _uniquenamesgenerator.animals
        ],
        style: "capital",
        separator: " ",
        length: 3
    });
};
const processUsername = (string)=>{
    if (!string) return "";
    return string.replace(/[^\d.A-Za-z-]/g, "").toLowerCase();
};
const parseLayoutLocator = (payload)=>{
    if (!payload) return {
        page: 0,
        column: 0,
        section: 0
    };
    const section = payload.index;
    const [page, column] = payload.containerId.split(".").map(Number);
    return {
        page,
        column,
        section
    };
};

//# sourceMappingURL=string.js.map