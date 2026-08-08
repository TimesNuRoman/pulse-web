<!--
  Field — label + input per spec §11.3.
  Variants: text, email, password, textarea.
  Error state + hint.
  Square edges, 44px touch target.
-->
<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    name: string;
    label: string;
    type?: 'text' | 'email' | 'password' | 'url' | 'search' | 'tel' | 'number';
    value?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    autocomplete?: AutoFill;
    error?: string;
    hint?: string;
    multiline?: boolean;
    rows?: number;
    onInput?: (e: Event) => void;
    onChange?: (e: Event) => void;
  };

  let {
    name,
    label,
    type = 'text',
    value = $bindable(''),
    placeholder = '',
    required = false,
    disabled = false,
    autocomplete,
    error = '',
    hint = '',
    multiline = false,
    rows = 4,
    onInput,
    onChange
  }: Props = $props();

  const fieldId = $derived(`field-${name}-${Math.random().toString(36).slice(2, 8)}`);
  const hintId = $derived(hint || error ? `${fieldId}-hint` : undefined);
</script>

<label class="field" for={fieldId}>
  <span class="field__label">
    {label}
    {#if required}<span class="field__req" aria-hidden="true">*</span>{/if}
  </span>

  {#if multiline}
    <textarea
      id={fieldId}
      {name}
      {placeholder}
      {required}
      {disabled}
      {rows}
      bind:value
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={hintId}
      oninput={onInput}
      onchange={onChange}
      class="field__input field__input--textarea"
    ></textarea>
  {:else}
    <input
      id={fieldId}
      {name}
      {type}
      {placeholder}
      {required}
      {disabled}
      {autocomplete}
      bind:value
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={hintId}
      oninput={onInput}
      onchange={onChange}
      class="field__input"
    />
  {/if}

  {#if error}
    <span id={hintId} class="field__msg field__msg--error" role="alert">{error}</span>
  {:else if hint}
    <span id={hintId} class="field__msg">{hint}</span>
  {/if}
</label>

<style>
  .field {
    display: flex;
    flex-direction: column;
    gap: var(--sp-2);
    width: 100%;
  }
  .field__label {
    font-size: 13px;
    font-weight: 500;
    color: var(--text);
    line-height: 1.4;
  }
  .field__req {
    color: var(--danger);
    margin-left: 2px;
  }
  .field__input {
    width: 100%;
    height: 44px;
    padding: 0 var(--sp-3);
    background: rgba(26, 27, 38, 0.6);
    border: 1px solid var(--border);
    border-radius: var(--r);
    color: var(--text);
    font-size: 14px;
    line-height: 1.4;
    transition: border-color var(--dur) var(--ease), background var(--dur) var(--ease);
  }
  .field__input::placeholder {
    color: var(--text-dim);
  }
  .field__input:hover:not(:disabled) {
    border-color: var(--border-strong);
  }
  .field__input:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(26, 27, 38, 0.8);
  }
  .field__input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .field__input[aria-invalid="true"] {
    border-color: var(--danger);
  }
  .field__input--textarea {
    height: auto;
    min-height: 88px;
    padding: var(--sp-3);
    resize: vertical;
    line-height: 1.5;
  }
  .field__msg {
    font-size: 12px;
    color: var(--text-dim);
    line-height: 1.4;
  }
  .field__msg--error {
    color: var(--danger);
  }
</style>
