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
    ContributorDto: function() {
        return ContributorDto;
    },
    contributorSchema: function() {
        return contributorSchema;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const contributorSchema = _z.z.object({
    id: _z.z.number(),
    name: _z.z.string(),
    url: _z.z.string(),
    avatar: _z.z.string()
});
let ContributorDto = class ContributorDto extends (0, _dto.createZodDto)(contributorSchema) {
};

//# sourceMappingURL=index.js.map