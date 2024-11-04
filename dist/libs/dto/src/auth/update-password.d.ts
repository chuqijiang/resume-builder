import { z } from "nestjs-zod/z";
export declare const updatePasswordSchema: z.ZodObject<{
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
}, {
    password: string;
}>;
declare const UpdatePasswordDto_base: import("nestjs-zod/dto").ZodDto<{
    password: string;
}, z.ZodObjectDef<{
    password: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    password: string;
}>;
export declare class UpdatePasswordDto extends UpdatePasswordDto_base {
}
export {};
