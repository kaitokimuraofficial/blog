/* Library */
import { useMemo } from 'react';

import { jp } from '../../locale/jp';

interface Params {
  [key: string]: any;
}

type Leaf = string | ((params: Params) => string);
interface LeafDict {
  [key: string]: Leaf;
}
interface Ns {
  [key: string]: Ns | Leaf;
}

function parseEntry(ns: Ns): LeafDict {
  return Object.keys(ns).reduce((dict: LeafDict, key) => {
    const value = ns[key];
    if (typeof value === 'object') {
      Object.keys(parseEntry(value)).forEach((k) => {
        dict[`${key}.${k}`] = value[k] as Leaf;
      });
    } else {
      dict[key] = value;
    }
    return dict;
  }, {});
}

export function parseTranslationData(data: { [key: string]: Ns }): {
  [key: string]: LeafDict;
} {
  return Object.keys(data).reduce(
    (dict: { [key: string]: LeafDict }, namespace) => {
      dict[namespace] = parseEntry(data[namespace]);
      return dict;
    },
    {},
  );
}

interface Translations {
  [locale: string]: { [ns: string]: { [key: string]: any } };
}

let userLocale: string = 'jp';
let dictionary: Translations = {
  jp: parseTranslationData(jp),
};

export function setUserLocale(locale: string) {
  userLocale = locale;
}

export function getUserLocale() {
  return userLocale;
}

export function translatorFunc(ns: string) {
  const localeDictionary = dictionary[userLocale];
  if (!localeDictionary || !localeDictionary[ns]) {
    return () => '';
  }
  const nsDictionary = localeDictionary[ns];
  return (key: string, params?: Params) => {
    const val = nsDictionary[key];
    switch (typeof val) {
      case 'function':
        return params ? val(params) : '';
      case 'string':
        return val;
      default:
        return '';
    }
  };
}

export function useTranslator(ns: string) {
  const translator = useMemo(() => translatorFunc(ns), [ns]);
  return translator;
}
