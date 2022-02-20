import { CSS } from '@lib/theme';

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : TupleOf<T, N, []>
  : never;

type TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : TupleOf<T, N, [T, ...R]>;

export type As<P = any> = React.ElementType<P>;

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type ExtendableProps<
  ExtendedProps extends object,
  OverrideProps extends object
> = Omit<ExtendedProps, keyof OverrideProps> & OverrideProps;

export type ComponentWithAs<P extends object, C extends As> = {
  <T extends As>(
    props: ExtendableProps<React.ComponentProps<C>, P> &
      ExtendableProps<React.ComponentProps<T>, P> & {
        as?: T;
        css?: CSS;
      }
  ): JSX.Element;
};

type GlobalValues = 'inherit' | 'initial' | 'revert' | 'unset';

export type NormalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Display =
  | 'flex'
  | 'block'
  | 'grid'
  | 'inline'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid'
  | GlobalValues;

export type Justify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | GlobalValues;

export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'
  | GlobalValues;

export type alignContent =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | GlobalValues;

export type Direction =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | GlobalValues;

export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalValues;
