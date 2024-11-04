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
    FeatureDto: function() {
        return FeatureDto;
    },
    featureSchema: function() {
        return featureSchema;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const featureSchema = _z.z.object({
    isSignupsDisabled: _z.z.boolean().default(false),
    isEmailAuthDisabled: _z.z.boolean().default(false)
});
let FeatureDto = class FeatureDto extends (0, _dto.createZodDto)(featureSchema) {
};

//# sourceMappingURL=index.js.map