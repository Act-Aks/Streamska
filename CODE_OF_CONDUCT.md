<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem;">

<style>
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .policy-header {
    background: linear-gradient(90deg, #ff00ff, #ff7b00, #00a2ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 10s ease infinite;
    background-size: 200% auto;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .policy-card {
    background: linear-gradient(145deg, rgba(26, 28, 44, 0.95), rgba(45, 26, 54, 0.95));
    border-radius: 16px;
    padding: 2rem;
    margin: 2rem 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255,123,0,0.15);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }
  .policy-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,123,0,0.1), transparent);
    transform: rotate(45deg);
    animation: gradientShift 20s linear infinite;
  }

  .policy-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 50px -12px rgba(255, 123, 0, 0.25);
    border-color: rgba(255,123,0,0.3);
  }

  .hover-content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    padding-left: 1rem;
    border-left: 2px solid rgba(255,123,0,0.3);
    margin-top: 1rem;
  }

  .policy-card:hover .hover-content {
    max-height: 500px;
    opacity: 1;
  }

  .more-indicator {
    display: inline-block;
    color: #ff7b00;
    font-size: 0.9em;
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  .policy-card:hover .more-indicator {
    transform: rotate(180deg);
  }
</style>

<div style="background: linear-gradient(145deg, #1a0033, #33001a); padding: 2.5rem; border-radius: 16px; margin-bottom: 2.5rem; border-left: 4px solid #ff7b00;">
  <h1 class="gradient-text" style="font-size: 3rem; margin: 0 0 1.5rem;">
    🏆 Streamska Code of Conduct
  </h1>
  <p style="color: #a0aec0; line-height: 1.6;">
    We're committed to fostering an open and welcoming environment for everyone.
  </p>
</div>

<div class="policy-card">
  <h2 class="gradient-text" style="font-size: 2rem; margin-bottom: 1.5rem;">✨ Our Pledge <span class="more-indicator">▼</span></h2>
  <p style="color: #cbd5e0; line-height: 1.7;">
    We pledge to make participation in our project a harassment-free experience...
  </p>
  <div class="hover-content">
    <p style="color: #a0aec0; font-size: 0.95em;">
      🕵️♂️ <strong>Transparency Note:</strong> All conduct reports are reviewed within 48 hours by at least 2 maintainers. 
      Resolution steps are documented in our <a href="#" style="color: #ff7b00; text-decoration: underline;">public moderation log</a>.
    </p>
  </div>
</div>

<div class="policy-card">
  <h2 class="section-header">🚩 Our Standards <span class="more-indicator">▼</span></h2>
  <p style="color: #cbd5e0;">Examples of positive behavior:</p>
  <div class="hover-content">
    <div style="background: rgba(26,28,44,0.5); padding: 1rem; border-radius: 8px;">
      <p style="color: #a0aec0; margin: 0;">
        🔍 <strong>Enforcement Transparency:</strong> Moderators follow our 
        <a href="#" style="color: #ff7b00; text-decoration: underline;">public moderation guidelines</a> 
        when reviewing incidents.
      </p>
    </div>
  </div>
  <ul style="color: #cbd5e0; padding-left: 1.5rem;">
    <li>Using welcoming language</li>
    <li>Being respectful of differing viewpoints</li>
    <li>Graceful acceptance of constructive criticism</li>
  </ul>
</div>

<div class="policy-card" style="background: linear-gradient(145deg, rgba(45,26,54,0.95), rgba(26,28,44,0.95));
    border-color: rgba(255,123,0,0.3);">
  <h2 class="section-header">⚡ Enforcement <span class="more-indicator">▼</span></h2>
  <p style="color: #cbd5e0;">
    Project maintainers have the right to remove, edit, or reject comments...
  </p>
  <div class="hover-content">
    <div style="background: rgba(45,26,54,0.5); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
      <p style="color: #a0aec0; margin: 0 0 0.5rem;">
        🔒 <strong>Process Transparency:</strong> All enforcement actions are documented in our
        <a href="#" style="color: #ff7b00; text-decoration: underline;">public moderation archive</a> within 72 hours.
      </p>
      <ul style="color: #a0aec0; padding-left: 1.25rem; margin: 0;">
        <li>Appeal process available through independent review panel</li>
        <li>Quarterly transparency reports published</li>
        <li>Anonymous reporting option available</li>
      </ul>
    </div>
  </div>
</div>

<div style="margin-top: 3rem; text-align: center; padding: 1.5rem; background: linear-gradient(145deg, rgba(26,28,44,0.95), rgba(45,26,54,0.95));
    border-left: 4px solid #ff7b00;
    backdrop-filter: blur(4px); border-radius: 8px;">
  <p style="color: #cbd5e0;
      font-size: 1.1rem;">
    📬 Contact maintainers at <span style="color: #ff7b00;">akashsrivastava.git@gmail.com</span> <span class="more-indicator">▼</span>
  </p>
  <div class="hover-content">
    <div style="background: rgba(26,28,44,0.5); padding: 1rem; border-radius: 8px;">
      <p style="color: #a0aec0; margin: 0 0 0.5rem;">
        ⏱️ <strong>Response Transparency:</strong> All reports receive:
        <ul style="padding-left: 1.25rem; margin: 0.5rem 0;">
          <li>Initial response within 24 hours</li>
          <li>Confidentiality guarantee</li>
          <li>Option for anonymous reporting</li>
        </ul>
      </p>
      <p style="color: #a0aec0; margin: 0;">
        🔗 Review our <a href="#" style="color: #ff7b00; text-decoration: underline;">report handling workflow</a>
      </p>
    </div>
  </div>
</div>

</div>
