export default function TechStack() {
  return (
    <div className="pt-16 mt-16 w-full">
      <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] font-semibold mb-8 text-center">
        Partners Tecnológicos Oficiales
      </p>
      {/* Quitamos opacity y grayscale para que se vean full color siempre */}
      <div className="flex flex-wrap gap-10 md:gap-20 justify-center items-center">
        
        {/* OpenAI Logo (Oficial) */}
        <div className="flex items-center gap-2 group cursor-default">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-neutral-800 group-hover:text-[#10a37f] transition-colors">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729ZM13.26 22.4301a4.4755 4.4755 0 0 1-2.0356-3.7698l-.0149-.0097-1.3672-.82.0238 1.5571a4.49 4.49 0 0 1-2.1694 3.7371 4.524 4.524 0 0 1-5.738-1.0717l1.456-.8403a1.761 1.761 0 0 0 2.228.4126 1.7378 1.7378 0 0 0 .8482-1.4647l-.0228-3.085 1.7136.9959a4.5094 4.5094 0 0 1 5.0773.3592ZM3.7307 14.5374a4.4852 4.4852 0 0 1-1.396-4.0478 4.5287 4.5287 0 0 1 4.0774-4.295l.0238 1.5667a1.7516 1.7516 0 0 0-1.5715 1.6668 1.761 1.761 0 0 0 .7145 1.5266l2.666 1.5619-1.7088.9911a4.5094 4.5094 0 0 1-2.8054.0345Zm5.6174-12.001a4.524 4.524 0 0 1 5.7333 1.0765l-1.456.8403a1.7516 1.7516 0 0 0-2.2233-.4222 1.7472 1.7472 0 0 0-.853 1.4647l.0238 3.0754-1.704-.9911a4.5046 4.5046 0 0 1-2.0224-3.7644 4.4755 4.4755 0 0 1 2.5016-1.2792Zm8.381 2.767a4.4947 4.4947 0 0 1 1.4008 4.0478 4.5287 4.5287 0 0 1-4.0774 4.2902l-.0238-1.5667a1.761 1.761 0 0 0 1.5762-1.6668 1.7563 1.7563 0 0 0-.7144-1.5315l-2.6708-1.557 1.7088-.9912a4.5141 4.5141 0 0 1 2.8006-.0248Zm-3.1517 7.7113-1.7088.9912-.0238-3.0803 1.456-.8403a1.7516 1.7516 0 0 0 2.228.4174 1.7472 1.7472 0 0 0 .8482-1.4695l1.3672.82a4.4994 4.4994 0 0 1-2.1646 3.7371 4.524 4.524 0 0 1-2.0022-3.623Zm-6.9016-2.5289 1.7136-.9911 2.6708 1.557a1.7516 1.7516 0 0 0-.7145 1.5266 1.7563 1.7563 0 0 0 1.5715 1.662l-.0238 1.5716a4.519 4.519 0 0 1-4.0774-4.295 4.4755 4.4755 0 0 1 1.396-4.0478l-2.536 1.4695Zm-2.3168-5.4673 2.5456-1.4743 1.7088.9959-1.456.8403a1.7563 1.7563 0 0 0-2.228-.4174 1.7472 1.7472 0 0 0-.8482 1.4695l-1.3672-.82a4.4994 4.4994 0 0 1 2.1646-3.7371 4.5094 4.5094 0 0 1-.5196 3.143Z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight text-neutral-800">OpenAI</span>
        </div>

        {/* n8n Logo (Color Real) */}
        <div className="flex items-center gap-1">
           <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-[#ff6d5a]">
              <path d="M12.7 2.3c-.4-.4-1-.4-1.4 0l-3.2 3.2c-.4.4-.4 1 0 1.4l1.6 1.6c.2.2.5.2.7 0L12 6.9l1.6 1.6c.2.2.5.2.7 0l1.6-1.6c.4-.4.4-1 0-1.4L12.7 2.3zM6.9 8.1L3.7 11.3c-.4.4-.4 1 0 1.4l3.2 3.2c.4.4 1 .4 1.4 0l1.6-1.6c.2-.2.2-.5 0-.7L8.3 12l1.6-1.6c.2-.2.2-.5 0-.7L8.3 8.1c-.4-.4-1-.4-1.4 0zM15.7 8.1l-1.6 1.6c-.2.2-.2.5 0 .7L15.7 12l-1.6 1.6c-.2.2-.2.5 0 .7l1.6 1.6c.4.4 1 .4 1.4 0l3.2-3.2c.4-.4.4-1 0-1.4l-3.2-3.2c-.4-.4-1-.4-1.4 0zM11.3 14.1l-1.6 1.6c-.2.2-.2.5 0 .7l1.6 1.6c.4.4 1 .4 1.4 0l3.2-3.2c.4-.4.4-1 0-1.4l-3.2-3.2c-.4-.4-1-.4-1.4 0l-1.6 1.6c-.2.2-.2.5 0 .7l1.6 1.6z" />
           </svg>
           <span className="font-bold text-2xl tracking-tighter text-[#ff6d5a]">n8n</span>
        </div>

        {/* Make Logo (Color Real) */}
        <div className="flex items-center gap-1">
           <span className="bg-[#6f33ff] text-white px-2 rounded font-black text-xl h-8 flex items-center">M</span>
           <span className="font-bold text-2xl text-[#2d2d2d]">make</span>
        </div>

        {/* Voiceflow (Icono negro estandar) */}
        <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-black">
                <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm13-1h-2v2h2v-2zm-4 0H9v2h2v-2z" />
            </svg>
            <span className="font-bold text-xl">Voiceflow</span>
        </div>
        
      </div>
    </div>
  );
}