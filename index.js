// import 'log.js';

import commander      from 'commander';
import chalk          from 'chalk';
import pkg            from './package';
import commands       from './commands';

let pending = null;

commander
  .version(pkg.version);

commander
  .command('serve')
  .action(() => {
    pending = commands.serve();
  });

commander.parse(process.argv);

if (pending === null) {
  commander.help();
} else {
  pending
    .catch((err) => {
      /* eslint-disable no-console */
      if (err instanceof Error) {
        chalk.red(console.error(err.stack));
      } else {
        chalk.red(console.error(err));
      }
      /* eslint-enable no-console */
      process.exit(1);
    });
}
