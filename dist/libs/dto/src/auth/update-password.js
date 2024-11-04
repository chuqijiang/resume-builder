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
    UpdatePasswordDto: function() {
        return UpdatePasswordDto;
    },
    updatePasswordSchema: function() {
        return updatePasswordSchema;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const updatePasswordSchema = _z.z.object({
    password: _z.z.string().min(6)
});
let UpdatePasswordDto = class UpdatePasswordDto extends (0, _dto.createZodDto)(updatePasswordSchema) {
};

//# sourceMappingURL=update-password.js.map