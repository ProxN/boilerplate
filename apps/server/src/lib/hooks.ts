import { sync } from 'glob';
import path from 'path';

const loadResolvers = () => {
  const hooksPath = sync(path.join(__dirname, '../api', '/**/*-hook.ts'));
  return hooksPath.map(require);
};

export default loadResolvers;
