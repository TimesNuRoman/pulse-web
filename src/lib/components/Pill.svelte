<!--
  Pill — small status chip per spec §11.3.
  Variants: success (green), warning (yellow), danger (red), info (cyan),
            neutral (muted), primary (purple).
  Use: sync status ("Synced ✓" / "Syncing..." / "Offline"), upgrade CTA,
       version tag, model name.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'primary';

  type Props = {
    variant?: Variant;
    children: Snippet;
  };

  let { variant = 'neutral', children }: Props = $props();
</script>

<span class="pill pill--{variant}">
  {@render children()}
</span>

<style>
  .pill {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-1);
    height: 22px;
    padding: 0 var(--sp-2);
    border-radius: 9999px;
    border: 1px solid currentColor;
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.02em;
    white-space: nowrap;
    user-select: none;
  }
  .pill--success { color: var(--green); background: rgba(158, 206, 106, 0.10); }
  .pill--warning { color: var(--yellow); background: rgba(224, 175, 104, 0.10); }
  .pill--danger  { color: var(--red);   background: rgba(247, 118, 142, 0.10); }
  .pill--info    { color: var(--cyan);  background: rgba(125, 207, 255, 0.10); }
  .pill--neutral { color: var(--text-muted); background: transparent; border-color: var(--border-strong); }
  .pill--primary { color: var(--primary); background: rgba(187, 154, 247, 0.10); }
</style>
