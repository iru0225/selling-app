import { Image } from './styled'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

const ImageComponent = ({
  src,
  alt,
  width,
  height
}: ImageProps) => {  
  return(
    <Image src={src} alt={alt} width={width} height={height}/>
  )
}

export default ImageComponent