'use strict';

/**
 * language-en service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::language-en.language-en');
