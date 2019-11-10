import { AutoForm } from 'uniforms-antd'
import React from 'react'
import testSchema from './testSchema'
export default function GuestForm() {
  return <AutoForm schema={testSchema} onSubmit={console.log} />
}
