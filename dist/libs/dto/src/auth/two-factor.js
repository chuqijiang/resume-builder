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
    BackupCodesDto: function() {
        return BackupCodesDto;
    },
    TwoFactorBackupDto: function() {
        return TwoFactorBackupDto;
    },
    TwoFactorDto: function() {
        return TwoFactorDto;
    },
    backupCodesSchema: function() {
        return backupCodesSchema;
    },
    twoFactorBackupSchema: function() {
        return twoFactorBackupSchema;
    },
    twoFactorSchema: function() {
        return twoFactorSchema;
    }
});
const _dto = require("nestjs-zod/dto");
const _z = require("nestjs-zod/z");
const twoFactorSchema = _z.z.object({
    code: _z.z.string().length(6, {
        message: "Code must be a 6 digit number"
    }).regex(/^\d+$/, {
        message: "Code must be a 6 digit number"
    })
});
let TwoFactorDto = class TwoFactorDto extends (0, _dto.createZodDto)(twoFactorSchema) {
};
const backupCodesSchema = _z.z.object({
    backupCodes: _z.z.array(_z.z.string().length(10))
});
let BackupCodesDto = class BackupCodesDto extends (0, _dto.createZodDto)(backupCodesSchema) {
};
const twoFactorBackupSchema = _z.z.object({
    code: _z.z.string().length(10)
});
let TwoFactorBackupDto = class TwoFactorBackupDto extends (0, _dto.createZodDto)(twoFactorBackupSchema) {
};

//# sourceMappingURL=two-factor.js.map