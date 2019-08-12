/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`lib/execute.test.js TAP GraphQL resolver error exposed. > Response body. 1`] = `
{"errors":[{"message":"Exposed message.","locations":[{"line":1,"column":3}],"path":["test"]}]}
`

exports[`lib/execute.test.js TAP GraphQL resolver error unexposed. > Response body. 1`] = `
{"errors":[{"message":"Internal Server Error","locations":[{"line":1,"column":3}],"path":["test"]}]}
`

exports[`lib/execute.test.js TAP Operation field \`query\` invalid. > Response body. 1`] = `
{"errors":[{"message":"GraphQL query syntax error: Syntax Error: Unexpected ["}]}
`

exports[`lib/execute.test.js TAP Operation field \`query\` missing. > Response body. 1`] = `
{"errors":[{"message":"GraphQL operation field \`query\` missing."}]}
`

exports[`lib/execute.test.js TAP Operation field \`query\` validation errors. > Response body. 1`] = `
{"errors":[{"message":"Cannot query field \\"wrongOne\\" on type \\"Query\\".","locations":[{"line":1,"column":9}]},{"message":"Cannot query field \\"wrongTwo\\" on type \\"Query\\".","locations":[{"line":1,"column":19}]}]}
`

exports[`lib/execute.test.js TAP Operation field \`variables\` invalid. > Response body. 1`] = `
{"errors":[{"message":"GraphQL operation field invalid: Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided."}]}
`

exports[`lib/execute.test.js TAP Request body invalid. > Response body. 1`] = `
{"errors":[{"message":"Request body must be a JSON object."}]}
`

exports[`lib/execute.test.js TAP Request body missing due to absent body parser middleware. > Response body. 1`] = `
{"errors":[{"message":"Internal Server Error"}]}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`contextValue\` override using Koa ctx async. > Response body. 1`] = `
{"data":{"test":"contextValueOverridden"}}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`contextValue\` override using Koa ctx. > Response body. 1`] = `
{"data":{"test":"contextValueOverridden"}}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`contextValue\`. > Response body. 1`] = `
{"data":{"test":"contextValue"}}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`fieldResolver\` override using Koa ctx. > Response body. 1`] = `
{"data":{"test":"fieldResolverOverridden"}}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`fieldResolver\`. > Response body. 1`] = `
{"data":{"test":"fieldResolver"}}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`override\` returning not an object. > Response body. 1`] = `
{"errors":[{"message":"Internal Server Error"}]}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`override\` returning options invalid. > Response body. 1`] = `
{"errors":[{"message":"Internal Server Error"}]}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`rootValue\` override using Koa ctx. > Response body. 1`] = `
{"data":{"test":"rootValueOverridden"}}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`rootValue\`. > Response body. 1`] = `
{"data":{"test":"rootValue"}}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`schema\` invalid GraphQL override. > Response body. 1`] = `
{"errors":[{"message":"Internal Server Error"}]}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`schema\` not a GraphQLSchema instance override. > Response body. 1`] = `
{"errors":[{"message":"Internal Server Error"}]}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`schema\` undefined, without an override. > Response body. 1`] = `
{"errors":[{"message":"Internal Server Error"}]}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`validationRules\` override. > Response body. 1`] = `
{"errors":[{"message":"Message overridden.","locations":[{"line":1,"column":1}]},{"message":"Cannot query field \\"wrong\\" on type \\"Query\\".","locations":[{"line":1,"column":3}]}]}
`

exports[`lib/execute.test.js TAP \`execute\` middleware option \`validationRules\`. > Response body. 1`] = `
{"errors":[{"message":"Message.","locations":[{"line":1,"column":1}]},{"message":"Cannot query field \\"wrong\\" on type \\"Query\\".","locations":[{"line":1,"column":3}]}]}
`