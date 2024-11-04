"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthProvidersDto", {
    enumerable: true,
    get: function() {
        return AuthProvidersDto;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const authProvidersSchema = _z.z.array(_z.z.enum([
    "email",
    "github",
    "google"
]));
let AuthProvidersDto = class AuthProvidersDto extends (0, _dto.createZodDto)(authProvidersSchema) {
};

//# sourceMappingURL=providers.js.map