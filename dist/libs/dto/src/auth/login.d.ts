import { z } from "nestjs-zod/z";
export declare const loginSchema: z.ZodEffects<z.ZodObject<{
    identifier: z.ZodString;
    password: z.ZodPassword;
}, "strip", z.ZodTypeAny, {
    password: string;
    identifier: string;
}, {
    password: string;
    identifier: string;
}>, {
    password: string;
    identifier: string;
}, {
    password: string;
    identifier: string;
}>;
declare const LoginDto_base: import("nestjs-zod/dto").ZodDto<{
    password: string;
    identifier: string;
}, z.ZodEffectsDef<z.ZodObject<{
    identifier: z.ZodString;
    password: z.ZodPassword;
}, "strip", z.ZodTypeAny, {
    password: string;
    identifier: string;
}, {
    password: string;
    identifier: string;
}>>, {
    password: string;
    identifier: string;
}>;
export declare class LoginDto extends LoginDto_base {
}
export {};
