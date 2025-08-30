import React from "react";

/**
 * Truncates car model title based on screen size
 */
export const truncateTitle = (title: string): React.JSX.Element => {
  const limits = {
    xxxxs: 1, // 150px altı
    xxxs: 2, // 150px-215px
    xxs: 7, // 215px-320px
    xs: 17, // 320px-480px
    sm: 39, // 640px-768px
    md: 18, // 768px-1024px
    lg: 31, // 1024px-1280px
    xl: 24, // 1280px-1536px
    "2xl": 16, // 1536px+
  };

  const truncate = (text: string, limit: number) =>
    text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <>
      <span className="max-[150px]:block min-[150px]:hidden">
        {truncate(title, limits.xxxxs)}
      </span>
      <span className="max-[215px]:hidden min-[150px]:block min-[215px]:hidden">
        {truncate(title, limits.xxxs)}
      </span>
      <span className="max-[320px]:hidden min-[215px]:block min-[320px]:hidden">
        {truncate(title, limits.xxs)}
      </span>
      <span className="max-[480px]:hidden min-[320px]:block sm:hidden">
        {truncate(title, limits.xs)}
      </span>
      <span className="hidden sm:inline md:hidden">
        {truncate(title, limits.sm)}
      </span>
      <span className="hidden md:inline lg:hidden">
        {truncate(title, limits.md)}
      </span>
      <span className="hidden lg:inline xl:hidden">
        {truncate(title, limits.lg)}
      </span>
      <span className="hidden xl:inline 2xl:hidden">
        {truncate(title, limits.xl)}
      </span>
      <span className="hidden 2xl:inline">
        {truncate(title, limits["2xl"])}
      </span>
    </>
  );
};
