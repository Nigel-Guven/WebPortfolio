export class Tag {
    
    static readonly PYTHON = new Tag('Python', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly HCL = new Tag('HCL', 'grey');
    static readonly CSHARP = new Tag('C#', 'blue');
    static readonly HTMLCSS = new Tag('HTML/CSS', 'violet');
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly CPLUSPLUS = new Tag('C++', 'black');
    static readonly GOLANG = new Tag('Golang', 'purple');
    static readonly RUBY = new Tag('Ruby', 'darkred');
    static readonly SQL = new Tag('SQL', 'lightblue');
    static readonly NODEJS = new Tag('Node JS', 'brown');
    static readonly GROOVY = new Tag('Groovy', 'pink');
    static readonly SHELL = new Tag('Shell', 'magenta');

    
    private constructor(
        private readonly key: string, 
        public readonly color: string) {

        }

    toString() {
        return this.key;
    }
}