import Engine from "./EasyString";

/**
 *
 * @param template
 * @constructor
 */
function EasyString(template: string) {
    const engine = new Engine(template)

    return engine.render();
}

(<any>window).EasyString = EasyString;