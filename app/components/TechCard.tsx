import Image from 'next/image'

const TechCard = ({
  cardInfo: { name, description, imageUrl, bgColor },
}: {
  cardInfo: {
    name: string
    description: string
    imageUrl: string,
    bgColor: string
  }
}) => (
  <div className="flex min-h-[100px] items-center gap-5 rounded-xl border border-[#33a3f4] bg-[#FAFAFA] p-2.5 transition-colors duration-200 hover:border-[#689ec4] hover:bg-[#F4F4F7]/90 dark:border-[#7262a5] dark:bg-[#202023]/90 dark:hover:border-[#8978c5] dark:hover:bg-[#262626]">
    <div className={`p-3 ${bgColor} w-fit rounded-lg`}>
      <Image
        src={imageUrl}
        width={1000}
        height={1000}
        alt={`${name} logo`}
        className={`size-8 ${name === 'NextJS' ? 'dark:invert' : ''}`}
      />
    </div>
    <div>
      <h4 className="text-lg font-medium dark:text-stone-100">{name}</h4>
      <p className="text-dark-200/70 text-sm dark:text-[#d7dde4]">
        {description}
      </p>
    </div>
  </div>
)

export default TechCard
