import { FrameworkTag } from "./FrameworkTag";
import { LanguageTag } from "./LanguageTag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    languageTags: LanguageTag[];
    frameworkTags: FrameworkTag[];
}