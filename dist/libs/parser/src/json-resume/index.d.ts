import { Json } from "@reactive-resume/utils";
import { Schema } from "zod";
import { Parser } from "../interfaces/parser";
import { JsonResume } from "./schema";
export * from "./schema";
export declare class JsonResumeParser implements Parser<Json, JsonResume> {
    schema: Schema;
    constructor();
    readFile(file: File): Promise<Json>;
    validate(data: Json): JsonResume;
    convert(data: JsonResume): any;
}
