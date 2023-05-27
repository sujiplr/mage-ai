import Dashboard from '@components/Dashboard';
import PrivateRoute from '@components/shared/PrivateRoute';
import TerminalEncapsulated from '@components/TerminalEncapsulated';

function TerminalPage() {
  return (
    <Dashboard
      title="Terminal"
      uuid="terminal/index"
    >
      <TerminalEncapsulated />
    </Dashboard>
  );
}

TerminalPage.getInitialProps = async () => ({});

export default PrivateRoute(TerminalPage);
