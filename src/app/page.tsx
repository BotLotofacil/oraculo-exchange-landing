// src/app/page.tsx
"use client";

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div>
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Event contracts — yes/no markets
          </div>
          <h1 className="hero-title">
            Trade the <span>future</span> with simple <span>YES or NO</span> contracts.
          </h1>
          <p className="hero-subtitle">
            Turn your view on inflation, elections, weather, and technology into
            real positions in the market. Each contract can pay up to R$1 if your
            prediction is correct.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary">Get started</button>
            <button className="btn btn-ghost">View live markets</button>
          </div>

          <div className="hero-meta">
            <span>
              <b>Limited risk</b> to the amount you invest per contract.
            </span>
            <span>
              <b>Price = probability</b> that the market assigns to the event.
            </span>
          </div>
        </div>

        {/* Right panel – sample markets */}
        <aside className="hero-panel">
          <div className="hero-panel-header">
            <div className="hero-panel-title">Markets on the move</div>
            <div className="hero-panel-pill">Sample real-time view</div>
          </div>

          <div className="markets-list">
            <div className="market-card">
              <div>
                <div className="market-question">
                  Will Brazil&apos;s official inflation for <b>2026</b> finish above <b>5.0%</b>?
                </div>
                <div className="market-meta">
                  <span>Expires: Jan 15, 2027</span>
                  <span className="badge badge-green">Economy</span>
                </div>
              </div>
              <div className="market-prices">
                <div className="pill pill-yes">YES <span>R$ 0.62</span></div>
                <div className="pill pill-no">NO <span>R$ 0.38</span></div>
              </div>
            </div>

            <div className="market-card">
              <div>
                <div className="market-question">
                  Will the unemployment rate drop below <b>7%</b> by year-end?
                </div>
                <div className="market-meta">
                  <span>Expires: Dec 31, 2026</span>
                  <span className="badge badge-red">Labor</span>
                </div>
              </div>
              <div className="market-prices">
                <div className="pill pill-yes">YES <span>R$ 0.44</span></div>
                <div className="pill pill-no">NO <span>R$ 0.56</span></div>
              </div>
            </div>

            <div className="market-card">
              <div>
                <div className="market-question">
                  Will it rain more than <b>300mm</b> in São Paulo in January?
                </div>
                <div className="market-meta">
                  <span>Expires: Jan 31, 2026</span>
                  <span className="badge badge-green">Weather</span>
                </div>
              </div>
              <div className="market-prices">
                <div className="pill pill-yes">YES <span>R$ 0.29</span></div>
                <div className="pill pill-no">NO <span>R$ 0.71</span></div>
              </div>
            </div>
          </div>

          <div className="panel-footer">
            <span>Prices above are illustrative examples only.</span>
            <a href="#markets">See all markets →</a>
          </div>
        </aside>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">How it works</h2>
            <p className="section-subtitle">
              Instead of betting on games or complex derivatives, you trade around
              simple YES/NO questions. Each contract settles at R$0 or R$1.
            </p>
          </div>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-title">Choose a question</div>
            <div className="step-text">
              Browse the market list and select an event that makes sense to you:
              inflation, politics, weather, technology, sports, and more.
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-title">Buy YES or NO contracts</div>
            <div className="step-text">
              The price (from R$0.01 to R$0.99) reflects the implied probability
              that the market assigns to the event.
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-title">Wait for the outcome</div>
            <div className="step-text">
              If the event happens as you predicted, each contract pays R$1. If it
              does not, the contract is worth R$0.
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MARKETS */}
      <section id="markets" className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Featured market ideas</h2>
            <p className="section-subtitle">
              Replace the examples below with real categories and rulebooks for your future platform.
            </p>
          </div>
          <div>
            <button className="btn btn-ghost" style={{ fontSize: 12 }}>
              View all markets
            </button>
          </div>
        </div>

        <div className="markets-grid">
          <div className="market-card-large">
            <div className="market-category">Economy</div>
            <div className="market-question-lg">
              Will the Brazilian policy rate (Selic) be cut by at least 1.50 p.p. by year-end?
            </div>
            <div className="market-footer">
              <span>Implied probability: 53%</span>
              <span>Closes: Dec 20, 2026</span>
            </div>
          </div>

          <div className="market-card-large">
            <div className="market-category">Politics</div>
            <div className="market-question-lg">
              Will party X win a majority in the next national election?
            </div>
            <div className="market-footer">
              <span>Implied probability: 41%</span>
              <span>Closes: Oct 05, 2026</span>
            </div>
          </div>

          <div className="market-card-large">
            <div className="market-category">Technology</div>
            <div className="market-question-lg">
              Will a major AI company announce an IPO by next year?
            </div>
            <div className="market-footer">
              <span>Implied probability: 37%</span>
              <span>Closes: Dec 31, 2026</span>
            </div>
          </div>

          <div className="market-card-large">
            <div className="market-category">Climate</div>
            <div className="market-question-lg">
              Will next summer's average temperature break historical records?
            </div>
            <div className="market-footer">
              <span>Implied probability: 68%</span>
              <span>Closes: Feb 28, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Security and compliance</h2>
            <p className="section-subtitle">
              Customize this section to align with your regulatory structure and partnerships.
            </p>
          </div>
        </div>

        <div className="security-card">
          <div>
            <div className="security-badge">
              <span />
              Infrastructure inspired by financial-market standards
            </div>
            <h3 style={{ fontSize: 15, margin: "10px 0 6px" }}>
              Designed to protect users, data, and capital.
            </h3>
            <p style={{ fontSize: 13, color: "var(--muted)" }}>
              Explain account protection, data security, custody processes, reconciliation, etc.
            </p>
            <ul className="security-list">
              <li>• Strong authentication and access monitoring.</li>
              <li>• Integration with regulated institutions for custody.</li>
              <li>• Clear risk policies and exposure limits.</li>
              <li>• Transparent rulebooks and third-party verification.</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 10 }}>
              Replace this placeholder with licenses, partnerships, regulatory references, etc.
            </p>
            <button className="btn btn-ghost" style={{ width: "100%" }}>
              View security &amp; compliance policy
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">FAQ — Frequently asked questions</h2>
            <p className="section-subtitle">
              Modify these answers based on your product structure and regulatory needs.
            </p>
          </div>
        </div>

        <div className="faq-grid">
          <div className="faq-item">
            <div className="faq-q">What is an event contract?</div>
            <div className="faq-a">
              An event contract pays R$1 if a specific YES/NO outcome happens; otherwise, R$0.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">How much can I gain or lose?</div>
            <div className="faq-a">
              You can only lose what you pay for each contract. The maximum return is R$1.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">Do I need to be a qualified investor?</div>
            <div className="faq-a">
              Adjust this answer according to whether your platform allows retail or only qualified clients.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">How do you confirm market results?</div>
            <div className="faq-a">
              Settlement should rely on public, transparent sources (IBGE, BCB, TSE, weather agencies, etc.).
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
