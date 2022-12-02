---
to: <%= absPath %>/index.ts
---
import s from './<%= component_name %>.module.scss';
import * as types from './<%= component_name %>.types';

export { default } from './<%= component_name %>';
export { s, types };
