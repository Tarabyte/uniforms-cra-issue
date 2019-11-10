import { JSONSchemaBridge } from 'uniforms-bridge-json-schema'

const schema = {
  title: 'Guest',
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' }
  },
  required: ['firstName', 'lastName']
}

export default new JSONSchemaBridge(schema)
