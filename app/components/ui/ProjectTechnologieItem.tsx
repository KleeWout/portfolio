type Props = {
  title: string
  className?: string
}

const ProjectTechnologieItem: React.FC<Props> = ({ title, className = '' }) => {
  return (
    <p
      className={
        'inline-block rounded-lg bg-[#8cb4e9] p-1 text-sm text-white dark:bg-[#a78bfa] dark:gray-900' +
        className
      }
    >
      {title}
    </p>
  )
}

export default ProjectTechnologieItem
