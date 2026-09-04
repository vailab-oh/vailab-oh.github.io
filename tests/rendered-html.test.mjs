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
  assert.match(html, /href="\/publications"/);
  assert.doesNotMatch(html, /href="\/code"/);
  assert.doesNotMatch(html, /Browse research code/);
});

test("keeps homepage metrics and recent work limited to published research", async () => {
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
  assert.match(html, /Biocybernetics and Biomedical Engineering/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.5281\/zenodo\.21787811"/);
  assert.match(html, /href="https:\/\/github\.com\/vailab-oh\/vailab-repo\/tree\/main\/UxV\/Path-Planning\/TA-RRT"/);
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
