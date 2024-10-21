// import { PREVIEW } from '$env/static/private'
import { createClient } from 'contentful'

const preview = false
export const content = createClient({
  space: '9v0es23ssc1s',
  host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
  accessToken: preview ? 'xZLKFZSU04nAIL46P2KNmU3dA_wNsA_Y7Pw27EoOy4U' : 'P64Te4A-m9KJnJnpQT_U5wRkh7ZQEHNXhOm-m8YNrxI',
}).withoutUnresolvableLinks