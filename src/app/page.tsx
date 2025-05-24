import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Link } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
  className="flex-1 relative bg-cover bg-center"
  style={{ backgroundImage: "url('/images/image.jpg')" }}
>
  {/* Overlay transparent */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Contenu au-dessus de l'overlay */}
  <div className="relative z-10 container mx-auto px-4 py-8">
    <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
      <h1 className="text-4xl font-bold">Bienvenue sur PerformEd</h1>
      <p className="text-xl">Votre plateforme d'apprentissage et de suivi de performance</p>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 border rounded-lg bg-white/20 backdrop-blur hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Prise de Notes</h3>
          <p>Organisez et structurez vos notes d'apprentissage</p>
        </div>
        <div className="p-6 border rounded-lg bg-white/20 backdrop-blur hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Génération de Questions</h3>
          <p>Créez des questions pour tester vos connaissances</p>
        </div>
        <div className="p-6 border rounded-lg bg-white/20 backdrop-blur hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Suivi de Performance</h3>
          <p>Analysez vos progrès et performances</p>
        </div>
      </div>
    </div>
  </div>
</main>

      <Footer />
    </div>
  )
}
