export const metadata = {
  title: 'Size Guide & Dimensions — SPOGMAI',
  description: 'Proportional size guides and garment dimensions for SPOGMAI T-shirts, trousers, and tailored shirts.',
};

const tshirtSizes = [
  { size: 'XS', chest: '36"', length: '27"', shoulder: '18"' },
  { size: 'S',  chest: '38"', length: '28"', shoulder: '18.5"' },
  { size: 'M',  chest: '40"', length: '29"', shoulder: '19"' },
  { size: 'L',  chest: '42"', length: '30"', shoulder: '19.5"' },
  { size: 'XL', chest: '44"', length: '31"', shoulder: '20"' },
  { size: 'XXL',chest: '46"', length: '32"', shoulder: '20.5"' },
];

const pantSizes = [
  { size: '28', waist: '28–29"', hip: '37"', inseam: '31"' },
  { size: '30', waist: '30–31"', hip: '39"', inseam: '31.5"' },
  { size: '32', waist: '32–33"', hip: '41"', inseam: '32"' },
  { size: '34', waist: '34–35"', hip: '43"', inseam: '32.5"' },
  { size: '36', waist: '36–37"', hip: '45"', inseam: '33"' },
];

const shirtSizes = [
  { size: 'S',  collar: '15.0"', chest: '38"', sleeve: '33.5"' },
  { size: 'M',  collar: '15.5"', chest: '40"', sleeve: '34.0"' },
  { size: 'L',  collar: '16.0"', chest: '42"', sleeve: '34.5"' },
  { size: 'XL', collar: '16.5"', chest: '44"', sleeve: '35.0"' },
  { size: 'XXL',collar: '17.0"', chest: '46"', sleeve: '35.5"' },
];

function SizeTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: Record<string, string>[];
}) {
  return (
    <div className="overflow-x-auto border border-outline-variant/30 bg-surface-container-low">
      <table className="w-full font-body-sm text-body-sm text-left">
        <thead>
          <tr className="border-b border-outline-variant/30 bg-surface-container">
            {headers.map((h) => (
              <th
                key={h}
                className="py-space-sm px-space-md font-label-caps-sm text-label-caps-sm uppercase tracking-widest text-tertiary font-medium"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-outline-variant/15 hover:bg-surface-container transition-colors"
            >
              {Object.values(row).map((val, j) => (
                <td
                  key={j}
                  className={`py-space-sm px-space-md ${
                    j === 0 ? 'font-medium text-on-surface' : 'text-on-surface-variant font-light'
                  }`}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SizeGuidePage() {
  return (
    <div className="bg-surface min-h-screen text-on-surface flex flex-col">
      {/* ── Page Header ────────────────────────────────────── */}
      <section className="w-full bg-primary-container border-b border-outline-variant/20 pt-36 pb-16 px-margin md:px-margin-desktop">
        <div className="max-w-4xl space-y-space-xs">
          <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block">
            FIT &amp; PROPORTIONS
          </span>
          <h1 className="font-display-hero text-headline-lg md:text-[68px] md:leading-[76px] text-primary-fixed font-normal tracking-tight">
            Size &amp; Dimensions
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-xl pt-1">
            All garments are engineered with relaxed architectural proportions. Use the illustrative specifications below to determine your silhouette preference.
          </p>
          <p className="font-caption text-caption text-tertiary/70 uppercase tracking-wider pt-2">
            NOTICE: SPECIFICATIONS SHOWN ARE PROVISIONAL SAMPLE MEASUREMENTS FOR DEMONSTRATION PURPOSES.
          </p>
        </div>
      </section>

      {/* ── Measurement Guidelines Cards ───────────────────── */}
      <section className="w-full px-margin md:px-margin-desktop py-space-xl">
        <div className="max-w-5xl mx-auto space-y-space-2xl">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
            <div className="bg-surface-container-low border border-outline-variant/20 p-space-lg space-y-space-xs">
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-wider block">
                01 • CHEST MEASUREMENT
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                Chest &amp; Torso
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Measure around the fullest part of your chest, keeping the tape horizontal under the arms and across the shoulder blades.
              </p>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/20 p-space-lg space-y-space-xs">
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-wider block">
                02 • WAIST &amp; RISE
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                Natural Waistline
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Measure around your natural waist where trousers comfortably sit, maintaining a finger’s width of ease.
              </p>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/20 p-space-lg space-y-space-xs">
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-wider block">
                03 • INSEAM &amp; HEM
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                Inside Leg
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Measure from the lowest point of the crotch seam straight down the inside leg to the bottom hem opening.
              </p>
            </div>
          </div>

          {/* ── Table 1: T-Shirts ────────────────────────────── */}
          <div className="space-y-space-sm">
            <div className="border-b border-outline-variant/20 pb-space-xs flex justify-between items-baseline">
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                T-Shirts &amp; Drop-Shoulder Basics (Inches)
              </h2>
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                BOX FIT SILHOUETTE
              </span>
            </div>
            <SizeTable
              headers={['SIZE', 'CHEST CIRCUMFERENCE', 'BODY LENGTH', 'SHOULDER WIDTH']}
              rows={tshirtSizes}
            />
          </div>

          {/* ── Table 2: Pants ───────────────────────────────── */}
          <div className="space-y-space-sm">
            <div className="border-b border-outline-variant/20 pb-space-xs flex justify-between items-baseline">
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                Contemporary Trousers (Inches)
              </h2>
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                RELAXED PLEATED SILHOUETTE
              </span>
            </div>
            <SizeTable
              headers={['WAIST SIZE', 'WAISTBAND', 'HIP MEASUREMENT', 'STANDARD INSEAM']}
              rows={pantSizes}
            />
          </div>

          {/* ── Table 3: Shirts ──────────────────────────────── */}
          <div className="space-y-space-sm">
            <div className="border-b border-outline-variant/20 pb-space-xs flex justify-between items-baseline">
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                Tailored &amp; Casual Shirts (Inches)
              </h2>
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                ARCHITECTURAL SPREAD COLLAR
              </span>
            </div>
            <SizeTable
              headers={['SIZE', 'COLLAR CIRCUMFERENCE', 'CHEST CIRCUMFERENCE', 'SLEEVE LENGTH']}
              rows={shirtSizes}
            />
          </div>

        </div>
      </section>
    </div>
  );
}
