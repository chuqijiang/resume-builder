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
    CreateResumeDto: function() {
        return CreateResumeDto;
    },
    createResumeSchema: function() {
        return createResumeSchema;
    }
});
const _utils = require("@reactive-resume/utils");
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const createResumeSchema = _z.z.object({
    title: _z.z.string().min(1),
    slug: _z.z.string().min(1).transform(_utils.kebabCase).optional(),
    visibility: _z.z.enum([
        "public",
        "private"
    ]).default("private")
});
let CreateResumeDto = class CreateResumeDto extends (0, _dto.createZodDto)(createResumeSchema) {
};

//# sourceMappingURL=create.js.map