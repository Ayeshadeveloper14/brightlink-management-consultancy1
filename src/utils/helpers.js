/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * UAE Currency and text formatters for Brightlink
 */

export const formatAED = (amount) => {
  if (typeof amount !== 'number') return amount;
  return `AED ${amount.toLocaleString()}`;
};

export * from './whatsapp.js';
