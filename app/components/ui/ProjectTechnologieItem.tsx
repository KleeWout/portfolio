type Props = {
  title: string
  className?: string
}

const ProjectTechnologieItem: React.FC<Props> = ({ title, className = '' }) => {
  return (
    <p
      className={
        'dark:gray-900 inline-block rounded-lg bg-[#33a3f4] p-1 text-sm text-white dark:bg-[#a78bfa]' +
        className
      }
    >
      {title}
    </p>
  )
}

export default ProjectTechnologieItem
