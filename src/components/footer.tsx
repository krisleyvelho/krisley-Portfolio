export function Footer() {
  const yearToday = new Date().getFullYear();

  return (
    <footer className="mt-12 py-6 border-t text-center text-gray-600 text-sm">
    © {yearToday} Meu App. Todos os direitos reservados.
  </footer>
  )
}