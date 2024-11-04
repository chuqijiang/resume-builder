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
    ImportResumeDto: function() {
        return ImportResumeDto;
    },
    importResumeSchema: function() {
        return importResumeSchema;
    }
});
const _schema = require("@reactive-resume/schema");
const _utils = require("@reactive-resume/utils");
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const importResumeSchema = _z.z.object({
    title: _z.z.string().optional(),
    slug: _z.z.string().min(1).transform(_utils.kebabCase).optional(),
    visibility: _z.z.enum([
        "public",
        "private"
    ]).default("private").optional(),
    data: _schema.resumeDataSchema
});
let ImportResumeDto = class ImportResumeDto extends (0, _dto.createZodDto)(importResumeSchema) {
};

//# sourceMappingURL=import.js.map