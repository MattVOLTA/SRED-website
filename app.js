const categories = [
  { id: "inventory", label: "Inventory", color: "#6C5CFE" },
  { id: "setup", label: "Setup", color: "#05D4E8" },
  { id: "testing", label: "Testing", color: "#FF7C64" },
  { id: "reporting", label: "Reporting", color: "#FF9345" },
  { id: "claim", label: "Claim", color: "#FFBB0E" }
];

const days = [
  {
    day: 1,
    title: "CEO kickoff and operating owners",
    categoryIds: ["setup", "inventory"],
    owner: "CEO",
    outcome: "The claim workspace has a named owner, defined period, approval roles, and first operating decisions.",
    deliverables: ["company-profile.md", "claim-period.md", "policy-change-log.md", "filing-deadlines.md", "human-approval-log.md"],
    tasks: [
      ["setup", "Name the CEO, CTO, finance, privacy, and advisor owners.", "CEO"],
      ["setup", "Confirm the fiscal period and target 14 day implementation goal.", "CEO"],
      ["setup", "Review the current policy baseline and source refresh rule.", "Claim Steward"],
      ["inventory", "List the core repositories, issue trackers, docs, eval tools, payroll, and accounting systems.", "Operations"],
      ["setup", "Record approval gates for technical facts, finance, privacy, advisor handoff, and final company signoff.", "CEO"]
    ]
  },
  {
    day: 2,
    title: "Source inventory and access decisions",
    categoryIds: ["inventory", "setup"],
    owner: "Operations",
    outcome: "The team knows which systems matter and what access is required for daily and weekly scans.",
    deliverables: ["artifact-access-map.md", "connection-register.md", "connection-issues.md"],
    tasks: [
      ["inventory", "Map each artifact type to its system of record.", "Operations"],
      ["setup", "Set least-privilege read scopes for engineering, finance, HR, and legal sources.", "Security"],
      ["setup", "Open source access requests for Git, issue tracker, docs, Slack, eval, CI, observability, cloud, accounting, and payroll.", "Operations"],
      ["inventory", "Mark sources that are unavailable, sensitive, or advisor-only.", "Operations"]
    ]
  },
  {
    day: 3,
    title: "Engineering and product setup",
    categoryIds: ["setup"],
    owner: "CTO",
    outcome: "The priority technical systems are connected or have visible blockers.",
    deliverables: ["connection-register.md", "daily-scan-config.md"],
    tasks: [
      ["setup", "Connect Git provider with read access to relevant repositories.", "CTO"],
      ["setup", "Connect issue tracker with access to engineering projects, labels, status history, and linked PRs.", "Product"],
      ["setup", "Connect technical docs workspace with selected folders only.", "Operations"],
      ["setup", "Define daily scan scope for commits, PRs, tickets, spikes, docs, and decisions.", "Claim Steward"]
    ]
  },
  {
    day: 4,
    title: "AI, testing, and runtime setup",
    categoryIds: ["setup", "testing"],
    owner: "AI Lead",
    outcome: "AI eval, CI, deployment, and observability signals can feed the evidence workspace.",
    deliverables: ["connection-register.md", "ai-eval-register.md", "daily-scan-config.md"],
    tasks: [
      ["setup", "Connect eval platform or define manual export path for eval runs and traces.", "AI Lead"],
      ["setup", "Connect CI/CD with read access to runs, artifacts, test reports, and deployments.", "Engineering"],
      ["setup", "Connect observability with read access to metrics, traces, incidents, and performance data.", "Engineering"],
      ["setup", "Record the activation reason and approver before any daily source is enabled.", "Claim Steward"],
      ["testing", "Identify model, prompt, dataset, metric, latency, reliability, and failure fields to capture.", "AI Lead"]
    ]
  },
  {
    day: 5,
    title: "First automated daily scan",
    categoryIds: ["testing", "inventory"],
    owner: "Claim Steward",
    outcome: "The system proves it can find candidate evidence and produce a concise scan log.",
    deliverables: ["daily-scan-log.md", "evidence-index.md", "experiment-ledger.md"],
    tasks: [
      ["testing", "Run the first daily scan across connected technical systems.", "Claim Steward"],
      ["inventory", "Create draft evidence cards for the most relevant findings.", "Evidence Collector"],
      ["testing", "Flag possible experiments and AI evals for CTO review.", "Experiment Agent"],
      ["testing", "Record scan misses, noisy results, and connection defects.", "Claim Steward"]
    ]
  },
  {
    day: 6,
    title: "Founder and CTO intake",
    categoryIds: ["inventory", "claim", "reporting"],
    owner: "CEO",
    outcome: "The first plain-language technical story is captured while weak and routine areas are visible.",
    deliverables: ["monthly-review-log.md", "solution-workstream-inventory.md", "commercial-context-register.md", "customer-evidence-permissions.md", "project-register.md", "uncertainty-register.md"],
    tasks: [
      ["inventory", "Run the founder and CTO interview on hard technical work, failures, attempts, and learnings.", "Founder Interview Agent"],
      ["inventory", "Capture products, pilots, customer implementations, internal tools, and infrastructure workstreams before project mapping.", "Commercial Context Agent"],
      ["inventory", "Record revenue context, customer-funded work, and customer evidence restrictions for finance and privacy review.", "Commercial Context Agent"],
      ["claim", "List candidate SR&ED areas and likely routine exclusions.", "CTO"],
      ["claim", "Capture source evidence named during the interview.", "Evidence Collector"],
      ["reporting", "Add open questions for engineers, finance, privacy, and advisor review.", "Claim Steward"]
    ]
  },
  {
    day: 7,
    title: "Project map and uncertainty review",
    categoryIds: ["claim", "reporting"],
    owner: "CTO",
    outcome: "Candidate projects are separated from product initiatives and each has a stated technical unknown.",
    deliverables: ["project-register.md", "uncertainty-register.md", "pre-claim-approval-register.md", "claim-readiness-scorecard.md"],
    tasks: [
      ["claim", "Map business initiatives to candidate SR&ED projects.", "Project Mapper"],
      ["claim", "State each technical uncertainty in plain language.", "CTO"],
      ["claim", "Check whether optional pre-claim approval should be considered for planned work.", "Claim Steward"],
      ["claim", "Mark routine implementation, support, sales, UI, and production work for exclusion.", "CTO"],
      ["reporting", "Update the readiness scorecard with first technical signal ratings.", "Claim Steward"]
    ]
  },
  {
    day: 8,
    title: "People, payroll, and contractor mapping",
    categoryIds: ["setup", "claim"],
    owner: "Finance",
    outcome: "People and contractor records are mapped to projects for human review.",
    deliverables: ["time-and-effort-ledger.md", "contractor-register.md", "finance-evidence-ledger.md"],
    tasks: [
      ["setup", "Connect or define export path for payroll and HR roster.", "Finance"],
      ["setup", "Connect or define export path for contractor agreements, SOWs, invoices, and proof of payment.", "Finance"],
      ["claim", "Propose first people-to-project effort allocations.", "Time Agent"],
      ["claim", "Flag work location, contractor control, and IP questions for advisor review.", "Finance"]
    ]
  },
  {
    day: 9,
    title: "Cloud, grants, and asset mapping",
    categoryIds: ["setup", "claim"],
    owner: "Finance",
    outcome: "High-risk financial sources have a clear evidence path and specialist question list.",
    deliverables: ["cloud-and-compute-register.md", "grants-and-assistance.md", "capital-equipment-register.md", "expenditure-summary.md"],
    tasks: [
      ["setup", "Connect or define export path for cloud, GPU, vector DB, and model API usage.", "Engineering"],
      ["claim", "Separate experimental usage from production hosting, demos, and customer inference.", "Engineering"],
      ["claim", "List grants, IRAP, cloud credits, customer funding, and other assistance.", "Finance"],
      ["claim", "List hardware, equipment leases, acquisition dates, and usage evidence.", "Finance"],
      ["claim", "Flag capital, lease, SUE, taxable-capital, average-revenue, and ECPC/CCPC questions for advisor review.", "Finance"]
    ]
  },
  {
    day: 10,
    title: "Evidence quality and privacy rules",
    categoryIds: ["testing", "setup", "reporting"],
    owner: "Security",
    outcome: "The team has rules for what can be shared, redacted, summarized, restricted, or blocked.",
    deliverables: ["sample-evidence-packet.md", "privacy-redaction-log.md", "evidence-index.md", "reviewer-questions.md"],
    tasks: [
      ["testing", "Review sample evidence cards for source links, dates, owners, and supported facts.", "CTO"],
      ["testing", "Assemble a sample evidence packet with representative PRs, tickets, evals, incidents, routine work, privacy examples, and finance samples.", "Claim Steward"],
      ["setup", "Classify sensitive evidence categories and export decisions.", "Security"],
      ["testing", "Run a privacy review on sample eval logs, traces, prompts, and customer examples.", "Security"],
      ["setup", "Complete the setup exit gate before any daily or weekly scan is enabled.", "Claim Steward"],
      ["reporting", "Create advisor questions for sensitive, weak, or ambiguous evidence.", "Claim Steward"]
    ]
  },
  {
    day: 11,
    title: "Daily scan validation",
    categoryIds: ["testing", "reporting"],
    owner: "Claim Steward",
    outcome: "The daily scan reliably updates the right workspace files and avoids obvious noise.",
    deliverables: ["daily-scan-log.md", "evidence-index.md", "connection-issues.md"],
    tasks: [
      ["testing", "Run the daily scan again after access and privacy changes.", "Claim Steward"],
      ["testing", "Compare scan output against known PRs, tickets, evals, and logs.", "CTO"],
      ["reporting", "Confirm daily output format is short enough for CEO and CTO review.", "Claim Steward"],
      ["testing", "Record false positives, missed sources, and next automation fixes.", "Claim Steward"]
    ]
  },
  {
    day: 12,
    title: "Weekly report test",
    categoryIds: ["reporting", "claim"],
    owner: "CTO",
    outcome: "The weekly review turns scan output into accepted, excluded, or unresolved claim evidence.",
    deliverables: ["weekly-review-log.md", "claim-readiness-scorecard.md", "human-approval-log.md"],
    tasks: [
      ["reporting", "Generate the first weekly review from daily scan findings.", "Reporting Agent"],
      ["claim", "CTO accepts real technical signals and rejects routine work.", "CTO"],
      ["claim", "Approve or correct experiment conclusions.", "CTO"],
      ["reporting", "Update readiness ratings, evidence gaps, finance gaps, and next actions.", "Claim Steward"]
    ]
  },
  {
    day: 13,
    title: "Monthly readiness dry run",
    categoryIds: ["reporting", "testing"],
    owner: "CEO",
    outcome: "The CEO, CTO, and finance lead can review status, gaps, and next actions in one meeting.",
    deliverables: ["monthly-review-log.md", "claim-readiness-scorecard.md", "reviewer-questions.md"],
    tasks: [
      ["reporting", "Generate a monthly readiness report from the current workspace.", "Reporting Agent"],
      ["testing", "Review project readiness, evidence gaps, finance gaps, privacy issues, and advisor questions.", "CEO"],
      ["reporting", "Confirm the report supports decisions without requiring the CEO to read every evidence card.", "CEO"],
      ["testing", "Log changes needed before the next monthly review.", "Claim Steward"]
    ]
  },
  {
    day: 14,
    title: "Claim assembly smoke test",
    categoryIds: ["claim", "reporting"],
    owner: "CEO",
    outcome: "The system produces a week 3 backlog and a first advisor-ready binder structure.",
    deliverables: ["t661-draft.md", "final-review-binder.md", "policy-change-log.md", "PLAYBOOK.md"],
    tasks: [
      ["claim", "Draft one T661-style project narrative from approved evidence only.", "Narrative Agent"],
      ["claim", "Assemble the review binder index with current evidence, finance, privacy, and approval status.", "Review Binder Agent"],
      ["claim", "Confirm policy, pre-claim approval, capital equipment, and expenditure-limit gaps are visible, not resolved by the agent.", "Claim Steward"],
      ["reporting", "Create the week 3 backlog for missing connections, weak evidence, advisor questions, and automation improvements.", "Claim Steward"],
      ["claim", "CEO approves go/no-go for continued operating rollout.", "CEO"]
    ]
  }
];

const storageKey = "volta-sred-dashboard-v1";
let state = readState();
let activeCategory = "all";

function readState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function taskId(day, index) {
  return `day-${day}-task-${index}`;
}

function allTasks() {
  return days.flatMap((day) => day.tasks.map((task, index) => ({
    id: taskId(day.day, index),
    day: day.day,
    category: task[0],
    title: task[1],
    owner: task[2]
  })));
}

function completedTasks() {
  return allTasks().filter((task) => state[task.id]);
}

function categoryStats(categoryId) {
  const tasks = allTasks().filter((task) => task.category === categoryId);
  const complete = tasks.filter((task) => state[task.id]).length;
  return { complete, total: tasks.length };
}

function dayStats(day) {
  const total = day.tasks.length;
  const complete = day.tasks.filter((_, index) => state[taskId(day.day, index)]).length;
  return { complete, total };
}

function percent(complete, total) {
  if (!total) return 0;
  return Math.round((complete / total) * 100);
}

function renderCategories() {
  const grid = document.getElementById("category-grid");
  grid.innerHTML = "";

  categories.forEach((category) => {
    const stats = categoryStats(category.id);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `category-card ${activeCategory === category.id ? "active" : ""}`;
    card.style.setProperty("--category-color", category.color);
    card.dataset.category = category.id;
    card.innerHTML = `
      <div class="category-top">
        <span class="category-dot" aria-hidden="true"></span>
        <span class="category-meta">${percent(stats.complete, stats.total)}%</span>
      </div>
      <div class="category-name">${category.label}</div>
      <div class="category-meta">${stats.complete} / ${stats.total} tasks</div>
      <div class="mini-progress" aria-hidden="true"><div class="mini-fill" style="width:${percent(stats.complete, stats.total)}%"></div></div>
    `;
    card.addEventListener("click", () => {
      activeCategory = activeCategory === category.id ? "all" : category.id;
      render();
    });
    grid.appendChild(card);
  });
}

function renderDays() {
  const list = document.getElementById("days-list");
  list.innerHTML = "";

  days.forEach((day) => {
    const stats = dayStats(day);
    const matchesFilter = activeCategory === "all" || day.tasks.some((task) => task[0] === activeCategory);

    const details = document.createElement("details");
    details.className = `day-card ${matchesFilter ? "" : "hidden"}`;
    details.open = day.day === 1 || day.day === 2 || activeCategory !== "all";

    const categoryPills = day.categoryIds.map((id) => {
      const category = categories.find((item) => item.id === id);
      return `<span class="pill category" style="--pill-color:${category.color}">${category.label}</span>`;
    }).join("");

    details.innerHTML = `
      <summary class="day-summary">
        <div class="day-number">${day.day}</div>
        <div>
          <div class="day-kicker">Day ${day.day} - ${day.owner}</div>
          <h3 class="day-title">${day.title}</h3>
          <div class="day-outcome">${day.outcome}</div>
        </div>
        <div class="day-status">
          <div class="status-count">${stats.complete} / ${stats.total}</div>
          <div class="status-label">${percent(stats.complete, stats.total)}% complete</div>
        </div>
      </summary>
      <div class="day-body">
        <div class="day-meta">
          ${categoryPills}
          <span class="pill">Owner: ${day.owner}</span>
        </div>
        <ul class="task-list">
          ${day.tasks.map((task, index) => {
            const id = taskId(day.day, index);
            const category = categories.find((item) => item.id === task[0]);
            const done = Boolean(state[id]);
            const hiddenByFilter = activeCategory !== "all" && task[0] !== activeCategory;
            return `
              <li class="task-item ${done ? "done" : ""}" ${hiddenByFilter ? "hidden" : ""}>
                <input type="checkbox" id="${id}" data-task-id="${id}" ${done ? "checked" : ""}>
                <label for="${id}">
                  <div class="task-title">${task[1]}</div>
                  <span class="pill category" style="--pill-color:${category.color}">${category.label}</span>
                </label>
                <div class="task-owner">${task[2]}</div>
              </li>
            `;
          }).join("")}
        </ul>
        <div class="deliverables">
          <div class="deliverables-title">Deliverables</div>
          <ul class="deliverables-list">
            ${day.deliverables.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;

    details.addEventListener("change", (event) => {
      const checkbox = event.target.closest("input[type='checkbox']");
      if (!checkbox) return;
      state[checkbox.dataset.taskId] = checkbox.checked;
      saveState();
      render();
    });

    list.appendChild(details);
  });
}

function renderOverallProgress() {
  const total = allTasks().length;
  const complete = completedTasks().length;
  const pct = percent(complete, total);
  document.getElementById("complete-count").textContent = complete;
  document.getElementById("total-count").textContent = total;
  document.getElementById("overall-progress-fill").style.width = `${pct}%`;
  document.getElementById("progress-note").textContent = pct === 100
    ? "The 14 day implementation plan is complete. Human review is still required before advisor handoff or filing."
    : `${pct}% complete across Inventory, Setup, Testing, Reporting, and Claim.`;
}

function renderFilterLabel() {
  const filter = document.getElementById("active-filter");
  if (activeCategory === "all") {
    filter.textContent = "Showing all workstreams";
    return;
  }
  const category = categories.find((item) => item.id === activeCategory);
  filter.textContent = `Showing ${category.label}`;
}

function renderActionState() {
  document.getElementById("show-all").classList.toggle("active", activeCategory === "all");
}

function render() {
  renderOverallProgress();
  renderCategories();
  renderFilterLabel();
  renderActionState();
  renderDays();
}

document.getElementById("show-all").addEventListener("click", () => {
  activeCategory = "all";
  render();
});

document.getElementById("expand-all").addEventListener("click", () => {
  document.querySelectorAll(".day-card:not(.hidden)").forEach((card) => {
    card.open = true;
  });
});

document.getElementById("collapse-all").addEventListener("click", () => {
  document.querySelectorAll(".day-card:not(.hidden)").forEach((card) => {
    card.open = false;
  });
});

document.getElementById("reset-progress").addEventListener("click", () => {
  const confirmed = window.confirm("Reset all task progress on this device?");
  if (!confirmed) return;
  state = {};
  saveState();
  render();
});

render();
