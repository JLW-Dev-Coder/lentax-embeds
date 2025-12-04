// v1.0.0 – VA Agency Template Embed
(function () {
  "use strict";

  function injectFont() {
    if (document.getElementById("va-agency-template-font")) return;
    var link = document.createElement("link");
    link.id = "va-agency-template-font";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }

  function injectStyles() {
    if (document.getElementById("va-agency-template-styles")) return;

    var css = `
      body, * {
        font-family: 'Raleway', system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
      }

      /* ==========================================================
         MODERN VIEW TRANSITIONS
         ========================================================== */
      .view-section {
        opacity: 0;
        transform: translateY(18px);
        max-height: 0;
        overflow: hidden;
        transition:
          opacity 0.40s cubic-bezier(0.16, 1, 0.3, 1),
          transform 0.40s cubic-bezier(0.16, 1, 0.3, 1),
          max-height 0.40s ease;
        will-change: opacity, transform, max-height;
      }

      .view-section.is-active {
        opacity: 1;
        transform: translateY(0px);
        max-height: 3500px;
        overflow: visible;
      }

      .view-section.is-inactive {
        opacity: 0;
        transform: translateY(-18px);
        max-height: 0;
      }

      /* ==========================================================
         MODEL TABS (HORIZONTAL)
         ========================================================== */
      .model-tabs {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 10px auto 18px auto;
        padding-bottom: 6px;
        border-bottom: 1px solid #333;
        max-width: 900px;
      }

      .model-tab {
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.5px;
        cursor: pointer;
        padding: 10px 16px;
        color: #d1d5db;
        text-transform: uppercase;
        transition: color .25s ease, border-color .25s ease;
        border-bottom: 3px solid transparent;
      }

      .model-tab.active {
        color: #ffb300;
        border-color: #ffb300;
      }

      /* ==========================================================
         MODEL CONTENT
         ========================================================== */
      #modelTour {
        max-width: 900px;
        margin: 25px auto;
        padding: 0 20px;
        color: #ffffff;
      }

      .model-slide {
        display: none;
        animation: fadeIn .35s ease;
      }
      .model-slide.active { display: block; }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      .model-items { margin: 20px 0; text-align: left; }
      .model-item {
        margin-bottom: 14px;
        font-size: 20px;
        line-height: 1.45;
      }

      .model-title {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .model-subtitle {
        font-size: 18px;
        margin-bottom: 20px;
      }

      .model-next-btn {
        display: inline-block;
        padding: 12px 26px;
        border-radius: 10px;
        background: linear-gradient(135deg, #ffb347,#ff7b00);
        font-size: 17px;
        font-weight: 600;
        color: #111;
        cursor: pointer;
        transition: .2s ease;
        border: none;
      }
      .model-next-btn:hover {
        filter: brightness(1.05);
        transform: translateY(-2px);
      }

      .model-actions {
        margin-top: 24px;
        display: flex;
        justify-content: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      /* ==========================================================
         HERO CIRCLE
         ========================================================== */
      .hero-circle {
        width: 360px;
        height: 360px;
        border-radius: 50%;
        background:#111;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:26px;
        margin: 0 auto;
        cursor:pointer;
        transition:transform .25s ease, box-shadow .25s ease;
      }
      .hero-circle:hover {
        transform: translateY(-6px);
        box-shadow: 0 18px 45px rgba(0,0,0,0.4);
      }

      /* ==========================================================
         CTA BUTTON - item-btn-cta
         ========================================================== */
      .item-btn-cta {
        display: inline-flex;
        align-items:center;
        justify-content:center;
        gap: 6px;
        padding: 10px 22px;
        background: linear-gradient(135deg, #ffb347,#ff7b00);
        color: #111 !important;
        border-radius: 999px;
        font-size: 15px;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        border:none;
        transition: .2s ease;
      }

      .item-btn-cta:hover {
        filter: brightness(1.05);
        transform: translateY(-2px);
      }

      /* ==========================================================
         TEMPLATE MAP (VERTICAL TABS)
         ========================================================== */
      #templateFrame {
        max-width: 1000px;
        margin: 0 auto 20px auto !important;
        padding: 0 20px 20px 20px;
        color: #ffffff;
      }

      .template-layout {
        display: flex;
        gap: 24px;
        align-items: flex-start;
        margin-top: 8px;
      }

      .template-tabs {
        width: 260px;
        min-width: 220px;
        border-right: 1px solid #333;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding-right: 10px;
      }

      .template-tab {
        padding: 8px 10px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        color: #9ca3af;
        text-transform: uppercase;
        transition: background .2s ease, color .2s ease;
        text-align: left !important;
      }

      .template-tab:hover {
        color: #e5e7eb;
      }

      .template-tab.active {
        background: #111827;
        color: #ffb300;
      }

      .template-panels {
        flex: 1;
        min-width: 0;
      }

      .template-panel {
        display: none;
        animation: fadeIn .3s ease;
      }

      .template-panel.active {
        display: block;
      }

      .template-panel h3 {
        font-size: 22px;
        margin-bottom: 8px;
        color: #fff !important;
      }

      .sector-extra {
        opacity: 0;
        transition: opacity 1.2s ease;
        margin-top: 12px;
      }
      .sector-extra.visible { opacity: 1; }

      .sector-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 16px 32px;
      }

      .sector-col {
        flex: 1 1 220px;
        min-width: 220px;
      }

      /* ==========================================================
         MOBILE ADJUSTMENTS
         ========================================================== */
      @media (max-width: 768px) {

        /* Hero section */
        #pathHero {
          padding: 10px 16px;
        }
        #pathHero h1 {
          font-size: 32px !important;
          line-height: 1.15;
        }
        #pathHero h2 {
          font-size: 20px !important;
          line-height: 1.3;
        }
        .hero-circle {
          width: 260px;
          height: 260px;
          padding: 18px;
        }

        /* Model tour typography */
        #modelTour {
          margin: 20px auto;
          padding: 0 16px;
        }
        #modelTour h2 {
          font-size: 26px !important;
          line-height: 1.25;
        }
        #modelTour > p {
          font-size: 15px;
        }

        .model-title {
          font-size: 20px;
        }
        .model-subtitle {
          font-size: 16px;
        }
        .model-item {
          font-size: 16px;
        }

        /* Horizontal model tabs: scrollable on mobile */
        .model-tabs {
          max-width: 100%;
          gap: 10px;
          margin: 10px -16px 16px;
          padding: 0 16px 10px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          justify-content: flex-start;
        }
        .model-tab {
          font-size: 12px;
          padding: 8px 10px;
          white-space: nowrap;
        }

        /* Model actions: stack buttons full-width */
        .model-actions {
          flex-direction: column;
          align-items: stretch;
        }
        .model-actions .item-btn-cta,
        .model-actions .model-next-btn {
          width: 100%;
          justify-content: center;
        }

        /* Template frame layout */
        #templateFrame {
          padding: 0 16px 18px 16px;
        }
        #templateFrame h2 {
          font-size: 26px !important;
          line-height: 1.25;
        }
        #templateFrame > p {
          font-size: 15px;
        }

        .template-layout {
          flex-direction: column;
          gap: 16px;
          align-items: stretch;
        }

        .template-tabs {
          width: 100%;
          min-width: 0;
          border-right: none;
          border-bottom: 1px solid #333;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 6px;
          padding-right: 0;
          padding-bottom: 10px;
        }

        .template-tab {
          flex: 1 1 calc(50% - 6px);
          font-size: 11px;
          text-align: center !important;
        }

        .template-panels {
          width: 100%;
        }

        .template-panel h3 {
          font-size: 20px;
        }

        /* Sector grid: stack columns */
        .sector-grid {
          flex-direction: column;
          gap: 10px;
        }
        .sector-col {
          flex: 1 1 100%;
          min-width: 0;
        }

        /* Global CTA sizing on small screens */
        .item-btn-cta {
          width: 100%;
          justify-content: center;
        }
        .model-next-btn {
          width: 100%;
        }

        .template-bottom-cta {
          text-align: center;
          margin-top: 12px;
        }
        .template-bottom-cta .item-btn-cta {
          max-width: 320px;
        }
      }
    `;

    var style = document.createElement("style");
    style.id = "va-agency-template-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildMarkup(container) {
    var html = `
      <div id="pathHero" class="view-section is-active" style="max-width:1100px;margin:0 auto;text-align:center;padding:10px 20px;color:#fff;">
        <h1 style="font-size:50px;font-weight:800;color:#ffb300;">Your VA Agency Template</h1>
        <h2 style="font-size:26px;font-weight:500;color:#fff;">Here’s exactly what you’re getting when we build your agency.</h2>

        <div class="hero-circle" id="heroBeginTour">
          <img src="https://secure.lentax.co/file/0a0af450c48dd34f78dd5242ebd80d88/73d39410-08f3-4229-9c09-7c557121aa96/SVG_VA+Agency+Setup_1080x1350+%282%29.svg?original=1"
               style="width:100%;height:100%;object-fit:contain;">
        </div>

        <p style="margin-top:16px;color:#d1d5db;">Click to preview every model — or skip straight to the template map.</p>

        <button id="skipToTemplate" class="item-btn-cta" style="margin-top:16px;">Skip To Template →</button>
      </div>

      <div id="modelTour" class="view-section is-inactive">

        <h2 style="font-size:34px;font-weight:800;color:#ffb300;text-align:center;">
          The 5 Models That Build Your VA Agency
        </h2>

        <p style="font-size:18px;color:#d1d5db;text-align:center;margin-bottom:20px;">
          These are the core structures that make your agency scalable.
        </p>

        <div class="model-tabs">
          <div class="model-tab active" data-step="0">Client Journey</div>
          <div class="model-tab" data-step="1">DOMSSS</div>
          <div class="model-tab" data-step="2">Pipeline</div>
          <div class="model-tab" data-step="3">Portal</div>
          <div class="model-tab" data-step="4">Launch</div>
        </div>

        <div class="model-slide active" data-index="0">
          <div class="model-title">MODEL A · CLIENT JOURNEY</div>
          <div class="model-subtitle">Every step a client takes through your agency.</div>

          <div class="model-items">
            <p class="model-item"><strong>Lead Development</strong> — Attraction + trust-building.</p>
            <p class="model-item"><strong>Prospect Engagement</strong> — Conversations that convert.</p>
            <p class="model-item"><strong>Client Experience</strong> — Messaging + delivery.</p>
            <p class="model-item"><strong>Plan Management</strong> — Clean workflows + retainers.</p>
            <p class="model-item"><strong>Lifecycle Outcomes</strong> — Renew, refer, upgrade, exit.</p>
          </div>

          <div class="model-actions">
            <button class="item-btn-cta model-back-btn">← Back to overview</button>
            <button class="model-next-btn" data-next="1">Next: DOMSSS →</button>
          </div>
        </div>

        <div class="model-slide" data-index="1">

          <div class="model-title">MODEL B · DOMSSS</div>
          <div class="model-subtitle">Your internal six-piece engine.</div>

          <div class="model-items">
            <p class="model-item"><strong>Development</strong> — Offers + frameworks.</p>
            <p class="model-item"><strong>Operations</strong> — SOPs + automations.</p>
            <p class="model-item"><strong>Marketing</strong> — Visibility + messaging.</p>
            <p class="model-item"><strong>Sales</strong> — Follow-ups + closes.</p>
            <p class="model-item"><strong>Services</strong> — Delivery system.</p>
            <p class="model-item"><strong>Support</strong> — Customer care.</p>
          </div>

          <div class="model-actions">
            <button class="item-btn-cta model-back-btn">← Back to overview</button>
            <button class="model-next-btn" data-next="2">Next: Pipeline →</button>
          </div>
        </div>

        <div class="model-slide" data-index="2">
          <div class="model-title">MODEL C · PIPELINE</div>
          <div class="model-subtitle">From first touch to client onboarding.</div>

          <div class="model-items">
            <p class="model-item"><strong>Lead Capture</strong> — Discovery.</p>
            <p class="model-item"><strong>Qualification</strong> — Fit filters.</p>
            <p class="model-item"><strong>Discovery</strong> — Clarity questions.</p>
            <p class="model-item"><strong>Offer & Close</strong> — Simple + authoritative.</p>
            <p class="model-item"><strong>Onboarding</strong> — Assets + access.</p>
            <p class="model-item"><strong>Early Wins</strong> — Immediate value.</p>
            <p class="model-item"><strong>Upsell & Referral</strong> — Depth before width.</p>
          </div>

          <div class="model-actions">
            <button class="item-btn-cta model-back-btn">← Back to overview</button>
            <button class="model-next-btn" data-next="3">Next: Portal →</button>
          </div>
        </div>

        <div class="model-slide" data-index="3">

          <div class="model-title">MODEL D · PORTAL</div>
          <div class="model-subtitle">The stages inside your client portal.</div>

          <div class="model-items">
            <p class="model-item"><strong>Explore</strong> — Dashboards + clarity.</p>
            <p class="model-item"><strong>Cart</strong> — Add-ons + upgrades.</p>
            <p class="model-item"><strong>Setup</strong> — Forms + onboarding.</p>
            <p class="model-item"><strong>Support</strong> — Messages + tickets.</p>
            <p class="model-item"><strong>Cancel</strong> — Clean exits.</p>
          </div>

          <div class="model-actions">
            <button class="item-btn-cta model-back-btn">← Back to overview</button>
            <button class="model-next-btn" data-next="4">Next: Launch →</button>
          </div>
        </div>

        <div class="model-slide" data-index="4">

          <div class="model-title">MODEL E · 5-STEP LAUNCH</div>
          <div class="model-subtitle">A clean path to get your agency live.</div>

          <div class="model-items">
            <p class="model-item"><strong>Weigh Anchor</strong> — Positioning.</p>
            <p class="model-item"><strong>Hoist the Sails</strong> — Digital HQ.</p>
            <p class="model-item"><strong>Raise Your Flag</strong> — Outreach system.</p>
            <p class="model-item"><strong>Trim the Weight</strong> — Lean enterprise.</p>
            <p class="model-item"><strong>Steer Ahead</strong> — Conversion + fulfillment.</p>
          </div>

          <div class="model-actions">
            <button class="item-btn-cta model-back-btn">← Back to overview</button>

            <button 
              class="item-btn-cta"
              type="button"
              onclick="window.location.href='https://secure.lentax.co/portal/dashboard/view/156931#VA-Agency-Setup-Checkout-Cart'">
              Go To Cart →
            </button>

            <button 
              class="model-next-btn"
              type="button"
              onclick="window.location.href='https://secure.lentax.co/portal/dashboard/view/156940#Explore-VA-Agency-Setup'">
              Book Your Agency Setup Call →
            </button>
          </div>
        </div>

      </div>

      <div id="templateFrame" class="view-section is-inactive">

        <h2 style="font-size:34px;font-weight:800;color:#ffb300;">VA Agency Template Map</h2>
        <p style="font-size:18px;color:#d1d5db;">A high-level look at the structures your VA agency is built on.</p>

        <div class="template-layout">  
          <div class="template-tabs">
            <div class="template-tab active" data-template-step="0">Business Sectors</div>
            <div class="template-tab" data-template-step="1">Content Categories</div>
            <div class="template-tab" data-template-step="2">Custom Fields</div>
            <div class="template-tab" data-template-step="3">Document Generators</div>
            <div class="template-tab" data-template-step="4">Drip Sequence Template</div>
            <div class="template-tab" data-template-step="5">Email Cannons Templates</div>
            <div class="template-tab" data-template-step="6">Email Marketing Templates</div>
            <div class="template-tab" data-template-step="7">Form Templates</div>
            <div class="template-tab" data-template-step="8">Invoice Items</div>
            <div class="template-tab" data-template-step="9">Portal Page Templates</div>
            <div class="template-tab" data-template-step="10">Proposal Templates</div>
          </div>

          <div class="template-panels">

            <div class="template-panel active" data-template-index="0">
              <h3>Business Sectors</h3>
              <p>This helps map your services by business size.</p>

              <div id="sectorExtra" class="sector-extra">
                <div class="sector-grid">
                  <div class="sector-col">
                    <p><strong>Individual / Solopreneur</strong></p>
                    <p>– Content Updates<br>– Data Entry<br>– Special Projects<br>– Support<br>– Reporting</p>
                  </div>

                  <div class="sector-col">
                    <p><strong>Small Business</strong></p>
                    <p>– Content Updates<br>– Data Entry<br>– Special Projects<br>– Support<br>– Reporting</p>
                  </div>

                  <div class="sector-col">
                    <p><strong>Medium Business</strong></p>
                    <p>– Content Updates<br>– Data Entry<br>– Special Projects<br>– Support<br>– Reporting</p>
                  </div>

                  <div class="sector-col">
                    <p><strong>Large Business</strong></p>
                    <p>– Content Updates<br>– Data Entry<br>– Special Projects<br>– Support<br>– Reporting</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="template-panel" data-template-index="1">
              <h3>Content Categories</h3>
              <p>How your content is structured across CRM, offers, and plans.</p>
            </div>

            <div class="template-panel" data-template-index="2">
              <h3>Custom Fields</h3>
              <p>Naming conventions for CRM, org, project, and staff fields.</p>
            </div>

            <div class="template-panel" data-template-index="3">
              <h3>Document Generators</h3>
              <p>Contracts like W9, packages, payout details, and agreements.</p>
            </div>

            <div class="template-panel" data-template-index="4">
              <h3>Drip Sequence Template</h3>
              <p>Client and VA nurture sequences.</p>
            </div>

            <div class="template-panel" data-template-index="5">
              <h3>Email Cannons Templates</h3>
              <p>Reserved for future one-to-many campaigns.</p>
            </div>

            <div class="template-panel" data-template-index="6">
              <h3>Email Marketing Templates</h3>
              <p>Skill-building and VA career messaging templates.</p>
            </div>

            <div class="template-panel" data-template-index="7">
              <h3>Form Templates</h3>
              <p>Setup, profile, booking, kickoff, and update forms.</p>
            </div>

            <div class="template-panel" data-template-index="8">
              <h3>Invoice Items</h3>
              <p>Plan-based invoice items for clients and VAs.</p>
            </div>

            <div class="template-panel" data-template-index="9">
              <h3>Portal Page Templates</h3>
              <p>Default site pages, office, appointments, tasks, timers.</p>
            </div>

            <div class="template-panel" data-template-index="10">
              <h3>Proposal Templates</h3>
              <p>Starter/Bronze/Silver/Gold proposals based on discovery.</p>
            </div>

          </div>
        </div>

        <div class="template-bottom-cta">
          <button class="item-btn-cta" id="templateBackBtnBottom">← Back to overview</button>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  function wireLogic(root) {
    var pathHero      = root.querySelector("#pathHero");
    var modelTour     = root.querySelector("#modelTour");
    var templateFrame = root.querySelector("#templateFrame");

    var heroBegin       = root.querySelector("#heroBeginTour");
    var skipToTemplate  = root.querySelector("#skipToTemplate");

    var modelTabs     = root.querySelectorAll(".model-tab");
    var modelSlides   = root.querySelectorAll(".model-slide");
    var nextBtns      = root.querySelectorAll("[data-next]");
    var modelBackBtns = root.querySelectorAll(".model-back-btn");

    var templateTabs   = root.querySelectorAll(".template-tab");
    var templatePanels = root.querySelectorAll(".template-panel");

    var templateBackBtnBottom = root.querySelector("#templateBackBtnBottom");

    var sectorExtra = root.querySelector("#sectorExtra");
    var sectorTimeout;

    function setView(target) {
      [pathHero, modelTour, templateFrame].forEach(function (section) {
        if (!section) return;
        section.classList.remove("is-active", "is-inactive");
      });

      target.classList.add("is-active");

      [pathHero, modelTour, templateFrame].forEach(function (section) {
        if (section && section !== target) section.classList.add("is-inactive");
      });
    }

    function showHero()     { setView(pathHero); }
    function showTour()     { setView(modelTour); }
    function showTemplate() { setView(templateFrame); }

    if (heroBegin)      heroBegin.addEventListener("click", showTour);
    if (skipToTemplate) skipToTemplate.addEventListener("click", showTemplate);

    modelBackBtns.forEach(function (btn) { btn.addEventListener("click", showHero); });
    if (templateBackBtnBottom) templateBackBtnBottom.addEventListener("click", showHero);

    function setModelTab(index) {
      modelTabs.forEach(function (t) { t.classList.remove("active"); });
      modelSlides.forEach(function (s) { s.classList.remove("active"); });

      if (modelTabs[index])   modelTabs[index].classList.add("active");
      if (modelSlides[index]) modelSlides[index].classList.add("active");
    }

    modelTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        setModelTab(parseInt(tab.getAttribute("data-step"), 10));
      });
    });

    nextBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setModelTab(parseInt(btn.getAttribute("data-next"), 10));
      });
    });

    function triggerSectorFade() {
      if (!sectorExtra) return;
      sectorExtra.classList.remove("visible");
      clearTimeout(sectorTimeout);
      sectorTimeout = setTimeout(function () {
        sectorExtra.classList.add("visible");
      }, 3000);
    }

    function setTemplateTab(index) {
      templateTabs.forEach(function (t) { t.classList.remove("active"); });
      templatePanels.forEach(function (p) { p.classList.remove("active"); });

      if (templateTabs[index])   templateTabs[index].classList.add("active");
      if (templatePanels[index]) templatePanels[index].classList.add("active");

      if (index === 0) {
        triggerSectorFade();
      } else if (sectorExtra) {
        sectorExtra.classList.remove("visible");
        clearTimeout(sectorTimeout);
      }
    }

    templateTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        setTemplateTab(parseInt(tab.getAttribute("data-templateStep"), 10));
      });
    });

    triggerSectorFade();
  }

  function getContainer() {
    var script = document.currentScript;
    if (script && script.parentNode) {
      var container = document.createElement("div");
      container.id = "vaAgencyTemplateEmbed";
      script.parentNode.insertBefore(container, script);
      return container;
    }

    var existing = document.getElementById("vaAgencyTemplateEmbed");
    if (existing) return existing;

    var fallback = document.createElement("div");
    fallback.id = "vaAgencyTemplateEmbed";
    document.body.appendChild(fallback);
    return fallback;
  }

  function init() {
    injectFont();
    injectStyles();
    var container = getContainer();
    buildMarkup(container);
    wireLogic(container);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
