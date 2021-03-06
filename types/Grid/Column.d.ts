/// <reference types="svelte" />

type ColumnSize = boolean | number;

interface ColumnSizeDescriptor {
  span?: ColumnSize;
  offset: number;
}

type ColumnBreakpoint = ColumnSize | ColumnSizeDescriptor;

export interface ColumnProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * Set to `true` to render a custom HTML element
   * Props are destructured as `props` in the default slot (e.g. <Column let:props><article {...props}>...</article></Column>)
   * @default false
   */
  as?: boolean;

  /**
   * Set to `true` to remove the gutter
   * @default false
   */
  noGutter?: boolean;

  /**
   * Set to `true` to remove the left gutter
   * @default false
   */
  noGutterLeft?: boolean;

  /**
   * Set to `true` to remove the right gutter
   * @default false
   */
  noGutterRight?: boolean;

  /**
   * Specify the aspect ratio of the column
   */
  aspectRatio?: "2x1" | "16x9" | "9x16" | "1x2" | "4x3" | "3x4" | "1x1";

  /**
   * Set the small breakpoint
   */
  sm?: ColumnBreakpoint;

  /**
   * Set the medium breakpoint
   */
  md?: ColumnBreakpoint;

  /**
   * Set the large breakpoint
   */
  lg?: ColumnBreakpoint;

  /**
   * Set the extra large breakpoint
   */
  xlg?: ColumnBreakpoint;

  /**
   * Set the maximum breakpoint
   */
  max?: ColumnBreakpoint;
}

export default class Column {
  $$prop_def: ColumnProps;
  $$slot_def: {
    default: { props: { class: string; [key: string]: any } };
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
