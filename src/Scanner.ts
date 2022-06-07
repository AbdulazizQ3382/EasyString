class Scanner {
    private _str: string;
    private _tail: string;
    private _position: number;

    constructor(str: string) {
        this._str = str
        this._tail = str
        this._position = 0
    }

    /**
     * Test the regular expression at the current position.
     * @param expression
     * @return string
     */
    public scan(expression: RegExp): string {
        const match = this.tail.match(expression)

        if (!match || match.index !== 0) {
            return '';
        }

        const string = match[0];

        this.tail = this.tail.substring(string.length)
        this.position += string.length

        return string;
    }

    /**
     * Return true if we reach the end of the string.
     */
    public end(): boolean {
        return this.tail === '';
    }

    get str(): string {
        return this._str;
    }

    set str(value: string) {
        this._str = value;
    }

    get tail(): string {
        return this._tail;
    }

    set tail(value: string) {
        this._tail = value;
    }

    get position(): number {
        return this._position;
    }

    set position(value: number) {
        this._position = value;
    }
}

export default Scanner