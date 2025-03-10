export class FrameworkTag {
    
    static readonly SPRINGBOOT = new FrameworkTag('Spring Boot', 'orange');
    static readonly NETCORE = new FrameworkTag('.NET Core', 'blue');
    static readonly NETMVC = new FrameworkTag('.NET Core', 'blue');
    static readonly ANGULAR = new FrameworkTag('Angular', 'red');
    static readonly NODEJS = new FrameworkTag('Node.JS', 'brown');
    static readonly BOOTSTRAP = new FrameworkTag('Bootstrap', 'violet');
    
    private constructor(
        private readonly key: string, 
        public readonly color: string) {

        }

    toString() {
        return this.key;
    }

    equals(tag: FrameworkTag): boolean {
        return this.key === tag.key;
    }
}