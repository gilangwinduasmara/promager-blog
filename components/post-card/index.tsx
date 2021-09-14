import Image from 'next/image'

interface PostCardProps {
  title: string;
  description: string;
  slug: string;
  cover?: string;
  category?: any
}

const PostCard = (props:PostCardProps) => {
  return (
    <a href={`/posts/${props.slug}`} className="shadow-xl hover:shadow-2xl bg-white rounded-md overflow-hidden md:w-64 relative pb-8">
      <div className="h-100">
        <div className="w-100 h-64 relative">
          <Image className="" src="/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" layout="fill" objectFit="cover"/>
        </div>
        <div className="w-100">
        </div>
      </div>
      <div className="p-4">
        <p className="text-xl font-bold">{props.title}</p>
        {props.category && <a href={"/categories/"+props.category.slug} className="bg-purple-200 px-2 flex-grow-0">{props.category.name}</a>}        
        <p className="text-sm">{props.description}</p>
      </div>
      <div className="absolute bottom-2 right-2">
        <div className="mt-auto bg-purple-600 text-purple-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-1 px-4 inline-flex">
          More
        </div>
      </div>
    </a>
  )
}

export default PostCard;