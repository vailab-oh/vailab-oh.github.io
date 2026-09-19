import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the current site navigation without a Code page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Vision &amp; Autonomous Intelligence Lab/);
  assert.match(html, /href="\/research"/);
  assert.match(html, /href="\/projects"/);
  assert.match(html, /href="\/publications"/);
  assert.doesNotMatch(html, /href="\/code"/);
  assert.doesNotMatch(html, /Browse research code/);
});

test("renders public-facing academic and ADD project information", async () => {
  const response = await render("/projects");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Academic research projects/);
  assert.match(html, /Defense R&amp;D/);
  assert.match(html, /Principal Investigator/);
  assert.match(html, /Period/);
  assert.match(html, /U\.S\. Air Force Research Laboratory/);
  assert.match(html, /Future Challenge Defense Technology R&amp;D Program/);
  assert.match(html, /TA-RRT\*: Adaptive Sampling Based Path Planning using Terrain Analysis/);
  assert.match(html, /Development of an Autonomous Situational Awareness Software for Autonomous Unmanned Aerial Vehicles/);
  assert.match(html, /A Fault Management Design of Dual-Redundant Flight Control Computer for Unmanned Aerial Vehicle/);
  assert.doesNotMatch(html, /Participating Researcher/);
  assert.doesNotMatch(html, /Project period/);
  assert.doesNotMatch(html, /User involvement/);
  assert.doesNotMatch(html, /Performing organizations/);
  assert.doesNotMatch(html, /Program authority/);
  assert.doesNotMatch(html, /Project management/);
});

test("uses date-ordered publication data for the three homepage highlights", async () => {
  const response = await render();
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /International journal papers/);
  assert.match(html, /International conference papers/);
  assert.doesNotMatch(html, /Published journal articles/);
  assert.doesNotMatch(html, /Published international conference papers/);
  assert.doesNotMatch(html, /Registered patents/);
  assert.doesNotMatch(html, /Core research programs/);
  assert.match(html, /Latest published work/);
  assert.match(html, /Scientific Reports/);
  assert.match(html, /Jong-ryul Choi, Minkwon Jeon, Si Won Choi, and Taegeun Oh/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.1038\/s41598-026-56045-z"/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.5281\/zenodo\.21787811"/);
  assert.match(html, /href="https:\/\/github\.com\/vailab-oh\/vailab-repo\/tree\/main\/UxV\/Path-Planning\/TA-RRT"/);
  assert.doesNotMatch(html, /Biocybernetics and Biomedical Engineering/);
  assert.doesNotMatch(html, /Journal of Aerospace Information Systems/);
  assert.doesNotMatch(html, /2024 IEEE International Conference on Consumer Electronics/);
});

test("matches the homepage and Research page across four shared areas", async () => {
  const homeResponse = await render();
  const home = await homeResponse.text();
  assert.match(home, /href="\/research#autonomous-systems"/);
  assert.match(home, /href="\/research#path-planning"/);
  assert.match(home, /href="\/research#computer-vision"/);
  assert.match(home, /href="\/research#medical-imaging"/);

  const response = await render("/research");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /research-detail-list/);
  assert.match(html, /Autonomous systems &amp; mission intelligence/);
  assert.match(html, /Intelligent path planning/);
  assert.match(html, /Computer vision &amp; multi-task perception/);
  assert.match(html, /Medical image intelligence/);
  assert.match(html, /research-autonomy\.webp/);
  assert.match(html, /research-path-planning\.webp/);
  assert.match(html, /research-perception\.webp/);
  assert.match(html, /research-medical-imaging\.png/);
  assert.doesNotMatch(html, /Image quality &amp; visual signal processing/);
});

test("starts Publications with the list and renders index badges", async () => {
  const response = await render("/publications");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /publication-section publication-first/);
  assert.match(html, /index-scie/);
  assert.match(html, /index-scopus/);
  assert.match(html, /index-kci/);
  assert.match(html, /https:\/\/doi\.org\/10\.3390\/app15052287/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.5281\/zenodo\.21787811"/);
  assert.match(html, /href="https:\/\/github\.com\/vailab-oh\/vailab-repo\/tree\/main\/UxV\/Path-Planning\/TA-RRT"/);
  assert.doesNotMatch(html, /scholar\.google\.com/);
  assert.doesNotMatch(html, /Journal of Aerospace Information Systems/);
  assert.doesNotMatch(html, /Signal, Image and Video Processing/);
  assert.doesNotMatch(html, /Image and Vision Computing/);
  assert.doesNotMatch(html, /Ideas, tested/);
});

test("groups Teaching courses into three concise areas", async () => {
  const response = await render("/teaching");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, />Teaching</);
  assert.match(html, /Programming &amp; Computing Foundations/);
  assert.match(html, /AI, Vision &amp; Robotics/);
  assert.match(html, /Design &amp; Research Practice/);
  assert.match(html, /C Programming/);
  assert.match(html, /Undergraduate Research Project/);
  assert.doesNotMatch(html, /Learning by/);
  assert.doesNotMatch(html, /Undergraduate Research Mentoring/);
  assert.doesNotMatch(html, /Outstanding Faculty Award/);
});
