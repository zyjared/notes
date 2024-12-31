import { blue, green, red } from 'colorette'

export function log(msg: string, ...args: unknown[]) {
  // eslint-disable-next-line no-console
  console.log(msg, ...args)
}

export function success(msg: string, ...args: unknown[]) {
  log(green(msg), ...args)
}

export function error(msg: string, ...args: unknown[]) {
  log(red(msg), ...args)
  throw new Error(msg)
}

export function tip(msg: string, ...args: unknown[]) {
  log(blue(msg), ...args)
}
