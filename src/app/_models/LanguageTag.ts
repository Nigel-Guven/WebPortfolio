export class LanguageTag {
    
    static readonly PYTHON = new LanguageTag('Python', 'green');
    static readonly JAVA = new LanguageTag('Java', 'orange');
    static readonly HCL = new LanguageTag('HCL', 'grey');
    static readonly CSHARP = new LanguageTag('C#', 'blue');
    static readonly HTMLCSS = new LanguageTag('HTML/CSS', 'violet');
    static readonly JAVASCRIPT = new LanguageTag('Javascript', 'red');
    static readonly TYPESCRIPT = new LanguageTag('Typescript', 'red');
    static readonly CPLUSPLUS = new LanguageTag('C++', 'black');
    static readonly GOLANG = new LanguageTag('Golang', 'purple');
    static readonly RUBY = new LanguageTag('Ruby', 'darkred');
    static readonly SQL = new LanguageTag('SQL', 'lightblue');
    static readonly GROOVY = new LanguageTag('Groovy', 'pink');
    static readonly SHELL = new LanguageTag('Shell', 'magenta');
    
    private constructor(
        private readonly key: string, 
        public readonly color: string) { }

    toString() {
        return this.key;
    }

    equals(tag: LanguageTag): boolean {
        return this.key === tag.key;
    }
}