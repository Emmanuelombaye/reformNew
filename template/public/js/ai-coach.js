(function () {
  var prompts = [
    {
      user: "Log my weekly Tirzepatide dose completed today at 9:00 AM.",
      ai: "Logged. Your weekly Tirzepatide (5mg) dose is on file for your physician's review. Did you experience any nausea or fatigue today?",
    },
    {
      user: "Did I hit my daily protein target today?",
      ai: "Yes. You logged 142g of protein today against a 140g target (101%). Keep hydration consistent through the evening.",
    },
    {
      user: "Generate my quarterly biomarker progress report for my doctor.",
      ai: "Your 90-day summary shows -18.4 lbs total weight reduction and a 1.3% drop in HbA1c. The report is ready for your physician to review before follow-up.",
    },
  ];

  function qs(root, sel) {
    return root.querySelectorAll(sel);
  }

  function initAiCoachPage() {
    var page = document.querySelector(".page-ai-coach");
    if (!page) return;

    qs(page, ".coach-metric-tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-metric");
        qs(page, ".coach-metric-tab").forEach(function (el) {
          el.classList.toggle("active", el === btn);
        });
        qs(page, ".coach-metric-panel").forEach(function (panel) {
          panel.classList.toggle("active", panel.getAttribute("data-panel") === id);
        });
      });
    });

    qs(page, "[data-prompt]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var index = Number(btn.getAttribute("data-prompt"));
        var demo = prompts[index] || prompts[0];
        qs(page, "[data-prompt]").forEach(function (el) {
          el.classList.toggle("active", el === btn);
        });
        var thread = page.querySelector(".coach-chat-thread");
        var userEl = page.querySelector("[data-chat-user]");
        var aiEl = page.querySelector("[data-chat-ai]");
        if (userEl) userEl.textContent = demo.user;
        if (aiEl) aiEl.textContent = demo.ai;
        if (thread) {
          thread.classList.remove("is-animating");
          void thread.offsetWidth;
          thread.classList.add("is-animating");
        }
      });
    });
  }

  window.initAiCoachPage = initAiCoachPage;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAiCoachPage);
  } else {
    initAiCoachPage();
  }
})();
