// XXX This file should be used to preload necessary env variables and is a good example on how to setup jest

if (process.env.NODE_ENV !== 'test') {
  throw Error('Tests must be executed in a "test" environment (by convention)');
}
