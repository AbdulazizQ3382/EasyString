type Rule = {
    test: RegExp,
    callback: (...params) => void;
}

export default Rule;