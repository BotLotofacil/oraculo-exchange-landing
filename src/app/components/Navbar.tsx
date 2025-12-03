// src/app/components/Navbar.tsx

export function Navbar() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <div className="logo-mark">OX</div>
          <div>
            <div className="logo-text-main">Oráculo Exchange</div>
            <div className="logo-text-sub">Trade the future</div>
          </div>
        </div>
        <div className="nav-links">
          <a href="#markets">Markets</a>
          <a href="#how">How it works</a>
          <a href="#security">Security</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-actions">
          <button className="btn btn-ghost">Sign in</button>
          <button className="btn btn-primary">Create account</button>
        </div>
      </nav>
    </header>
  );
}
