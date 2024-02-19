import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="flex items-center justify-center h-full  P-20 flex-col">
      <div className="relative h-72 w-72">
        <Image fill alt="Empty" src="/empty.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
