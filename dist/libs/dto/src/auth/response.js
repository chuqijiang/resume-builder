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
    AuthResponseDto: function() {
        return AuthResponseDto;
    },
    authResponseSchema: function() {
        return authResponseSchema;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const _user = require("../user");
const authResponseSchema = _z.z.object({
    status: _z.z.enum([
        "authenticated",
        "2fa_required"
    ]),
    user: _user.userSchema
});
let AuthResponseDto = class AuthResponseDto extends (0, _dto.createZodDto)(authResponseSchema) {
};

//# sourceMappingURL=response.js.map