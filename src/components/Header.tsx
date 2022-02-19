interface HeaderProps {
  category: string
}

export function Header({ category }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {category}</span>
      </span>
    </header>
  )
}
