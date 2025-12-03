// src/app/components/Footer.tsx

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">
        <div>
          © <span>{year}</span> Oráculo Exchange – Event Contracts Platform
        </div>
        <div className="footer-links">
          <a href="#">Terms of use</a>
          <a href="#">Privacy policy</a>
          <a href="#">Risk disclosure</a>
        </div>
      </div>
      <div className="footer-inner">
        <p className="risk-text">
          RISK WARNING: Trading event contracts involves the risk of partial or
          total loss of the capital invested. You should not trade with funds
          you cannot afford to lose. Past performance of markets or strategies
          does not guarantee future results. Nothing on this page constitutes
          legal, tax, or investment advice. Always check the applicable rules
          of the Brazilian regulators and self-regulatory organizations.
        </p>
      </div>
    </footer>
  );
}
