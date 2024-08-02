interface StaticProps {
  title: string;
  content: string;
}

export function Static({ title, content }: StaticProps) {
  return (
    <li className="text-white flex flex-col gap-2 items-center">
      <span className="text-[20px] text-[#909090] font-medium">{title}:</span>
      <strong className="text-[28px] text-[#909090]">{content}</strong>
    </li>
  )
}