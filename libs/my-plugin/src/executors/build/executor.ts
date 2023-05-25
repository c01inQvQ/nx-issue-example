import { ExecutorContext } from '@nx/devkit';
import { webpackExecutor } from '@nx/webpack';
import { BuildExecutorSchema } from './schema';

async function* buildExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  return yield* webpackExecutor(options, context);
}

export default buildExecutor;
