type Props = {
  href: string;
  classes?: string;
  children: JSX.Element | string;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
};

export default function Link({
  href,
  target = "_self",
  classes = "Link",
  children,
}: Props) {
  return (
    <a href={href} target={target} className={classes}>
      {children}
    </a>
  );
}
