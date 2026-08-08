<!--
  Glass — wrapper for glassmorphism surfaces (spec §11.4).
  Use: TopBar, Sidebar, Scrim, modal backdrops, login card, etc.
  Combines .glass background + backdrop-filter blur.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    as?: 'div' | 'section' | 'aside' | 'header' | 'nav';
    padded?: boolean;
    children: Snippet;
  };

  let { as = 'div', padded = false, children }: Props = $props();
</script>

<svelte:element this={as} class="glass" class:glass--padded={padded}>
  {@render children()}
</svelte:element>

<style>
  .glass {
    background: rgba(31, 35, 53, 0.6);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid var(--border);
    border-radius: var(--r);
  }
  .glass--padded {
    padding: var(--sp-5);
  }
</style>
