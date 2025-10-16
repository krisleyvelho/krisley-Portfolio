export function FlagRender({ flag, alt }: { flag: string; alt?: string }) {
  return (
    <img
      src={flag}
      alt={alt ?? "flag"}
      className="w-12 h-7 scale-75  object-cover border border-gray-300 shadow-sm"
    />
  );
}