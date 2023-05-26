function LayoutHome(props: any) {
  const { children } = props;
  return (
    <div>
      <div className="h-8 bg-slate-400">Nav</div>
      <div className="flex">
        <div className="h-[100px] w-10 bg-slate-300">Aside</div>
        {children}
      </div>
    </div>
  );
}

export default LayoutHome;
