interface CustomProps {
    text: string,
    fontType: string,
    fontSize: string,
    px: string,
    py: string,
    w: string,
}

export default function Button({text, fontType, fontSize, px, py, w}: CustomProps) {
    return (
      <button className={`bg-vh w-[${w}] flex items-center justify-center text-white hover:bg-vh2 duration-200 font-${fontType} text-${fontSize} px-${px} py-${py}`}>
          {text}
      </button>
    )
  }