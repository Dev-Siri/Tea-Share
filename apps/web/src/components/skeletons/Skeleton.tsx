interface Props {
  className?: string;
}

export default function Skeleton({ className = "" }: Props) {
  return (
    <span
      aria-live="polite"
      aria-busy
      className={`bg-light-gray dark:bg-dark-gray relative z-[1] m-1 block overflow-hidden bg-[linear-gradient(90,hsl(0,0%,90%),hsl(0,11%,96%),hsl(0,0%,90%))] leading-[1] ${
        className.includes("rounded-full") ? className : `${className} rounded-md`
      }`}
    >
      &zwnj;
      <br />
    </span>
  );
}
