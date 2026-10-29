// Fixed ambient colour behind the whole page so the glass surfaces have something to blur.
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute -left-32 top-[30%] h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -right-32 top-[60%] h-96 w-96 rounded-full bg-cyan/12 blur-[120px]" />
      <div className="absolute left-1/3 top-[85%] h-80 w-80 rounded-full bg-accent/15 blur-[120px]" />
    </div>
  );
}
