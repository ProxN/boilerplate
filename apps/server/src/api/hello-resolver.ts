import { Resolver, Query } from 'type-graphql';

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return 'hello world';
  }
}

export default HelloResolver;
