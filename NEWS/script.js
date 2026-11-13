const searchIndex = [
  { kind: "Leadership", title: "Jensen Huang resigns. NVIDIA enters uncharted territory.", href: "article.html?id=transition", words: "jensen huang resignation nvidia ceo colette kress board november 12 leadership transition" },
  { kind: "Investigation", title: "The investigation into Jensen Huang, explained", href: "article.html?id=investigation", words: "foreign intelligence investigation outside counsel security allegations board wachtell joon kim" },
  { kind: "People", title: "Colette Kress inherits an AI empire at full speed", href: "article.html?id=leadership", words: "colette kress cfo interim ceo successor finance leadership nvidia" },
  { kind: "Markets", title: "Why one resignation can move the entire AI trade", href: "article.html?id=market", words: "market investors ai trade shares business customers confidence supply chain" },
  { kind: "History", title: "What Jensen Huang built—and what he leaves behind", href: "article.html?id=history", words: "history founder 1993 cuda gpu nvidia denny's computers" },
  { kind: "Timeline", title: "From the booth to the breaking point", href: "timeline.html", words: "timeline years 1993 1999 2006 2016 2022 2026 history timeline" },
  { kind: "Archive", title: "Every story in The Huang File", href: "archive.html", words: "all stories archive reporting news explainers" },
  { kind: "Method", title: "How The Huang File reports and verifies", href: "about.html", words: "about method sources verification corrections privacy" }
];

const articleContent = {
  transition: {
    category: "Leadership",
    breadcrumb: "The resignation",
    readtime: "6 min read",
    title: "Jensen Huang resigns. NVIDIA enters uncharted territory.",
    deck: "The founder who spent 33 years turning a graphics startup into the world’s AI engine leaves amid an independent investigation and a public personal reckoning.",
    standfirst: "Jensen Huang has resigned as NVIDIA’s president, chief executive officer, and board member, ending a 33-year run that made him one of the most influential business leaders of the AI era."
  },
  investigation: {
    category: "Investigation",
    breadcrumb: "The investigation",
    readtime: "7 min read",
    title: "The investigation into Jensen Huang, explained",
    deck: "A public admission, a foreign-intelligence concern, and an independent counsel review: what is actually in the record—and what is not.",
    standfirst: "NVIDIA’s board opened an independent investigation after saying founder and CEO Jensen Huang had been the target of a foreign-intelligence effort. The review quickly became inseparable from the question of who should lead the company.",
    outline: [
      ["what-happened", "How it began"],
      ["confirmed", "What is confirmed"],
      ["alleged", "What is alleged"],
      ["known", "What remains unknown"],
      ["why-it-matters", "The governance stakes"],
      ["what-next", "What comes next"]
    ]
  },
  leadership: {
    category: "People",
    breadcrumb: "The succession",
    readtime: "5 min read",
    title: "Colette Kress inherits an AI empire at full speed",
    deck: "NVIDIA’s longtime finance chief becomes interim CEO with a permanent search underway, an earnings call approaching, and no room for a quiet transition.",
    standfirst: "Colette Kress has spent more than a decade inside the financial engine of NVIDIA. She now has to run the entire machine while the board decides who gets the job permanently.",
    heroImage: "assets/colette-kress.png",
    heroAlt: "Colette Kress, NVIDIA executive vice president and chief financial officer",
    heroCaption: "Colette Kress, NVIDIA’s executive vice president and chief financial officer, became interim CEO on November 12, 2026.",
    heroCredit: "Photo: SiliconANGLE theCUBE / Wikimedia Commons, CC BY 4.0",
    outline: [
      ["what-happened", "The handoff"],
      ["confirmed", "What is confirmed"],
      ["alleged", "Who is Colette Kress"],
      ["known", "What remains unknown"],
      ["why-it-matters", "The job ahead"],
      ["what-next", "First tests"]
    ]
  },
  market: {
    category: "Markets",
    breadcrumb: "The AI trade",
    readtime: "4 min read",
    title: "Why one resignation can move the entire AI trade",
    deck: "Investors are not only pricing a change at NVIDIA. They are testing whether the AI boom can survive a shock to its most visible corporate symbol.",
    standfirst: "NVIDIA sits inside the capital plans of cloud providers, model developers, governments, and data-center operators. That makes a leadership rupture at the company a test of confidence across the AI economy.",
    outline: [
      ["what-happened", "The shock"],
      ["confirmed", "What is confirmed"],
      ["alleged", "The exposure"],
      ["known", "What remains unknown"],
      ["why-it-matters", "Why NVIDIA matters"],
      ["what-next", "What to watch"]
    ]
  },
  history: {
    category: "History",
    breadcrumb: "The founder era",
    readtime: "8 min read",
    title: "What Jensen Huang built—and what he leaves behind",
    deck: "From a Denny’s booth to the center of global AI, NVIDIA’s rise was a series of expansive bets that took years to justify.",
    standfirst: "Jensen Huang’s legacy is not one product. It is a sequence of decisions to build the infrastructure for a market that did not yet exist.",
    outline: [
      ["what-happened", "The company he built"],
      ["confirmed", "Three defining bets"],
      ["alleged", "The founder effect"],
      ["known", "What still belongs to him"],
      ["why-it-matters", "The successor’s test"],
      ["what-next", "The next chapter"]
    ]
  }
};

const sharedSources = `
  <section class="sources-section" id="sources">
    <h2>Sources</h2>
    <div class="sources-grid">
      <a href="https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition" target="_blank" rel="noopener"><span>NVIDIA NEWSROOM</span><strong>NVIDIA Announces CEO Transition</strong><small>November 12, 2026 ↗</small></a>
      <a href="https://nvidianews.nvidia.com/news/a-message-to-our-company" target="_blank" rel="noopener"><span>NVIDIA NEWSROOM</span><strong>A Message to Our Company</strong><small>November 8, 2026 ↗</small></a>
      <a href="https://nvidianews.nvidia.com/news/statement-from-the-independent-members-of-the-nvidia-board" target="_blank" rel="noopener"><span>NVIDIA NEWSROOM</span><strong>Statement From the Independent Members</strong><small>November 10, 2026 ↗</small></a>
      <a href="https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors" target="_blank" rel="noopener"><span>NVIDIA NEWSROOM</span><strong>Statement From the Board</strong><small>November 8, 2026 ↗</small></a>
    </div>
  </section>
`;

const articleBodies = {
  investigation: `
    <p class="article-standfirst">NVIDIA’s board opened an independent investigation after saying founder and CEO Jensen Huang had been the target of a foreign-intelligence effort. The review quickly became inseparable from the question of who should lead the company.</p>
    <section id="what-happened">
      <h2>How the review began</h2>
      <p>On November 8, NVIDIA’s board said it was initiating an independent investigation in light of “recent reporting” that Huang had been the target of a foreign intelligence effort. The board formed a committee of independent directors and said outside counsel would assist.</p>
      <p>The same day, NVIDIA published a message from Huang to employees. He apologized to his family for being unfaithful to his wife, accepted responsibility, and said he supported the national-security investigation. The juxtaposition put personal conduct and corporate security into one public crisis.</p>
      <div class="evidence-card">
        <span class="evidence-title">WHAT THE BOARD SAID</span>
        <strong>“An independent investigation.”</strong>
        <p>The board said it had no reason to believe national security or NVIDIA secrets had been compromised, while committing to examine all available information.</p>
        <a href="https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors" target="_blank" rel="noopener">Read the November 8 statement <span>↗</span></a>
      </div>
    </section>
    <section id="confirmed">
      <h2>What is confirmed</h2>
      <ul class="fact-list">
        <li><strong>There is an independent review.</strong> A committee of independent directors is overseeing it.</li>
        <li><strong>Outside counsel was retained.</strong> The independent directors engaged Joon H. Kim and Wachtell, Lipton, Rosen &amp; Katz on November 10.</li>
        <li><strong>Huang acknowledged infidelity.</strong> The admission appears in his own November 8 message to employees.</li>
        <li><strong>Huang supported the review.</strong> He said he would cooperate fully and that his family bore no responsibility for his choices.</li>
        <li><strong>Huang had resigned by November 12.</strong> The board’s CEO-transition announcement made the departure immediate.</li>
      </ul>
    </section>
    <section id="alleged">
      <h2>What is alleged</h2>
      <p>News organizations have reported on extramarital relationships and alleged foreign-intelligence contact involving people around Huang. Those reports are attributed allegations, not findings published by the board or resolved in a public legal proceeding.</p>
      <p>This file does not turn anonymous claims about private individuals into established fact. The public-interest question is whether a personal relationship produced a security or governance risk, whether Huang disclosed it, and whether NVIDIA’s controls responded appropriately.</p>
    </section>
    <section id="known">
      <h2>What remains unknown</h2>
      <p>No public record establishes what information was allegedly sought or shared, which officials were briefed, or whether the review was complete before Huang resigned. The board has not published findings, interview summaries, or evidence.</p>
      <blockquote>“While the Board has no reason to believe that either national security or NVIDIA secrets were compromised, the Board’s inquiry will examine all available information.”<cite>— NVIDIA Board of Directors, November 8</cite></blockquote>
      <p>That language is a preliminary statement, not an exoneration. It is equally not proof that any alleged foreign contact led to a security breach.</p>
    </section>
    <section id="why-it-matters">
      <h2>The governance stakes</h2>
      <p>NVIDIA is a strategic supplier to governments, cloud providers, and defense-adjacent technology programs. Its CEO had unusual influence over product roadmaps, partnerships, and the company’s public story. A review that depends on the CEO’s cooperation is materially different from one conducted after his departure.</p>
      <p>The board now has to demonstrate procedural independence while protecting the company from speculation. For investors and regulators, the quality of that process may matter as much as its eventual conclusion.</p>
    </section>
    <section id="what-next">
      <h2>What comes next</h2>
      <p>The independent directors have not set a public completion date. Meaningful updates would include direct statements from their counsel, regulatory disclosures, a board summary of findings, or corroborated reporting that can be tested against the primary record.</p>
      <p><em>The Huang File will update this explainer when the investigation produces a public finding.</em></p>
    </section>
    ${sharedSources}
  `,
  leadership: `
    <p class="article-standfirst">Colette Kress has spent more than a decade inside the financial engine of NVIDIA. She now has to run the entire machine while the board decides who gets the job permanently.</p>
    <section id="what-happened">
      <h2>The handoff</h2>
      <p>NVIDIA’s board appointed Kress interim CEO on November 12, immediately after announcing Jensen Huang’s resignation. Kress will continue serving as executive vice president and chief financial officer while she leads the company.</p>
      <p>Harvey C. Jones, a director with decades of experience as a technology executive and investor, became the board’s first chair. The board said the leadership team was expected to continue NVIDIA’s operations, customer commitments, and product roadmap without interruption.</p>
    </section>
    <section id="confirmed">
      <h2>What is confirmed</h2>
      <ul class="fact-list">
        <li><strong>Kress joined NVIDIA in 2013.</strong> She has been executive vice president and CFO for more than a decade.</li>
        <li><strong>Her mandate is temporary.</strong> The board is searching for a permanent CEO and will consider internal and external candidates.</li>
        <li><strong>She keeps two jobs.</strong> Kress remains CFO while serving as interim CEO.</li>
        <li><strong>The first public test is close.</strong> NVIDIA is due to report quarterly results on November 17.</li>
      </ul>
    </section>
    <section id="alleged">
      <h2>Who is Colette Kress</h2>
      <p>Before NVIDIA, Kress spent nearly 25 years in finance roles at major technology companies, including Cisco and Microsoft, according to the board’s announcement. At NVIDIA, she became a central steward of the financial strategy that accompanied its expansion into accelerated computing and AI.</p>
      <p>Her profile is operational rather than founder-driven. That makes the interim appointment a stabilising choice, but it does not by itself resolve questions about product vision, customer confidence, or the board’s permanent succession plan.</p>
    </section>
    <section id="known">
      <h2>What remains unknown</h2>
      <p>The board has not named candidates, described the timeline for a permanent appointment, or said whether Kress is being considered for the role. Nor has it explained how responsibility will be divided if the CEO search runs through a full earnings cycle.</p>
      <blockquote>“Our focus remains on serving our customers, partners, developers and shareholders.”<cite>— Colette Kress, interim CEO and CFO</cite></blockquote>
    </section>
    <section id="why-it-matters">
      <h2>The job ahead</h2>
      <p>NVIDIA’s customers make long-range infrastructure commitments around its product cadence. Employees, suppliers, and investors also take cues from the visibility and technical authority of the CEO. Kress must project continuity while managing a company whose founder was its most recognisable strategic voice.</p>
      <p>The challenge is not simply administrative. It is to reassure an ecosystem that the roadmap remains credible while the board examines serious allegations about its former chief executive.</p>
    </section>
    <section id="what-next">
      <h2>First tests</h2>
      <p>Analysts will focus on guidance, supply commitments, customer demand, and the tone of Kress’s first earnings call. The board’s search process will also be judged by its pace, transparency, and willingness to consider both internal and external candidates.</p>
      <p><em>This profile will be updated when NVIDIA names a permanent CEO.</em></p>
    </section>
    ${sharedSources}
  `,
  market: `
    <p class="article-standfirst">NVIDIA sits inside the capital plans of cloud providers, model developers, governments, and data-center operators. That makes a leadership rupture at the company a test of confidence across the AI economy.</p>
    <section id="what-happened">
      <h2>The shock</h2>
      <p>Jensen Huang’s resignation created a new source of uncertainty in a market that had become accustomed to treating NVIDIA and its founder as a stable pairing. The board moved immediately to install Colette Kress as interim CEO and said the corporate roadmap would continue without interruption.</p>
      <p>That official continuity message is the base case. Markets, however, price confidence as well as operations. The question is whether customers and investors treat the leadership change as a contained governance event or as a broader warning about concentration risk.</p>
    </section>
    <section id="confirmed">
      <h2>What is confirmed</h2>
      <ul class="fact-list">
        <li><strong>NVIDIA has an interim CEO.</strong> Colette Kress assumed the role on November 12 and remains CFO.</li>
        <li><strong>The board says the roadmap is unchanged.</strong> It also expressed confidence in the leadership team.</li>
        <li><strong>An independent investigation is active.</strong> Potential findings remain unknown.</li>
        <li><strong>Quarterly results are scheduled.</strong> NVIDIA plans to report on November 17 at about 1:20 p.m. PT, with a call at 2 p.m. PT.</li>
      </ul>
    </section>
    <section id="alleged">
      <h2>The exposure</h2>
      <p>NVIDIA’s strategic importance makes almost any governance shock larger than the company itself. Cloud operators plan capacity years ahead. Enterprises build software around its computing stack. Governments consider the company part of national AI infrastructure.</p>
      <p>Those dependencies do not mean the investigation will disrupt supply. They do explain why customers may demand clearer continuity commitments, and why competitors will have an opening to argue that diversification is now more valuable.</p>
    </section>
    <section id="known">
      <h2>What remains unknown</h2>
      <p>There is no public financial update tied to the resignation and no disclosed change to guidance. The investigation may produce costs and disclosure obligations that are not yet visible. A permanent CEO could alter capital allocation, partnership priorities, or the pace of product announcements.</p>
    </section>
    <section id="why-it-matters">
      <h2>Why NVIDIA matters</h2>
      <p>The AI trade is not a single stock position. It runs through semiconductor supply, data-center construction, power generation, networking, model development, and software. NVIDIA sits at a crossroads of those industries, so a confidence shock can travel well beyond one balance sheet.</p>
      <aside class="pull-stat">
        <span class="stat-number">17</span>
        <span class="stat-copy">November: the interim leadership team’s first scheduled earnings test</span>
      </aside>
    </section>
    <section id="what-next">
      <h2>What to watch</h2>
      <p>The most important signals are not short-term price moves. They are changes to guidance, customer commitments, executive departures, audit disclosures, and the board’s succession timetable. Each offers a more concrete measure of whether the governance shock has become an operational one.</p>
      <p><em>This analysis will be revised around NVIDIA’s November 17 results.</em></p>
    </section>
    ${sharedSources}
  `,
  history: `
    <p class="article-standfirst">Jensen Huang’s legacy is not one product. It is a sequence of decisions to build the infrastructure for a market that did not yet exist.</p>
    <section id="what-happened">
      <h2>The company he built</h2>
      <p>Huang co-founded NVIDIA in 1993 with Chris Malachowsky and Curtis Priem, then led it for 33 years. The company began around graphics hardware but repeatedly expanded the definition of what a GPU could do.</p>
      <p>Its rise reflected Huang’s preference for large, long-horizon bets. He pushed NVIDIA toward programmable graphics, general-purpose GPU computing, data-center systems, and eventually full AI infrastructure stacks.</p>
    </section>
    <section id="confirmed">
      <h2>Three defining bets</h2>
      <ul class="fact-list">
        <li><strong>The GPU as a platform.</strong> NVIDIA made graphics processors increasingly programmable and central to its strategy.</li>
        <li><strong>CUDA.</strong> NVIDIA invested in software that opened its GPUs to general-purpose computing long before modern generative AI made that investment obvious.</li>
        <li><strong>The data-center pivot.</strong> NVIDIA reorganised its opportunity around accelerated computing and deep learning as AI workloads moved into commercial infrastructure.</li>
      </ul>
    </section>
    <section id="alleged">
      <h2>The founder effect</h2>
      <p>Huang’s public persona became part of NVIDIA’s product story. The leather jacket, the long keynote, and the habit of presenting improbable roadmaps helped make the company legible to developers, investors, and governments.</p>
      <p>That same closeness between founder and company creates concentration risk. A board can replace an executive; it cannot instantly recreate the trust and symbolism accumulated over three decades.</p>
    </section>
    <section id="known">
      <h2>What still belongs to him</h2>
      <p>The company’s installed software base, development culture, and strategic direction were shaped during his tenure. The extent to which those advantages persist without him is an open question—one that will be answered through execution rather than historical reputation.</p>
      <blockquote>“NVIDIA’s strength has always come from its people.”<cite>— Colette Kress, interim CEO and CFO</cite></blockquote>
    </section>
    <section id="why-it-matters">
      <h2>The successor’s test</h2>
      <p>NVIDIA’s next leader inherits both an exceptional position and a demanding expectation of continuity. Customers need confidence that product cadence survives the transition. Employees need clarity about decision-making. Investors need evidence that the company is larger than one person.</p>
    </section>
    <section id="what-next">
      <h2>The next chapter</h2>
      <p>The board has begun a permanent CEO search and placed the company under interim leadership. Huang’s resignation closes the founder era in a way nobody scripted. The longer-term legacy will now depend in part on how responsibly the institution he built absorbs the shock.</p>
    </section>
    ${sharedSources}
  `
};

const icons = {
  save: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4-6 4V4.75Z"/></svg>'
};

function setupNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
}

function setupDialogs() {
  const searchDialog = document.querySelector("#search-dialog");
  const newsletterDialog = document.querySelector("#newsletter-dialog");

  document.querySelectorAll(".open-search").forEach((button) => {
    button.addEventListener("click", () => {
      if (searchDialog?.showModal) {
        searchDialog.showModal();
        window.setTimeout(() => document.querySelector("#site-search")?.focus(), 50);
      }
    });
  });

  document.querySelectorAll(".open-newsletter").forEach((button) => {
    button.addEventListener("click", () => {
      if (newsletterDialog?.showModal) {
        newsletterDialog.showModal();
        window.setTimeout(() => document.querySelector("#newsletter-email")?.focus(), 50);
      }
    });
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.querySelectorAll(".dialog-close").forEach((button) => {
      button.addEventListener("click", () => dialog.close());
    });
  });
}

function setupSearch() {
  const input = document.querySelector("#site-search");
  const results = document.querySelector("#search-results");
  if (!input || !results) return;

  const render = () => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      results.innerHTML = '<p class="search-hint">Try “investigation,” “Colette Kress,” or “timeline.”</p>';
      return;
    }

    const matches = searchIndex.filter((entry) =>
      `${entry.title} ${entry.words}`.toLowerCase().includes(query)
    );

    if (!matches.length) {
      results.innerHTML = '<p class="search-empty">No matching stories. Try a person, company, or event.</p>';
      return;
    }

    results.innerHTML = matches.map((entry) => `
      <a class="search-result" href="${entry.href}">
        <span class="search-result-kind">${entry.kind}</span>
        <h3>${entry.title}</h3>
        <span class="search-result-arrow" aria-hidden="true">↗</span>
      </a>
    `).join("");
  };

  input.addEventListener("input", render);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const first = results.querySelector("a");
      if (first) {
        event.preventDefault();
        window.location.href = first.href;
      }
    }
  });
}

function setupNewsletter() {
  const form = document.querySelector("#newsletter-form");
  const status = document.querySelector(".newsletter-status");
  if (!form || !status) return;

  const savedEmail = localStorage.getItem("huang-file-newsletter-email");
  if (savedEmail) {
    status.textContent = "You’re already on the demo list.";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(form).get("email");
    localStorage.setItem("huang-file-newsletter-email", email);
    status.textContent = "You’re on the list. This demo stored your signup locally.";
    form.reset();
    showToast("Briefing signup saved");
  });
}

function setupSaves() {
  let saved = [];
  try {
    saved = JSON.parse(localStorage.getItem("huang-file-saved") || "[]");
  } catch {
    saved = [];
  }

  const sync = () => {
    document.querySelectorAll(".save-story").forEach((button) => {
      const isSaved = saved.includes(button.dataset.storyId);
      button.classList.toggle("saved", isSaved);
      button.setAttribute("aria-pressed", String(isSaved));
      const text = button.querySelector("span");
      if (text) text.textContent = isSaved ? "Saved" : "Save";
    });
  };

  document.querySelectorAll(".save-story").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.storyId;
      saved = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id];
      localStorage.setItem("huang-file-saved", JSON.stringify(saved));
      sync();
      showToast(saved.includes(id) ? "Story saved to this browser" : "Story removed from saved");
    });
  });

  sync();
}

function setupSharing() {
  document.querySelectorAll(".share-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const shareData = {
        title: document.querySelector("#article-title")?.textContent || document.title,
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(window.location.href);
          showToast("Link copied to clipboard");
        }
      } catch {
        showToast("Sharing was cancelled");
      }
    });
  });
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2300);
}

function setupProgress() {
  const bar = document.querySelector(".reading-progress span");
  if (!bar) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    bar.style.width = `${value * 100}%`;
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function setupArchiveFilters() {
  const buttons = document.querySelectorAll(".filter-button");
  const cards = document.querySelectorAll("#archive-grid .archive-card");
  const empty = document.querySelector("#archive-empty");
  if (!buttons.length || !cards.length) return;

  const apply = (filter) => {
    let visible = 0;
    buttons.forEach((button) => button.classList.toggle("active", button.dataset.filter === filter));
    cards.forEach((card) => {
      const kinds = (card.dataset.kind || "").split(/\s+/);
      const show = filter === "all" || kinds.includes(filter);
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible > 0;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => apply(button.dataset.filter));
  });

  const requested = new URLSearchParams(window.location.search).get("filter");
  if (requested && [...buttons].some((button) => button.dataset.filter === requested)) {
    apply(requested);
  }

  empty?.querySelector("button")?.addEventListener("click", () => apply("all"));
}

function setupArticleOutline() {
  const links = document.querySelectorAll("#article-outline a");
  const sections = document.querySelectorAll("#story-article section[id]");
  if (!links.length || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-15% 0px -68% 0px", threshold: [0, 0.2, 0.6] });

  sections.forEach((section) => observer.observe(section));
}

function setupArticleVariant() {
  if (document.body.dataset.page !== "article") return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "transition";
  const story = articleContent[id] || articleContent.transition;

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  setText("#article-breadcrumb", story.breadcrumb);
  setText("#article-category", story.category);
  setText("#article-readtime", story.readtime);
  setText("#article-title", story.title);
  setText("#article-deck", story.deck);
  setText("#article-standfirst", story.standfirst);
  document.title = `${story.title} | The Huang File`;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = story.deck;

  if (id !== "transition") {
    document.querySelector("#article-label")?.remove();
  }

  if (articleBodies[id]) {
    const body = document.querySelector("#story-article");
    if (body) body.innerHTML = articleBodies[id];
  }

  if (story.outline) {
    const outline = document.querySelector("#article-outline");
    if (outline) {
      outline.innerHTML = story.outline
        .map(([target, label], index) => `<a href="#${target}"${index === 0 ? ' class="active"' : ""}>${label}</a>`)
        .join("");
    }
  }

  if (story.heroImage) {
    const image = document.querySelector("#article-hero-image");
    if (image) {
      image.src = story.heroImage;
      image.alt = story.heroAlt;
    }
  }

  if (story.heroCaption) {
    setText("#article-hero-caption", story.heroCaption);
  }

  if (story.heroCredit) {
    setText("#article-hero-credit", story.heroCredit);
  }

  document.querySelector(".article-hero")?.classList.toggle("leadership-hero", id === "leadership");

  document.querySelectorAll(".save-story").forEach((button) => {
    button.dataset.storyId = id;
  });
}

function setupActiveStoryJson() {
  if (document.body.dataset.page !== "article") return;
  const params = new URLSearchParams(window.location.search);
  const storyId = params.get("id") || "transition";
  const canonical = `${window.location.origin}${window.location.pathname}?id=${encodeURIComponent(storyId)}`;
  const existing = document.querySelector('link[rel="canonical"]');
  if (existing) existing.remove();
  const link = document.createElement("link");
  link.rel = "canonical";
  link.href = canonical;
  document.head.appendChild(link);
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupDialogs();
  setupSearch();
  setupNewsletter();
  setupArticleVariant();
  setupSaves();
  setupSharing();
  setupProgress();
  setupArchiveFilters();
  setupArticleOutline();
  setupActiveStoryJson();
});
