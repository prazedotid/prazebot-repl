'use strict'
const MODULES = require('./config/modules')

function PrazeBotREPL (TOOLS, CONSTANTS) {
    const path = MODULES.PATH
    const { load } = TOOLS.LOADER
    const vorpalInstance = MODULES.VORPAL

    TOOLS.INSTANCES.REPL = vorpalInstance

    TOOLS.INSTANCES.REPL.delimiter(CONSTANTS.USERNAME + ' > ')
    load(TOOLS, path.join(__dirname, '/repl'))

    return {
        INIT: TOOLS => TOOLS.INSTANCES.REPL.show()
    }
}

module.exports = PrazeBotREPL