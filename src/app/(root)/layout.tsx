import { PropsWithChildren } from 'react';

function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div
      id="root"
      data-testid="root"
      className="container relative h-dvh min-h-dvh max-w-lg bg-content-inverse p-0"
    >
      {children}
    </div>
  );
}

export default Layout;