export const metadata = {
  title: 'Size Guide — SPOGMAI',
  description: 'Find your perfect fit. Size guides for T-shirts, trousers, and formal shirts.',
};

const tshirtSizes = [
  { size: 'XS', chest: '32–34"', length: '26"',  shoulder: '15.5"' },
  { size: 'S',  chest: '35–37"', length: '27"',  shoulder: '16.5"' },
  { size: 'M',  chest: '38–40"', length: '28"',  shoulder: '17.5"' },
  { size: 'L',  chest: '41–43"', length: '29"',  shoulder: '18.5"' },
  { size: 'XL', chest: '44–46"', length: '30"',  shoulder: '19.5"' },
  { size: 'XXL',chest: '47–50"', length: '31"',  shoulder: '20.5"' },
];

const pantSizes = [
  { size: 'S',  waist: '28–30"', hip: '34–36"', inseam: '30"' },
  { size: 'M',  waist: '31–33"', hip: '37–39"', inseam: '31"' },
  { size: 'L',  waist: '34–36"', hip: '40–42"', inseam: '32"' },
  { size: 'XL', waist: '37–39"', hip: '43–45"', inseam: '32"' },
  { size: 'XXL',waist: '40–43"', hip: '46–49"', inseam: '33"' },
];

const shirtSizes = [
  { size: 'S',  collar: '14.5"', chest: '36"',  sleeve: '32"' },
  { size: 'M',  collar: '15"',   chest: '39"',  sleeve: '33"' },
  { size: 'L',  collar: '15.5"', chest: '42"',  sleeve: '34"' },
  { size: 'XL', collar: '16"',   chest: '45"',  sleeve: '35"' },
  { size: 'XXL',collar: '17"',   chest: '48"',  sleeve: '36"' },
];

function SizeTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: Record<string, string>[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full font-body text-sm">
        <thead>
          <tr className="border-b border-primaryBlack/10">
            {headers.map((h) => (
              <th key={h} className="text-left py-3 pr-6 text-[10px] tracking-[0.25em] uppercase text-secondaryText font-normal">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-primaryBlack/5 hover:bg-primaryBlack/[0.02] transition-colors">
              {Object.values(row).map((val, j) => (
                <td key={j} className={`py-3.5 pr-6 ${j === 0 ? 'font-medium text-primaryBlack' : 'text-secondaryText'}`}>
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
    <div className="bg-background min-h-screen pt-28 pb-24">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl">

        {/* Header */}
        <div className="mb-14">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-3">Fit & Sizing</p>
          <h1 className="font-heading text-[clamp(50px,7vw,88px)] text-primaryBlack leading-none mb-5">
            Size Guide
          </h1>
          <p className="font-body text-secondaryText text-sm max-w-xl leading-relaxed">
            Use the measurements below as a guide to finding your fit.
            All measurements are approximate sample specifications and may vary by style.
            When in doubt, size up for a more relaxed fit.
          </p>
          <p className="font-body text-xs text-secondaryText/50 mt-3 italic">
            All measurements shown are provisional samples for demonstration purposes only.
          </p>
        </div>

        {/* Measure guide */}
        <div className="bg-white p-8 mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Chest', desc: 'Measure around the fullest part of your chest, keeping the tape horizontal.' },
            { title: 'Waist', desc: 'Measure around your natural waistline, at the narrowest point of your torso.' },
            { title: 'Inseam', desc: 'Measure from the crotch seam to the bottom of the leg along the inner seam.' },
          ].map(({ title, desc }) => (
            <div key={title}>
              <h3 className="font-heading text-lg text-primaryBlack mb-2">{title}</h3>
              <p className="font-body text-xs text-secondaryText leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* T-shirts */}
        <section className="mb-14">
          <div className="border-l-2 border-accent pl-5 mb-6">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-1">01</p>
            <h2 className="font-heading text-3xl text-primaryBlack">T-Shirts</h2>
          </div>
          <SizeTable
            headers={['Size', 'Chest', 'Length', 'Shoulder']}
            rows={tshirtSizes}
          />
        </section>

        {/* Pants */}
        <section className="mb-14">
          <div className="border-l-2 border-accent pl-5 mb-6">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-1">02</p>
            <h2 className="font-heading text-3xl text-primaryBlack">Pants & Trousers</h2>
          </div>
          <SizeTable
            headers={['Size', 'Waist', 'Hip', 'Inseam']}
            rows={pantSizes}
          />
        </section>

        {/* Formal Shirts */}
        <section className="mb-14">
          <div className="border-l-2 border-accent pl-5 mb-6">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-1">03</p>
            <h2 className="font-heading text-3xl text-primaryBlack">Formal Shirts</h2>
          </div>
          <SizeTable
            headers={['Size', 'Collar', 'Chest', 'Sleeve']}
            rows={shirtSizes}
          />
        </section>

        {/* Fit note */}
        <div className="bg-primaryBlack text-white p-8">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Fit Advice</p>
          <p className="font-body text-white/70 text-sm leading-relaxed max-w-xl">
            If you are between sizes, we recommend sizing up for a relaxed fit or sizing down for a slimmer silhouette.
            Product pages include specific fit notes (Slim, Regular, Relaxed) and model measurement references.
          </p>
        </div>
      </div>
    </div>
  );
}
