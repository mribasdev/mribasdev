import Image from "next/image"
import { Github, Linkedin, Instagram, Globe } from "lucide-react"

export default function ProfileReadme() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-black via-zinc-900 to-black py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Moisés Ribas</h1>
          <div className="h-12 overflow-hidden">
            <div className="typewriter">
              <span className="text-xl md:text-2xl text-zinc-400">Desenvolvedor Fullstack | Sempre em Evolução</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* GitHub Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900 rounded-lg p-6 shadow-md border border-zinc-800 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-white">Estatísticas GitHub</h3>
            <Image
              src="https://github-readme-stats.vercel.app/api?username=mribasdev&show_icons=true&theme=graywhite&hide_border=true&bg_color=0D1117&title_color=FFFFFF&icon_color=FFFFFF&text_color=AAAAAA"
              alt="GitHub Stats"
              width={450}
              height={170}
              className="w-full rounded-lg"
            />
          </div>
          <div className="bg-zinc-900 rounded-lg p-6 shadow-md border border-zinc-800 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-white">Linguagens Mais Usadas</h3>
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=mribasdev&layout=compact&langs_count=8&theme=graywhite&hide_border=true&bg_color=0D1117&title_color=FFFFFF&text_color=AAAAAA"
              alt="Top Languages"
              width={450}
              height={170}
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="bg-zinc-900 rounded-lg p-8 shadow-md border border-zinc-800">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Habilidades & Tecnologias</h2>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6 text-white">Tenho prática nas linguagens:</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
                {["html5", "css3", "javascript", "java", "python", "mysql", "microsoftsqlserver"].map((tech) => (
                  <div key={tech} className="flex flex-col items-center group">
                    <div className="bg-zinc-800 p-4 rounded-lg shadow-md transition-all duration-300 transform group-hover:translate-y-[-5px]">
                      <Image
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                        alt={tech}
                        width={40}
                        height={40}
                        className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="mt-3 text-sm capitalize text-zinc-400">
                      {tech.replace("microsoftsqlserver", "SQL Server")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Estou estudando:</h3>
              <div className="grid grid-cols-3 gap-6">
                {["typescript", "nodejs", "react"].map((tech) => (
                  <div key={tech} className="flex flex-col items-center group">
                    <div className="bg-zinc-800 p-4 rounded-lg shadow-md transition-all duration-300 transform group-hover:translate-y-[-5px] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <Image
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                        alt={tech}
                        width={40}
                        height={40}
                        className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                      />
                    </div>
                    <span className="mt-3 text-sm capitalize text-zinc-400">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <div className="bg-zinc-900 rounded-lg p-8 shadow-md border border-zinc-800">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Conecte-se Comigo</h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://mribas.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] shadow-md"
              >
                <Globe className="w-5 h-5" />
                <span>mribas.tech</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mribasdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] shadow-md"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/mribasdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] shadow-md"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/akaribas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] shadow-md"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Visitor Counter */}
        <div className="text-center text-zinc-500 mb-8">
          <p className="mb-2">Visitantes</p>
          <Image
            src="https://profile-counter.glitch.me/{mribasdev}/count.svg"
            alt="Visitor Count"
            width={200}
            height={40}
            className="mx-auto grayscale"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gradient-to-r from-black via-zinc-900 to-black py-8">
        <div className="max-w-4xl mx-auto text-center text-zinc-500">
          <p>© {new Date().getFullYear()} Moisés Ribas. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}

