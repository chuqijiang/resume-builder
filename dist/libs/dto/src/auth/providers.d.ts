import { z } from "nestjs-zod/z";
declare const AuthProvidersDto_base: import("nestjs-zod/dto").ZodDto<("email" | "github" | "google")[], z.ZodArrayDef<z.ZodEnum<["email", "github", "google"]>>, ("email" | "github" | "google")[]>;
export declare class AuthProvidersDto extends AuthProvidersDto_base {
}
export {};
