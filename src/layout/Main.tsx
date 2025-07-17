const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>header</div>
      {children}
    </div>
  );
};

export default MainLayout;
