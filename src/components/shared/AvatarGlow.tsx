export default function AvatarGlow(props: { src: string, alt: string }) {
    return (
        <img src={props.src} alt={props.alt} className="ease-in-out duration-400 hover:scale-105 hover:shadow-glow w-[30vw] aspect-square rounded-full object-cover shadow-primary shadow-[0_0_20px_0]" />
    )
}