<!--
  Avatar — user initial circle per spec §11.3.
  Sizes: sm (24px), md (32px), lg (40px).
  Tint: primary by default. Shows the user's first letter.
-->
<script lang="ts">
  type Props = {
    name: string;
    size?: 'sm' | 'md' | 'lg';
    tint?: 'primary' | 'accent' | 'cyan';
  };

  let { name, size = 'md', tint = 'primary' }: Props = $props();

  // First letter (or '?' if no name)
  const initial = $derived(name?.trim()?.[0]?.toUpperCase() ?? '?');
</script>

<span
  class="avatar avatar--{size} avatar--{tint}"
  role="img"
  aria-label={name ? `${name} avatar` : 'avatar'}
>
  {initial}
</span>

<style>
  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
    color: var(--on-primary);
    flex-shrink: 0;
    user-select: none;
  }
  .avatar--sm { width: 24px; height: 24px; font-size: 11px; }
  .avatar--md { width: 32px; height: 32px; font-size: 13px; }
  .avatar--lg { width: 40px; height: 40px; font-size: 15px; }

  .avatar--primary { background: var(--primary); color: var(--on-primary); }
  .avatar--accent  { background: var(--accent);  color: var(--on-primary); }
  .avatar--cyan    { background: var(--cyan);    color: var(--on-primary); }
</style>
