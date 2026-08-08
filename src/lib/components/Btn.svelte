<!--
  Btn — rectangular button per spec §11.3.
  Variants: primary, ghost, danger, link.
  Sizes: sm (40px), md (44px), lg (48px).
  Square edges (--r: 0), no transform on hover, visible border.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

  type Variant = 'primary' | 'ghost' | 'danger' | 'link';
  type Size = 'sm' | 'md' | 'lg';

  type Props = {
    variant?: Variant;
    size?: Size;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children: Snippet;
  } & Omit<HTMLButtonAttributes & HTMLAnchorAttributes, 'type' | 'size'>;

  let {
    variant = 'primary',
    size = 'md',
    href,
    type = 'button',
    disabled = false,
    children,
    class: klass = '',
    ...rest
  }: Props = $props();
</script>

{#if href}
  <a
    {href}
    class="btn btn--{variant} btn--{size} {klass}"
    aria-disabled={disabled || undefined}
    {...rest}
  >
    {@render children()}
  </a>
{:else}
  <button
    {type}
    {disabled}
    class="btn btn--{variant} btn--{size} {klass}"
    {...rest}
  >
    {@render children()}
  </button>
{/if}

<style>
  .btn {
    --btn-bg: transparent;
    --btn-fg: var(--text);
    --btn-border: var(--border-strong);
    --btn-h: 44px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--sp-2);
    height: var(--btn-h);
    padding: 0 var(--sp-4);
    border-radius: var(--r);
    background: var(--btn-bg);
    color: var(--btn-fg);
    border: 1px solid var(--btn-border);
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition:
      background var(--dur) var(--ease),
      border-color var(--dur) var(--ease),
      color var(--dur) var(--ease);
    user-select: none;
    white-space: nowrap;
  }
  .btn:hover:not(:disabled):not([aria-disabled="true"]) {
    border-color: var(--text-muted);
  }
  .btn:active:not(:disabled) {
    background: var(--surface-2);
  }
  .btn:disabled,
  .btn[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Sizes (spec §11.3 + §12 touch targets) */
  .btn--sm { --btn-h: 40px; font-size: 13px; padding: 0 var(--sp-3); }
  .btn--md { --btn-h: 44px; }
  .btn--lg { --btn-h: 48px; font-size: 15px; padding: 0 var(--sp-5); }

  /* Variants (spec §11.3 + brand Tokyo Night) */
  .btn--primary {
    --btn-bg: var(--primary);
    --btn-fg: var(--on-primary);
    --btn-border: var(--primary);
  }
  .btn--primary:hover:not(:disabled):not([aria-disabled="true"]) {
    --btn-bg: var(--primary-2);
    --btn-border: var(--primary-2);
  }
  .btn--primary:active:not(:disabled) {
    --btn-bg: var(--primary-2);
  }

  .btn--ghost {
    --btn-bg: transparent;
    --btn-fg: var(--text);
    --btn-border: var(--border-strong);
  }
  .btn--ghost:hover:not(:disabled):not([aria-disabled="true"]) {
    --btn-bg: var(--surface-2);
    --btn-border: var(--text-muted);
  }

  .btn--danger {
    --btn-bg: transparent;
    --btn-fg: var(--danger);
    --btn-border: var(--danger);
  }
  .btn--danger:hover:not(:disabled):not([aria-disabled="true"]) {
    --btn-bg: var(--danger);
    --btn-fg: var(--bg);
  }

  .btn--link {
    --btn-bg: transparent;
    --btn-fg: var(--primary);
    --btn-border: transparent;
    height: auto;
    padding: 0;
    border: 0;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
  }
  .btn--link:hover:not(:disabled):not([aria-disabled="true"]) {
    --btn-fg: var(--accent);
    border: 0;
  }
</style>
