/**
 * UAE Currency and text formatters for Brightlink
 */

export const formatAED = (amount) => {
  if (typeof amount !== 'number') return amount;
  return `AED ${amount.toLocaleString()}`;
};

export const formatWhatsAppLink = (phone, text = '') => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}${encoded ? `?text=${encoded}` : ''}`;
};
