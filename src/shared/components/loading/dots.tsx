export function LoadingDots() {
  return (
    <div className="flex h-screen items-center justify-center space-x-2 bg-white dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="size-8 animate-bounce rounded-full bg-content-primary [animation-delay:-0.3s]"></div>
      <div className="size-8 animate-bounce rounded-full bg-content-primary [animation-delay:-0.15s]"></div>
      <div className="size-8 animate-bounce rounded-full bg-content-primary"></div>
    </div>
  );
}