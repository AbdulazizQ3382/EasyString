import type Rule from './types/Rule';

/**
 * @package EasyString
 */
class EasyString {
    
    private rules: Rule[];

    /**
     *
     * @param template String to be formatted.
     */
    constructor(template: string) {
        this.rules = [
            {
                test: /@var(.*?)/g,
                callback: this.variable
            }
        ]
    }

    render() {
        const formattedTemplate = String();
        this.rules.forEach(rule => {

        })
    }

    private variable(template) {

    }
}

export default EasyString;