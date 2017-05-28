import 'regenerator-runtime/runtime';

import Promise from 'bluebird';
import timers  from 'timers';
import config  from './config';

export const listen = () => {
  console.log(`environment = ${config.environment}`);

  return new Promise((resolve) => {
    console.log('Hello world');

    timers.setTimeout(() => {
      console.log('good bye!');
      resolve();
    }, 10000);
  });
};
