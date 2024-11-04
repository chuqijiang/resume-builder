import { z } from "nestjs-zod/z";
export declare const resetPasswordSchema: z.ZodObject<{
    token: z.ZodString;
    password: z.ZodPassword;
}, "strip", z.ZodTypeAny, {
    password: string;
    token: string;
}, {
    password: string;
    token: string;
}>;
declare const ResetPasswordDto_base: import("nestjs-zod/dto").ZodDto<{
    password: string;
    token: string;
}, z.ZodObjectDef<{
    token: z.ZodString;
    password: z.ZodPassword;
}, "strip", z.ZodTypeAny>, {
    password: string;
    token: string;
}>;
export declare class ResetPasswordDto extends ResetPasswordDto_base {
}
export {};
