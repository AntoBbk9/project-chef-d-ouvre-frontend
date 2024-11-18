import React from 'react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-amber-50 relative overflow-hidden">
      {/* Vagues décoratives */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-48 bg-amber-700"></div>
        <div className="h-24 bg-amber-500 transform -translate-y-12 rounded-t-full"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-md mx-auto pt-32 px-4">
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-2 border-amber-700/20 flex items-center justify-center">
              <span className="text-amber-800 text-lg font-serif text-center leading-tight">
                Baby Registre Civil
              </span>
            </div>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-amber-700/20 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 30}deg) translate(52px, -50%)`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Titres */}
        <h1 className="text-3xl text-amber-800 mb-2">Bonjour,</h1>
        <h2 className="text-4xl font-bold text-amber-800 mb-8">Bienvenue!</h2>

        {/* Formulaire */}
        <form className="space-y-6">
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 bg-transparent border border-amber-700/20 rounded-md focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
            />
          </div>

          <div className="space-y-2">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 bg-transparent border border-amber-700/20 rounded-md focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="rounded border-amber-700/20 text-amber-700 focus:ring-amber-700"
              />
              <label htmlFor="remember" className="text-amber-800 text-sm">
                Rappelle-moi
              </label>
            </div>
            <a href="#" className="text-amber-800 hover:underline text-sm">
              Mots de passe oublié ?
            </a>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-opacity-50"
            >
              Se connecter
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-2 border border-amber-700 text-amber-700 rounded-md hover:bg-amber-700/10 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-opacity-50"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}