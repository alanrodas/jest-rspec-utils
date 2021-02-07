const { describe, it } = require('@jest/globals');

const extendDescribe = function(prefixMsg) {
    const newDescribe = function(msg, blockFn) {
        describe(prefixMsg ? prefixMsg + msg : msg, blockFn);
    }
    newDescribe.only = describe.only;
    newDescribe.each = describe.each;
    newDescribe.skip = describe.skip;
    return newDescribe;
};

const extendIt = function(prefixMsg) {
    const newIt = function(msg, blockFn) {
        it(prefixMsg ? prefixMsg + msg : msg, blockFn);
    }
    newIt.only = it.only;
    newIt.each = it.each;
    newIt.skip = it.skip;
    newIt.todo = it.todo;
    return newIt;
};

const extensions = {
    context: describe,
    given: describe,
    should: extendIt('It should ')
}

/* Extend the global object */
global.context = extensions.context;
global.given = extensions.given;
global.should = extensions.should;

module.exports = extensions;