import Image from "next/image"
import Link from "next/link"
import logo from '../../public/powermycode.jpg'

export default function Author() {
  return (
    <div className="flex items-center mt-6">
      <Image src={logo} className='rounded-full object-cover object-center ' width={40} height={40} alt={'Power My Code'} />
      <div className="mx-4">
        <h1 className="text-sm text-gray-700 dark:text-gray-200">Nilesh Darji</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
      </div>
    </div>
  )
}
