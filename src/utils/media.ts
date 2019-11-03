const sizes = {
  display: '1200px',
  tablet: '1200px',
  phone: '600px',
};

export const media = {
  display: `(min-width: ${sizes.display})`,
  tablet: `(max-width: ${sizes.tablet})`,
  phone: `(max-width: ${sizes.phone})`,
};
