const brandShort = {
  'TVS Electronics':'TVS',
  'K7 Security':'K7',
  'Ant Esports':'AE',
  'TP-Link':'TP',
  'D-Link':'DL',
  'SanDisk':'SD',
  'Kingston':'K',
  'Transcend':'TS',
  'ViewSonic':'VS',
  'STARTEK':'ST',
  'SEAGATE':'SG',
  'AARVEX':'AV',
  'Zebronics':'ZB',
  'GIGABYTE':'GB',
  'DIGISOL':'DG',
  'Logitech':'LG',
  'FRONTECH':'FT',
  'Crucial':'CR',
  'Canon':'CA',
  'Epson':'EP',
  'EPSON':'EP'
};

const accentClasses = ['blue','cyan','navy','sky'];

function hashBrand(value) {
  return [...value].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

function BrandLogo({ brand, small = false }) {
  const initials = brandShort[brand] || brand.split(/\s+/).map(word => word[0]).join('').slice(0, 3).toUpperCase();
  const accent = accentClasses[hashBrand(brand) % accentClasses.length];

  return (
    <span
      className={`brand-logo ${small ? 'small' : ''} brand-${accent}`}
      title={`${brand} logo`}
      aria-label={`${brand} logo`}
    >
      <span className="brand-logo-mark" aria-hidden="true">{initials}</span>
    </span>
  );
}

export default BrandLogo;
