const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ width: '100dvw', overflowY: 'auto', overflowX: 'hidden', height: '100dvh' }}>
      {/* <div style={{ width: '100%' }}>header</div> */}
      {children}
    </div>
  );
};

export default MainLayout;
