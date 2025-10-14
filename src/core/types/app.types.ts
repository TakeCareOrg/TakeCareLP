import { PropsWithChildren } from "react";

export type AppLocale = string;

export interface PageParams<T = unknown, P = unknown> {
  params: Promise<
    {
      locale: AppLocale;
    } & T
  >;

  searchParams: Promise<P>;
}

export interface PropsWithLocale extends PropsWithChildren {
  locale: AppLocale;
  className?: string;
}
