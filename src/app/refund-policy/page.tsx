import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund policy for Res Logistics PTE Ltd services including TSR, vessel lease, tanker lease, and endorsement payments.",
};

const refundItems = [
  "TSR payment will be refunded if the supply/seller dose not deliver the product into our storage tank,",
  "Vessel lease payment or Tanker payment will be refunded if the seller or supplier failed to deliver the product to the vessel,",
  "Payment made for any endorsements will be refunded in the event of end Seller/Supplier not performing.",
];

const terms = [
  "Refunds must be made within 72 hours, after client request",
  "The refund must be to the same account name that made the initial payment.",
  "Client must provide any proof of ID such as drivers license or passport that corresponds with the name of the account that made the initial payment,",
  "All payments made through cryptocurrency /USDT will be returned 100%",
  "All the payments made through bank wire transfer will be returned excluding 5% tax and 2% bank invoice",
];

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund Policy"
        description="Review this policy carefully before engaging in any of our services."
        image="/img/refund-policy.jpg"
        centered
      />

      <section className="bg-navy-950 py-24">
        <div className="section-pad container-regis mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-steel-light md:text-lg">
              Our refund policy is designed to protect both our clients and our company, ensuring
              that all service agreements are honored fairly. such as our TSA/TSR/Vessel Lease
              /CPA/Tanker Lease/Endorsement
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <ol className="space-y-5">
              {refundItems.map((item, i) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-navy-900/40 p-6 text-sm leading-relaxed text-steel-light md:text-base"
                >
                  <span className="font-display font-semibold text-cyan">{i + 1})</span> {item}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.12} className="mt-12">
            <p className="text-base leading-relaxed text-steel-light md:text-lg">
              All refund are under the below terms and conditions.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-8">
            <ul className="space-y-4">
              {terms.map((term, i) => (
                <li
                  key={term}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-navy-900/40 p-5 text-sm leading-relaxed text-steel-light md:text-base"
                >
                  <span className="shrink-0 font-display font-semibold text-cyan">
                    {String.fromCharCode(97 + i)})
                  </span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
