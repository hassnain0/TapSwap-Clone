interface StaticProps {
  title: string;
  content: string;
}

export function Static({ title, content }: StaticProps) {
  return (
    <li className="text-white flex flex-col gap-1 items-center">
      <span className="text-sm text-[#909090] font-medium">{title}:</span>
      <strong className="text-xl text-white">{content}</strong>
    </li>
  )
}