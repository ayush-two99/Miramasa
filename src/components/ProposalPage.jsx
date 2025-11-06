import React, { useRef } from "react";
import { CheckCircle, Clock, Rocket, Layers, Workflow, Shield, Brain, MessageSquare, Smartphone, Download, Target, Users, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProposalPage() {
  const printRef = useRef(null);

  const handlePrint = () => {
    try {
      const content = printRef.current ? printRef.current.innerHTML : '';
      const win = window.open('', '', 'width=1024,height=768');
      if (!win) return;
      win.document.open();
      win.document.write(`<!doctype html><html><head>${document.head.innerHTML}</head><body>${content}<script>window.onload=function(){setTimeout(function(){window.print(); window.close();}, 300);};<\/script></body></html>`);
      win.document.close();
    } catch (e) {
      // fallback to native print
      window.print();
    }
  };
  const phases = [
    { phase: "Discovery + IA + Wireframes + Approvals", duration: "3 weeks", details: ["Stakeholder workshops", "User flows & information architecture", "Low–medium fidelity wireframes", "Design approvals & sign-off"] },
    { phase: "Planning & Technical Architecture", duration: "2 weeks", details: ["Service boundaries & API contracts", "Data models & security policies", "CI/CD, environments & observability plan"] },
    { phase: "MVP Core Build (Ordering · Menu · Delivery)", duration: "5 weeks", details: ["Toast API wrapper", "Cart/checkout with Apple Pay & Google Pay", "DoorDash Drive & Uber Direct orchestration", "Rotational menu & macros"] },
    { phase: "Loyalty & Subscriptions", duration: "2 weeks", details: ["Points accrual/redeem", "Tiers & benefits", "Weekly subscription bundles"] },
    { phase: "Prescriptive Dish Engine", duration: "2 weeks", details: ["HealthKit & Google Fit sync", "Rules/ML-ready engine", "Explainability: 'Why this dish?'"] },
    { phase: "RAG Chat Support (Web · App · WhatsApp)", duration: "2 weeks", details: ["Vector DB & embeddings", "Knowledge base ingestion", "Omnichannel adapters & guardrails"] },
    { phase: "QA · Security · UAT · Store Approvals", duration: "2 weeks", details: ["Performance targets", "Pen-test remediation", "App Store & Play approvals"] },
  ];

  const modules = [
    { title: "Authentication & Profiles", icon: Users, bullets: ["Google/Apple SSO & Email/Password", "Addresses, saved payments, dietary prefs", "Secure session & token handling"] },
    { title: "Health Integrations", icon: Brain, bullets: ["Apple HealthKit (iOS) & Google Fit (Android)", "Daily sync for steps, sleep, activity", "Privacy-first consent & revocation flows"] },
    { title: "Rotational Menu Engine", icon: Layers, bullets: ["Daily/weekly menus with macros & allergens", "Sourcing transparency", "Add-ons · swaps · portion sizes"] },
    { title: "Ordering & Payments", icon: Rocket, bullets: ["Apple Pay / Google Pay / Cards", "Schedule now/later", "Coupons & taxes"] },
    { title: "Delivery & Fulfilment", icon: Workflow, bullets: ["DoorDash Drive & Uber Direct", "Smart carrier selection", "Real-time tracking & webhooks"] },
    { title: "Loyalty & Subscriptions", icon: Target, bullets: ["Earn/redeem points & tiers", "Weekly plans & bundles", "Expiry & notifications"] },
    { title: "Admin CMS", icon: Shield, bullets: ["Menu & pricing", "Open/Close order toggle", "Metadata tagging for recommendations"] },
    { title: "RAG Support", icon: MessageSquare, bullets: ["Website · App · WhatsApp", "Menu/allergen/FAQ + order support", "Human handoff & analytics"] },
  ];

  const assumptions = [
    "Toast remains the operational backbone; app is a modern UI layer",
    "Design language: clean, wellness-first; WCAG 2.1 AA accessibility",
    "Security: TLS in transit, encrypted at rest; PII/health data minimization",
    "Data retention & privacy policies approved by client legal/compliance",
    "Client provides WhatsApp Business API access for messaging channel",
  ];

  const risks = [
    "3PL delivery SLAs outside our control; we build graceful fallbacks",
    "App store approval timelines can vary; we target early submissions",
    "Health data permissions can reduce sample size; UX educates value",
  ];

  const success = [
    "< 3s load on core screens over 4G",
    "Health sync + recommendation in < 5s",
    "NPS ≥ 60 for ordering experience by month 2",
    "≥ 40% repeat purchase rate by month 3",
    "Support deflection ≥ 50% via RAG chat after month 1",
  ];

  return (
    <div ref={printRef} className="min-h-screen bg-white text-slate-900">
      <style>{`
        @page { margin: 0; }
        @media print {
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\:hidden { display: none !important; }
          .shadow, .shadow-sm, .shadow-md, .shadow-lg, .shadow-xl { box-shadow: none !important; }
          .border { border-color: #ddd !important; }
          section, .rounded-2xl { break-inside: auto; page-break-inside: auto; }
          .page-break-before { break-before: page; page-break-before: always; }
          body { font-size: 12.5px; }
        }
      `}</style>
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 pt-12 pb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Proposal · Miramasa Mobile App</h1>
            <p className="mt-3 text-slate-600 max-w-2xl">Building a modern, personalized food experience that blends Ayurveda-inspired nutrition with delightful product design and robust integrations.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="rounded-2xl px-3 py-1">iOS & Android</Badge>
              <Badge className="rounded-2xl px-3 py-1">Toast API Wrapper</Badge>
              <Badge className="rounded-2xl px-3 py-1">HealthKit · Google Fit</Badge>
              <Badge className="rounded-2xl px-3 py-1">DoorDash · Uber Direct</Badge>
              <Badge className="rounded-2xl px-3 py-1">Loyalty · Subscriptions</Badge>
              <Badge className="rounded-2xl px-3 py-1">RAG Chat (Web/App/WhatsApp)</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-3 shrink-0 print:hidden">
            <Button onClick={handlePrint} className="rounded-2xl h-11 px-5">Download PDF <Download className="ml-2 h-4 w-4"/></Button>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Executive Summary</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 text-sm space-y-3">
            <p>Miramasa is a premium, wellness-first fast-fine brand. This proposal details a high-performance mobile platform (iOS & Android) that wraps Toast APIs with a modern experience, adds a data-driven Prescriptive Dish Engine powered by Apple HealthKit/Google Fit, orchestrates delivery via DoorDash Drive and Uber Direct, and grows retention through Loyalty and Subscriptions. It also includes a RAG-based chat across Website, App, and WhatsApp to deflect support and increase conversion.</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium">Vision</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Ancient wisdom × modern intelligence for everyday meals</li>
                  <li>Frictionless ordering with personalization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Outcomes</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Higher repeat purchase via loyalty & subscriptions</li>
                  <li>Operational efficiency with 3PL orchestration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Differentiators</h4>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Health‑aware recommendations with clear rationale</li>
                  <li>Omnichannel RAG chat with human handoff</li>
                </ul>
              </div>
            </div>



          </CardContent>
        </Card>
      </section>

      {/* Goals */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="text-xl">Project Understanding</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>App is a refined customer-facing layer; Toast remains the operational backbone.</li>
                <li>Menu is rotational/seasonal with macros, sourcing, allergens, and add‑ons.</li>
                <li>Personalization leverages daily health signals to recommend dishes.</li>
                <li>Delivery via DoorDash Drive/Uber Direct with smart selection logic.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="text-xl">Business Goals</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>Increase D2C sales and loyalty through native apps.</li>
                <li>Differentiation via prescriptive recommendations and transparency.</li>
                <li>Efficient menu operations; lower support via automated chat.</li>
                <li>Unlock subscriptions and corporate catering growth.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Acceptance & Deliverables */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="text-xl">Deliverables</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>UX artifacts: user flows, IA, wireframes; approved UI kit</li>
                <li>Mobile apps (iOS & Android) with Toast wrapper, 3PL, payments</li>
                <li>Backend APIs, Admin CMS, Recommendation engine</li>
                <li>RAG chat (Website, App, WhatsApp) with analytics & guardrails</li>
                <li>Observability stack, runbooks, release documentation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="text-xl">Expected Experience + Performance Benchmarks</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>Core screens load &lt; 3s on 4G; checkout success ≥ 99.5%</li>
                <li>Health sync & recommendations update in &lt; 5s</li>
                <li>Loyalty earn/redeem flows complete without manual intervention</li>
                <li>RAG chat resolves top‑20 FAQs with deflection ≥ 50%</li>
                <li>App Store/Play approvals achieved; zero P0/P1 defects at go‑live</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Out of Scope & Change */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="text-xl">Out of Scope (initial)</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>Kitchen operations tooling beyond Toast</li>
                <li>Custom fleet logistics</li>
                <li>Nutrition medical advice beyond general wellness copy</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="text-xl">Change Control</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>All changes via weekly steering + CR log</li>
                <li>Impact triage across scope, timeline, and cost</li>
                <li>Versioned BRD/requirements in shared repo</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="text-xl">Security & Privacy</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>TLS 1.2+ in transit, encryption at rest</li>
                <li>Least‑privilege access; secrets rotation</li>
                <li>Health data minimization; explicit consent</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="text-xl">Performance & QA</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>Automated tests (unit, API, UI smoke)</li>
                <li>Load tests for peak hours; target p95 &lt; 1.2s API</li>
                <li>Blue/green releases with feature flags</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle className="text-xl">Analytics & Observability</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>Events: search, add‑to‑cart, checkout, repeat rate</li>
                <li>Dashboards for funnel, cohorts, and LTV</li>
                <li>Alerting for failures & SLA breaches</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* UAT & Launch */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <Card className="rounded-2xl">
          <CardHeader><CardTitle className="text-2xl">UAT, Launch & Hypercare</CardTitle></CardHeader>
          <CardContent className="text-slate-700 text-sm space-y-3">
            <ul className="list-disc ml-5 space-y-1">
              <li>UAT scripts mapped to acceptance criteria; daily triage</li>
              <li>App Store/Play submissions with privacy manifests</li>
              <li>Hypercare: 2 weeks focused support post‑go‑live</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      

            {/* Two Routes */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Route A · Full Build (One Go)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700">
              <p>Deliver the entire functional scope end‑to‑end as per BRD.</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Best for: Clear scope and strong time‑to‑market push.</li>
                <li>Outcome: Complete product parity + differentiation on launch.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Route B · Lean MVP → Iterative Rollout</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700">
              <p>Launch core ordering (Toast), menu, delivery & loyalty first → add prescriptive engine and advanced modules post‑launch.</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Best for: Rapid validation with real users and agile iteration.</li>
                <li>Outcome: Faster go‑live, data‑informed improvements.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Scope Modules */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Scope of Work</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">High‑performance mobile platform on top of Toast APIs, enabling personalization, loyalty revenue, and scalable growth.</p>
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {modules.map((m) => (
            <Card key={m.title} className="rounded-2xl h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <m.icon className="h-5 w-5"/>
                  <CardTitle className="text-base">{m.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                  {m.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* RAG Section */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2"><MessageSquare className="h-5 w-5"/> RAG‑Based Support (Website · App · WhatsApp)</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 text-sm">
            
            <p className="mb-3">A Retrieval‑Augmented Generation layer that answers menu, allergen, macros, sourcing, and order‑status FAQs. Includes analytics, safety guardrails, and human escalation.</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium">What it does</h4>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Instant nutritionist experience</li>
                  <li>Contextual responses from your menus & policies</li>
                  <li>Channel‑consistent answers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">How it works</h4>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Vector DB + embeddings</li>
                  <li>Regular knowledge base sync</li>
                  <li>Role & tone guardrails</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Benefits</h4>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>≥50% support deflection</li>
                  <li>Faster conversion at decision points</li>
                  <li>Reduced wait times</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Delivery Timeline</h2>
        <p className="mt-2 text-slate-600">Full build: <span className="font-medium">~14 weeks</span> · MVP path: <span className="font-medium">~10 weeks</span> to launch + <span className="font-medium">~5 weeks</span> for the remaining features.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {phases.map((p, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2"><Clock className="h-4 w-4"/> {p.phase}</CardTitle>
                  <Badge variant="secondary" className="rounded-full">{p.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                  {p.details.map((d, i) => (<li key={i}>{d}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Governance */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid md:grid-cols-3 gap-5">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Team & Governance</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                <li>Engagement Lead / PM (weekly steering)</li>
                <li>Solution Architect (reviews & sign‑offs)</li>
                <li>Mobile Engineers (RN/Flutter + native bridges)</li>
                <li>Backend Engineers (APIs, 3PL, RAG)
                </li>
                <li>Design (UX/UI, motion), QA, DevOps</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Assumptions</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                {assumptions.map((a, i) => (<li key={i}>{a}</li>))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Risks & Mitigation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-disc ml-5 space-y-1">
                {risks.map((r, i) => (<li key={i}>{r}</li>))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Criteria */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2"><CheckCircle className="h-5 w-5"/> Success Metrics</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-700">
            <ul className="grid md:grid-cols-2 gap-x-10 list-disc ml-5">
              {success.map((s, i) => (
                <li key={i} className="py-1">{s}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Engagement & Commercials */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <Card className="rounded-2xl">
          <CardHeader><CardTitle className="text-2xl">Engagement Model & Commercials</CardTitle></CardHeader>
          <CardContent className="text-slate-700 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium">Team Composition</h4>
                <ul className="list-disc ml-5 space-y-1 mt-1">
                  <li>PM/Engagement Lead, Solution Architect</li>
                  <li>2–3 Mobile Engineers, 2 Backend Engineers</li>
                  <li>Design, QA, DevOps</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Commercial Options</h4>
                <ul className="list-disc ml-5 space-y-1 mt-1">
                  <li>MVP (10 weeks) — Fixed bid / Milestone based</li>
                  <li>Full Build (14 weeks) — Fixed bid / Milestone based</li>
                  <li>Retainer for enhancements & growth experiments</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card className="rounded-2xl border border-slate-200">
    <CardHeader className="pb-2">
      <CardTitle className="text-base font-semibold">MVP Build</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-slate-700 space-y-1">
      <div className="text-2xl font-bold">USD 35,000</div>
      <div className="text-xs text-slate-500">10 weeks</div>
    </CardContent>
  </Card>
  <Card className="rounded-2xl border border-slate-200">
    <CardHeader className="pb-2">
      <CardTitle className="text-base font-semibold">Full Build</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-slate-700 space-y-1">
      <div className="text-2xl font-bold">USD 42,000</div>
      <div className="text-xs text-slate-500">14 weeks</div>
    </CardContent>
  </Card>
</div>
<div className="border-t pt-3 mt-4 text-xs text-slate-500 italic">Implementation is delivered milestone-by-milestone with transparent demos, so you always see working product every 2 weeks.</div>
          </CardContent>
        </Card>
      </section>

      {/* Next Steps */}
      <section className="mx-auto max-w-6xl px-6 pt-6 pb-16">
        <Card className="rounded-2xl bg-slate-50">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2"><Rocket className="h-5 w-5"/> Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-700">
            <ol className="list-decimal ml-5 space-y-2">
              <li>Confirm **Route A** (Full Build) or **Route B** (MVP → Rollout).</li>
              <li>Freeze feature list & acceptance criteria; align on scope control.</li>
              <li>Approve brand kit & wireframes; green‑light engineering.</li>
              <li>Kickoff sprint 0 and environment setup.</li>
            </ol>
            
          </CardContent>
        </Card>
      </section>

      

      {/* Why Two99 */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Why Two99</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium">Product + Engineering Depth</h4>
                <ul className="list-disc ml-5 space-y-1 mt-1">
                  <li>Native & cross‑platform apps with robust backends</li>
                  <li>Toast, HealthKit/Google Fit, DoorDash/Uber Direct expertise</li>
                  <li>Data platforms, observability, and performance first</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">AI & RAG Done Right</h4>
                <ul className="list-disc ml-5 space-y-1 mt-1">
                  <li>Retrieval‑augmented chat with guardrails & analytics</li>
                  <li>Searchable knowledge bases, embeddings, and evals</li>
                  <li>Human‑in‑the‑loop workflows where it matters</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Delivery Discipline</h4>
                <ul className="list-disc ml-5 space-y-1 mt-1">
                  <li>Milestone‑based execution with 2‑week demos</li>
                  <li>Security by design (privacy, consent, encryption)</li>
                  <li>App Store & Play compliance experience</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-xs text-slate-500">We have delivered complex technology projects for startups and multiple MNCs across retail, logistics, and fintech.</div>
          </CardContent>
        </Card>
      </section>

      {/* Two99 Signature */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Proposal by Two99</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-700">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-base font-medium">Two99 · Product Engineering & AI</div>
                <a href="mailto:hello@two99.org" className="text-slate-500 text-xs hover:text-slate-700 hover:underline">hello@two99.org</a>
              </div>
              <div className="text-xs text-slate-500">© {new Date().getFullYear()} Two99. All rights reserved.</div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Globe className="h-4 w-4"/> Built to industry standards · Privacy by design</div>
          
        </div>
      </footer>
    </div>
  );
}

