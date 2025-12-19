(function () {
  const VERSION = "v1.0.1";
  const BASE = `${location.origin}/${VERSION}`;

  function ensureCss() {
    const id = "va-starter-track-css";
    if (document.getElementById(id)) return;

    const link = document.createElement("link");
    link.href = `${BASE}/va-starter-track.css`;
    link.id = id;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  function render() {
    const nodes = document.querySelectorAll("[data-lx-embed='va-starter-track']");
    nodes.forEach((node) => {
      if (node.dataset.lxMounted === "1") return;
      node.dataset.lxMounted = "1";

      node.innerHTML = `
        <div class="lx-st-wrap text-default">
          <div class="lx-st-hero">
            <div class="lx-st-title voyage-progress">VA Starter Track</div>
            <div class="lx-st-subtitle">Structured onboarding + verified opportunities + clean delivery.</div>
          </div>
        </div>
      `;
    });
  }

  function boot() {
    ensureCss();
    render();

    const obs = new MutationObserver(render);
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
