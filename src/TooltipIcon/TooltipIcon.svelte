<script>
  /** Specify the tooltip text */
  export let tooltipText = "";

  /**
   * Set the alignment of the tooltip relative to the icon
   * @type {"start" | "center" | "end"}
   */
  export let align = "center";

  /**
   * Set the direction of the tooltip relative to the icon
   * @type {"top" | "right" | "bottom" | "left"}
   */
  export let direction = "bottom";

  /** Set an id for the span element */
  export let id = "ccs-" + Math.random().toString(36);

  /** Obtain a reference to the button HTML element */
  export let ref = null;

  let hidden = false;
</script>

<svelte:body
  on:keydown="{({ key }) => {
    if (key === 'Escape') {
      hidden = true;
    }
  }}" />

<button
  bind:this="{ref}"
  aria-describedby="{id}"
  class:bx--tooltip__trigger="{true}"
  class:bx--tooltip--a11y="{true}"
  class:bx--tooltip--hidden="{hidden}"
  {...$$restProps}
  class="{direction && `bx--tooltip--${direction}`}
    {align && `bx--tooltip--align-${align}`}
    {$$restProps.class}"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseenter="{() => {
    hidden = false;
  }}"
  on:mouseleave
  on:focus
  on:focus="{() => {
    hidden = false;
  }}"
>
  <span id="{id}" class:bx--assistive-text="{true}">{tooltipText}</span>
  <slot />
</button>
