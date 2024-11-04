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
    ResumeDto: function() {
        return ResumeDto;
    },
    resumeSchema: function() {
        return resumeSchema;
    }
});
const _schema = require("@reactive-resume/schema");
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const _user = require("../user");
const resumeSchema = _z.z.object({
    id: _schema.idSchema,
    title: _z.z.string(),
    slug: _z.z.string(),
    data: _schema.resumeDataSchema.default(_schema.defaultResumeData),
    visibility: _z.z.enum([
        "private",
        "public"
    ]).default("private"),
    locked: _z.z.boolean().default(false),
    userId: _schema.idSchema,
    user: _user.userSchema.optional(),
    createdAt: _z.z.date().or(_z.z.dateString()),
    updatedAt: _z.z.date().or(_z.z.dateString())
});
let ResumeDto = class ResumeDto extends (0, _dto.createZodDto)(resumeSchema) {
};

//# sourceMappingURL=resume.js.map