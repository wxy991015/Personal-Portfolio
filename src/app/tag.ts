export class Tag {
  static readonly SPRING = new Tag('Spring', '#40a832');
  static readonly REACT = new Tag('React', 'dodgerblue');
  static readonly JAVA = new Tag('Java', '#e6e600');
  static readonly AWS = new Tag('AWS', 'orange');
  static readonly GCP = new Tag('GCP', 'red');
  static readonly BOOTSTRAP = new Tag('Bootstrap', 'purple');
  static readonly NODEJS = new Tag('Node.js', '');
  static readonly ANGULAR = new Tag('Angular', '#94FF33');
  static readonly POSTGRESQL = new Tag('PostgreSQL', 'powderblue');
  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
