type ChipProps = {
  children: string
}

export function Chip({ children }: ChipProps) {
  return <span className="chip">{children}</span>
}
