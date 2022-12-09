import { ExecutorContext } from '@nrwl/devkit';
import { webpackExecutor } from '@nrwl/webpack';
import { BuildExecutorSchema } from './schema';

async function* buildExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  return yield* webpackExecutor(options, context);
}

export default buildExecutor;
