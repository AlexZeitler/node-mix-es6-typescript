import createThing from './a';

const Logger = require('./c');
const logger = new Logger();

/**
 * @param {createThing.Thing} thing
 */
export function takesThing (thing) {
  logger.log(thing);
}

takesThing(createThing());