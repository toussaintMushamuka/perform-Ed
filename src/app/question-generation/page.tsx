import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function QuestionGenerationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Question Generation</h1>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">Le contenu de cette page sera ajouté prochainement.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
