import clsx from "clsx"

export default function Badge({ children, variant }) {
  const classes = clsx("badge", variant && `badge--${variant}`)
  return (
    <div className={classes}>{children}</div>
  )
}