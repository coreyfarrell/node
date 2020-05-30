'use strict';

const {
  defaultResolve,
  DEFAULT_CONDITIONS,
} = require('internal/modules/esm/resolve');
const { defaultGetFormat } = require('internal/modules/esm/get_format');
const { defaultGetSource } = require('internal/modules/esm/get_source');
const { defaultTransformSource } = require(
  'internal/modules/esm/transform_source');

module.exports = {
  resolveImportURL({ specifier, base, conditions = DEFAULT_CONDITIONS }) {
    return defaultResolve(specifier, { parentURL: base, conditions });
  },

  getFormat({ url }) {
    return defaultGetFormat(url);
  },

  getSource({ url, format }) {
    return defaultGetSource(url, { format });
  },

  transformSource({ source, url, format }) {
    return defaultTransformSource(source, { url, format });
  },
};
