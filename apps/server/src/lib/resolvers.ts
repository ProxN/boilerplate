import { sync } from 'glob';
import path from 'path';
import { NonEmptyArray } from 'type-graphql';

const loadResolvers = () => {
  const resolversPath = sync(
    path.join(__dirname, '../api', '/**/*-resolver.ts')
  );
  const modules = resolversPath.map(require).map((module) => module.default);

  return modules as NonEmptyArray<Function>;
};

export default loadResolvers;
