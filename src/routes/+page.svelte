<!--
  Pulse web — design system preview (R0)
  Shows every primitive on one page so we can eyeball the system
  before wiring it into /login, /signup, /app/*.
-->
<script lang="ts">
  import Btn from '$lib/components/Btn.svelte';
  import Field from '$lib/components/Field.svelte';
  import Pill from '$lib/components/Pill.svelte';
  import Avatar from '$lib/components/Avatar.svelte';
  import Glass from '$lib/components/Glass.svelte';
</script>

<svelte:head>
  <title>Pulse — design system</title>
</svelte:head>

<main class="preview">
  <header class="preview__head">
    <h1 class="d-display-1">Pulse web — design system</h1>
    <p class="d-body" style="color: var(--text-muted); max-width: 60ch; margin-top: var(--sp-2);">
      Spec §11 primitives, scaffolding checkpoint. Each block below is
      the actual component; this page is the visual contract.
    </p>
  </header>

  <section class="preview__section">
    <h2 class="d-h2">Typography</h2>
    <div class="stack">
      <p class="d-display-1">Display 1 — 32 / 700</p>
      <p class="d-h1">Heading 1 — 24 / 700</p>
      <p class="d-h2">Heading 2 — 20 / 600</p>
      <p class="d-h3">Heading 3 — 16 / 600</p>
      <p class="d-body">Body — 15px / 1.6 — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p class="d-body-sm">Body small — 13px / 1.5</p>
      <p class="d-caption">Caption / kicker</p>
      <p><code>code — JetBrains Mono 0.92em</code></p>
    </div>
  </section>

  <section class="preview__section">
    <h2 class="d-h2">Buttons</h2>
    <div class="row">
      <Btn>Primary</Btn>
      <Btn variant="ghost">Ghost</Btn>
      <Btn variant="danger">Danger</Btn>
      <Btn variant="link">Link</Btn>
    </div>
    <div class="row">
      <Btn size="sm">Small</Btn>
      <Btn size="md">Medium</Btn>
      <Btn size="lg">Large</Btn>
    </div>
    <div class="row">
      <Btn disabled>Disabled</Btn>
      <Btn href="/login" variant="ghost">Link styled as btn</Btn>
    </div>
  </section>

  <section class="preview__section">
    <h2 class="d-h2">Form fields</h2>
    <div class="stack" style="max-width: 360px;">
      <Field name="email" type="email" label="Email" placeholder="you@example.com" required />
      <Field name="password" type="password" label="Password" placeholder="••••••••" required hint="At least 8 characters." />
      <Field name="bio" multiline label="Bio" placeholder="Tell us about yourself" />
      <Field name="error" type="text" label="With error" value="not-an-email" error="That doesn't look like an email." />
    </div>
  </section>

  <section class="preview__section">
    <h2 class="d-h2">Pills</h2>
    <div class="row">
      <Pill variant="success">Synced ✓</Pill>
      <Pill variant="warning">Syncing…</Pill>
      <Pill variant="danger">Offline</Pill>
      <Pill variant="info">v0.6.6</Pill>
      <Pill variant="primary">PRO</Pill>
      <Pill>Free</Pill>
    </div>
  </section>

  <section class="preview__section">
    <h2 class="d-h2">Avatars</h2>
    <div class="row" style="align-items: center; gap: var(--sp-3);">
      <Avatar name="Anya" size="sm" />
      <Avatar name="Roman" size="md" />
      <Avatar name="Pulse" size="lg" />
      <Avatar name="x" size="md" tint="accent" />
      <Avatar name="" size="md" tint="cyan" />
    </div>
  </section>

  <section class="preview__section">
    <h2 class="d-h2">Glass surface</h2>
    <Glass as="section" padded>
      <p class="d-body">This block is wrapped in <code>&lt;Glass&gt;</code>. The frosted-glass mixin
      from <code>app.css</code> applies the dark Tokyo Night tint plus backdrop blur.</p>
    </Glass>
  </section>
</main>

<style>
  .preview {
    max-width: 880px;
    margin: 0 auto;
    padding: var(--sp-7) var(--sp-5);
    display: flex;
    flex-direction: column;
    gap: var(--sp-7);
  }
  .preview__head { display: flex; flex-direction: column; }
  .preview__section {
    display: flex;
    flex-direction: column;
    gap: var(--sp-4);
    padding-top: var(--sp-5);
    border-top: 1px solid var(--border);
  }
  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--sp-3);
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--sp-3);
    align-items: center;
  }
</style>
